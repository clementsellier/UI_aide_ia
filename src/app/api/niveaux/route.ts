import { ErreurIA, genererNiveaux } from "@/lib/ia/generer-niveaux";
import { demandeNiveauxSchema, type ErreurNiveaux } from "@/lib/ia/schemas";
import type { Niveaux } from "@/lib/types";

// Relais serveur : la clé API reste côté serveur, le navigateur n'appelle que cette route.
// POST /api/niveaux — corps : DemandeNiveaux — réponse : Niveaux, ou ErreurNiveaux avec un statut d'erreur.
export async function POST(request: Request) {
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

  try {
    const { niveaux } = await genererNiveaux(demande.data);
    return Response.json(niveaux satisfies Niveaux);
  } catch (e) {
    if (e instanceof ErreurIA) return erreur(e.message, e.status);
    console.error("Relais /api/niveaux :", e);
    return erreur("Erreur inattendue du serveur.", 500);
  }
}

function erreur(message: string, status: number) {
  return Response.json({ erreur: message } satisfies ErreurNiveaux, { status });
}
