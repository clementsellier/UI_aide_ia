export type Priorite = "urgent" | "important" | "souhaitable";

export type NatureOrganisation = "societe" | "association" | "service-etat" | "autre";

/** Écran 1 : présentation de l'organisation. */
export interface Organisation {
  nom: string;
  nature: NatureOrganisation | null;
  natureAutre: string;
  activite: string;
}

/** Volet « Contexte de mon entreprise » : tous les champs sont facultatifs. */
export interface ContexteEntreprise {
  typeEntreprise: string;
  secteur: string;
  typeClients: string;
  nombreSalaries: string;
  informations: string;
}

/** Les trois niveaux de réponse générés par l'IA (modifiables par l'utilisateur). */
export interface Niveaux {
  chat: string;
  competences: string;
  agent: string;
}

/** Écran 4 : un cas d'usage saisi par le dirigeant. */
export interface CasUsage {
  id: string;
  fonction: string;
  titre: string;
  description: string;
  situationActuelle: string;
  situationSouhaitee: string;
  gainEspere: string;
  priorite: Priorite;
  niveaux: Niveaux | null;
  creeLe: string;
}
