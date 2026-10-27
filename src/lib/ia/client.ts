import type { CasUsage, ContexteEntreprise, Niveaux, Organisation } from "@/lib/types";

import type { DemandeNiveaux, ErreurNiveaux } from "./schemas";

/** Appelle le relais serveur pour générer les trois niveaux d'un cas d'usage (côté navigateur). */
export async function demanderNiveaux(
  organisation: Organisation | null,
  contexte: ContexteEntreprise,
  cas: CasUsage,
): Promise<Niveaux> {
  const demande: DemandeNiveaux = {
    organisation: organisation ?? { nom: "", nature: null, natureAutre: "", activite: "" },
    // Le contexte est facultatif : on ne l'envoie que s'il contient quelque chose.
    contexte: Object.values(contexte).some((v) => v.trim()) ? contexte : undefined,
    cas: {
      fonction: cas.fonction,
      titre: cas.titre,
      description: cas.description,
      situationActuelle: cas.situationActuelle,
      situationSouhaitee: cas.situationSouhaitee,
      gainEspere: cas.gainEspere,
      priorite: cas.priorite,
    },
  };

  let reponse: Response;
  try {
    reponse = await fetch("/api/niveaux", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(demande),
    });
  } catch {
    throw new Error("Impossible de joindre le serveur. Vérifiez votre connexion puis réessayez.");
  }

  const corps = (await reponse.json().catch(() => null)) as Niveaux | ErreurNiveaux | null;
  if (!reponse.ok || !corps || "erreur" in corps) {
    throw new Error(corps && "erreur" in corps ? corps.erreur : "Erreur inattendue du serveur.");
  }
  return corps;
}
