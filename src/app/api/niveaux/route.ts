import type { NextRequest } from "next/server";

import { COOKIE_SESSION } from "@/lib/auth-stub/constantes";
import { ErreurIA, genererNiveaux } from "@/lib/ia/generer-niveaux";
import { demandeNiveauxSchema, type ErreurNiveaux } from "@/lib/ia/schemas";
import { noterGeneration, verifierQuota } from "@/lib/quota";
import type { Niveaux } from "@/lib/types";

// Relais serveur : la clé API reste côté serveur, le navigateur n'appelle que cette route.
// POST /api/niveaux — corps : DemandeNiveaux — réponse : Niveaux, ou ErreurNiveaux avec un statut d'erreur.
export async function POST(request: NextRequest) {
  // Version de test : seule la présence du cookie de session est vérifiée (pas de vraie sécurité).
  // Avec Better Auth : exigerContexte() → auth.api.getSession({ headers }).
  const userId = request.cookies.get(COOKIE_SESSION)?.value;
  if (!userId) return erreur("Votre session a expiré. Reconnectez-vous.", 401);

  let corps: unknown;
  try {
    corps = await request.json();
  } catch {
    return erreur("Le corps de la requête doit être du JSON.", 400);
  }

  const demande = demandeNiveauxSchema.safeParse(corps);
  if (!demande.success) {
    return erreur("Les informations envoyées sont incomplètes ou mal formées.", 400);
  }

  const refus = verifierQuota(userId);
  if (refus) return erreur(refus, 429);
  noterGeneration(userId);

  try {
    const { niveaux } = await genererNiveaux(demande.data);
    return Response.json(niveaux satisfies Niveaux);
  } catch (e) {
    if (e instanceof ErreurIA) return erreur(e.message, e.status);
    console.error("Relais /api/niveaux :", e instanceof Error ? e.name : "erreur inconnue");
    return erreur("Erreur inattendue du serveur.", 500);
  }
}

function erreur(message: string, status: number) {
  return Response.json({ erreur: message } satisfies ErreurNiveaux, { status });
}
