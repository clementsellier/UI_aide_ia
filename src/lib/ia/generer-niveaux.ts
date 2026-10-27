import "server-only";

import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";

import type { Niveaux } from "@/lib/types";

import { construireMessage, PROMPT_SYSTEME } from "./prompt";
import { niveauxSchema, type DemandeNiveaux } from "./schemas";

// Claude Opus 5.5 : le plus capable de la gamme Opus pour du conseil adapté à des cas très variés.
// Effort « medium » (valeur par défaut du modèle, fixée explicitement) : bon équilibre qualité / temps d'attente.
const MODELE = "claude-opus-5-5";

/** Erreur prévue, avec un message affichable et le statut HTTP à renvoyer par le relais. */
export class ErreurIA extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

let client: Anthropic | undefined;

export async function genererNiveaux(demande: DemandeNiveaux): Promise<Niveaux> {
  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) {
    throw new ErreurIA("La clé API Anthropic n'est pas configurée sur le serveur (fichier .env.local).", 500);
  }
  client ??= new Anthropic();

  let reponse;
  try {
    reponse = await client.beta.messages.parse({
      model: MODELE,
      max_tokens: 16000,
      // Si le modèle décline la demande, l'API la relance d'elle-même sur le modèle de repli recommandé.
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "medium", format: betaZodOutputFormat(niveauxSchema) },
      system: PROMPT_SYSTEME,
      messages: [{ role: "user", content: construireMessage(demande) }],
    });
  } catch (erreur) {
    throw traduireErreur(erreur);
  }

  if (reponse.stop_reason === "refusal") {
    throw new ErreurIA("L'IA n'a pas pu traiter ce cas d'usage. Reformulez la description puis réessayez.", 422);
  }
  if (reponse.stop_reason === "max_tokens" || !reponse.parsed_output) {
    console.error("Réponse IA incomplète :", reponse.stop_reason);
    throw new ErreurIA("La réponse de l'IA est incomplète. Réessayez.", 502);
  }
  return reponse.parsed_output;
}

function traduireErreur(erreur: unknown) {
  console.error("Appel à l'API Claude en échec :", erreur);
  if (erreur instanceof Anthropic.AuthenticationError || erreur instanceof Anthropic.PermissionDeniedError) {
    return new ErreurIA("La clé API Anthropic est refusée. Vérifiez-la dans le fichier .env.local.", 500);
  }
  if (erreur instanceof Anthropic.RateLimitError) {
    return new ErreurIA("Trop de demandes en même temps. Réessayez dans un instant.", 429);
  }
  if (erreur instanceof Anthropic.APIConnectionError) {
    return new ErreurIA("Impossible de joindre le service d'IA. Vérifiez la connexion puis réessayez.", 504);
  }
  if (erreur instanceof Anthropic.InternalServerError) {
    return new ErreurIA("Le service d'IA est momentanément surchargé. Réessayez dans un instant.", 503);
  }
  return new ErreurIA("Le service d'IA a renvoyé une erreur inattendue.", 502);
}
