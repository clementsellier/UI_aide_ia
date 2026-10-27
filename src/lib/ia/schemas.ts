import { z } from "zod";

import type { Niveaux } from "@/lib/types";

// Contrat du relais POST /api/niveaux, partagé entre l'interface et le serveur.
// Le contrôle de remplissage des champs viendra plus tard : ici on vérifie la forme et on borne les tailles.
const texte = z.string().trim().max(4000);

export const demandeNiveauxSchema = z.object({
  organisation: z.object({
    nom: texte,
    nature: z.enum(["societe", "association", "service-etat", "autre"]).nullable(),
    natureAutre: texte,
    activite: texte,
  }),
  contexte: z
    .object({
      typeEntreprise: texte,
      secteur: texte,
      typeClients: texte,
      nombreSalaries: texte,
      informations: texte,
    })
    .optional(),
  cas: z.object({
    fonction: texte,
    titre: texte,
    description: texte,
    situationActuelle: texte,
    situationSouhaitee: texte,
    gainEspere: texte.optional(),
    priorite: z.enum(["urgent", "important", "souhaitable"]),
  }),
});

export type DemandeNiveaux = z.infer<typeof demandeNiveauxSchema>;

/** Sortie structurée demandée à Claude : le contenu des trois zones de réponse modifiables. */
export const niveauxSchema = z.object({
  chat: z.string(),
  competences: z.string(),
  agent: z.string(),
}) satisfies z.ZodType<Niveaux>;

/** Réponse d'erreur du relais, affichable telle quelle dans l'interface. */
export interface ErreurNiveaux {
  erreur: string;
}
