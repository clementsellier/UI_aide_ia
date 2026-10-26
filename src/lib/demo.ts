import type { CasUsage, Organisation } from "./types";

// Données de démonstration des maquettes, en attendant le branchement du store et de l'IA.
export const organisationDemo: Organisation = {
  nom: "Novea",
  nature: "societe",
  natureAutre: "",
  activite: "",
};

export const casDemo: CasUsage[] = [
  {
    id: "1",
    fonction: "Vente",
    titre: "Rédiger des devis",
    description: "Je veux une solution pour faciliter la création des devis.",
    situationActuelle: "Je fais le chiffrage sur Excel, puis je rédige le devis dans mon logiciel.",
    situationSouhaitee:
      "Une solution qui chiffre et rédige le devis à partir d'un descriptif, que je valide avant envoi.",
    gainEspere: "",
    priorite: "important",
    niveaux: {
      chat: "Demander à l'IA de faire un devis, avec en pièce jointe un document décrivant les informations nécessaires : descriptif, nom du client, taux horaires, tarifs…",
      competences:
        "Consignes, règles et process, plus des documents de référence : exemple de devis, catalogue produit, grille tarifaire. Devis rédigés avec précision.",
      agent:
        "Enregistre le devis dans votre CRM ou dans un dossier client sur votre PC, puis envoie l'email au client avec le devis en pièce jointe.",
    },
    creeLe: "2026-10-26T00:00:00.000Z",
  },
  {
    id: "2",
    fonction: "Comptabilité",
    titre: "Relancer pour les impayés",
    description: "Je veux relancer plus vite les clients qui n'ont pas payé.",
    situationActuelle: "Je repère les retards dans mon logiciel comptable, puis j'écris chaque relance à la main.",
    situationSouhaitee: "Les relances sont préparées automatiquement selon le retard, je n'ai plus qu'à les valider.",
    gainEspere: "",
    priorite: "urgent",
    niveaux: {
      chat: "Demander à l'IA de rédiger une relance, en lui donnant le nom du client, le montant, la date d'échéance et le ton souhaité.",
      competences:
        "Modèles de relance par niveau de retard, conditions générales de vente et règles de pénalités. Relances adaptées à chaque situation.",
      agent:
        "Repère les factures en retard dans votre logiciel comptable, prépare la relance adaptée et l'envoie au client après votre validation.",
    },
    creeLe: "2026-10-26T00:00:00.000Z",
  },
];

export function trouverCasDemo(id: string) {
  return casDemo.find((c) => c.id === id);
}
