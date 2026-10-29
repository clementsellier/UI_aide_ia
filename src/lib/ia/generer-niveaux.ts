import "server-only";

import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";

import type { Niveaux } from "@/lib/types";

import { VERSION_ACTIVE, versions, type NomVersion } from "./prompts";
import { niveauxSchema, type DemandeNiveaux } from "./schemas";

// Claude Opus 5.5 : le plus capable de la gamme Opus pour du conseil adapté à des cas très variés.
// Effort « medium » (valeur par défaut du modèle, fixée explicitement) : bon équilibre qualité / temps d'attente.
export const MODELE = "claude-opus-5-5";
export const EFFORT: Effort = "medium";

/** Modèles comparés par le script d'évaluation (l'application utilise toujours MODELE). */
export const MODELES = ["claude-opus-5-5", "claude-sonnet-5-5", "claude-haiku-5-5"] as const;
export type Modele = (typeof MODELES)[number];
export type Effort = "low" | "medium" | "high" | "xhigh" | "max";

/** Réglages d'un appel ; seul le script d'évaluation s'écarte des valeurs par défaut. */
export interface ReglagesGeneration {
  version?: NomVersion;
  modele?: Modele;
  effort?: Effort;
}

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

export interface GenerationNiveaux {
  niveaux: Niveaux;
  /** Tokens consommés (entrée, cache, sortie dont réflexion) : lus par le script d'évaluation. */
  consommation: Anthropic.Beta.BetaUsage;
}

/** Génère les trois niveaux d'un cas. */
export async function genererNiveaux(
  demande: DemandeNiveaux,
  { version = VERSION_ACTIVE, modele = MODELE, effort = EFFORT }: ReglagesGeneration = {},
): Promise<GenerationNiveaux> {
  const prompt = versions[version];
  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) {
    throw new ErreurIA("La clé API Anthropic n'est pas configurée sur le serveur (fichier .env.local).", 500);
  }
  client ??= new Anthropic();

  let reponse;
  try {
    reponse = await client.beta.messages.parse({
      model: modele,
      max_tokens: 16000,
      // Si le modèle décline la demande, l'API la relance d'elle-même sur le modèle de repli recommandé.
      // Haiku 5.5 n'a pas de modèle de repli : le paramètre n'est pas envoyé.
      ...(modele !== "claude-haiku-5-5" && {
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default" as const,
      }),
      output_config: { effort, format: betaZodOutputFormat(niveauxSchema) },
      // Le prompt système est identique d'une requête à l'autre : mis en cache, il est refacturé à prix réduit
      // (et lu plus vite) tant que les requêtes se suivent à moins de 5 minutes.
      system: [{ type: "text", text: prompt.systeme, cache_control: { type: "ephemeral" } }],
      messages: [{ role: "user", content: prompt.construireMessage(demande) }],
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
  return { niveaux: reponse.parsed_output, consommation: reponse.usage };
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
