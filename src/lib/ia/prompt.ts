import "server-only";

import jeuDeTest from "../../../tests/jeu-de-test.json";

import type { DemandeNiveaux } from "./schemas";

// Prompt v1. Le prompt système ne contient aucune donnée variable : il reste identique d'une requête à l'autre.
// Les exemples viennent du jeu de test (cas marqués « exemple » dans tests/jeu-de-test.json),
// qui sont exclus de l'évaluation.

const CONSIGNES = `Tu accompagnes des dirigeants de petites et moyennes organisations françaises qui veulent savoir comment l'intelligence artificielle générative peut les aider sur un cas d'usage précis. Ils ne sont pas spécialistes de l'IA. Pour chaque cas d'usage, tu décris comment l'IA l'aide à trois niveaux d'utilisation, du plus simple au plus intégré.

Niveau 1 · Chat (« chat ») : la personne utilise un assistant conversationnel, sans préparation. Décris ce qu'elle fait concrètement : ce qu'elle écrit ou dicte à l'IA, les documents qu'elle joint, et ce qu'elle lui demande de produire. Écris à la première personne (« Je joins…, et je demande à l'IA de… »), en une à trois phrases.

Niveau 2 · Compétences (« competences ») : l'assistant a été préparé une fois pour toutes avec le contexte de l'organisation. Commence par « J'ai enregistré dans la solution IA : », puis liste en tirets les consignes, règles et documents de référence propres à ce cas (trois à cinq éléments). Termine par une ou deux phrases sur ce que l'IA produit alors de mieux qu'au niveau 1 : résultat conforme aux règles, homogène d'une fois à l'autre, avec les anomalies ou écarts signalés.

Niveau 3 · Agent (« agent ») : un agent IA est relié aux outils de l'organisation et agit lui-même. Commence par « L'agent IA est connecté à … : » en nommant les outils utiles au cas (messagerie, agenda, CRM, logiciel de gestion, dossiers ou fichiers partagés, banque, outil de planification…), puis liste en tirets ce qu'il fait (trois à cinq actions, « il … »), dans l'ordre où cela se passe. L'agent prépare des brouillons et des propositions, mais n'envoie rien et ne décide rien seul : chaque envoi (email, relance, publication, commande) et chaque décision passe par la validation de la personne, même quand elle souhaite que ce soit automatique. Dis-le dans la réponse.

Pars de la situation actuelle de la personne (ses outils, ses fichiers, ses habitudes) et va vers la situation qu'elle souhaite et le gain qu'elle espère. Reprends ses mots et ses outils réels plutôt que des généralités. Chaque niveau doit apporter quelque chose de plus que le précédent.

Écris en français simple, en texte brut : retours à la ligne et tirets « - » pour les listes, sans titres ni mise en forme Markdown. Reste court, comme dans les exemples : la personne doit comprendre chaque niveau en quelques secondes. Si une information manque, choisis l'interprétation la plus courante pour ce type d'organisation, sans la signaler.`;

interface CasJeuDeTest {
  id: string;
  exemple: boolean;
  fonction: string;
  titre: string;
  situationActuelle: string;
  situationSouhaitee: string;
  gainEspere: string;
  attendu: { chat?: string; competences?: string; agent?: string } | null;
}

function exemple(cas: CasJeuDeTest) {
  return [
    "<exemple>",
    "<cas_usage>",
    ligne("Fonction concernée", cas.fonction),
    ligne("Titre", cas.titre),
    ligne("Situation actuelle", cas.situationActuelle),
    ligne("Situation souhaitée", cas.situationSouhaitee),
    ligne("Gain espéré", cas.gainEspere),
    "</cas_usage>",
    "<reponse>",
    JSON.stringify(cas.attendu, null, 2),
    "</reponse>",
    "</exemple>",
  ].join("\n");
}

const exemples = (jeuDeTest as CasJeuDeTest[]).filter((c) => c.exemple).map(exemple);

export const PROMPT_SYSTEME = `${CONSIGNES}

Voici des exemples du niveau de détail et du ton attendus. Inspire-toi de leur forme, pas de leur contenu : chaque cas a ses propres outils, documents et actions.

<exemples>
${exemples.join("\n\n")}
</exemples>`;

const natures: Record<NonNullable<DemandeNiveaux["organisation"]["nature"]>, string> = {
  societe: "Société",
  association: "Association",
  "service-etat": "Service d'État",
  autre: "Autre",
};

const priorites: Record<DemandeNiveaux["cas"]["priorite"], string> = {
  urgent: "Urgent",
  important: "Important",
  souhaitable: "Souhaitable",
};

function ligne(libelle: string, valeur: string | undefined) {
  return `${libelle} : ${valeur || "(non renseigné)"}`;
}

/** Message utilisateur : les informations saisies dans l'application. */
export function construireMessage({ organisation, contexte, cas }: DemandeNiveaux) {
  const nature =
    organisation.nature === "autre" && organisation.natureAutre
      ? organisation.natureAutre
      : organisation.nature
        ? natures[organisation.nature]
        : "";

  const blocs = [
    "<organisation>",
    ligne("Nom", organisation.nom),
    ligne("Nature", nature),
    ligne("Activité", organisation.activite),
    "</organisation>",
  ];

  if (contexte) {
    blocs.push(
      "<contexte_entreprise>",
      ligne("Type d'entreprise", contexte.typeEntreprise),
      ligne("Secteur d'activité", contexte.secteur),
      ligne("Type de clients", contexte.typeClients),
      ligne("Nombre de salariés", contexte.nombreSalaries),
      ligne("Informations complémentaires", contexte.informations),
      "</contexte_entreprise>",
    );
  }

  blocs.push(
    "<cas_usage>",
    ligne("Fonction concernée", cas.fonction),
    ligne("Titre", cas.titre),
    ligne("Description", cas.description),
    ligne("Situation actuelle", cas.situationActuelle),
    ligne("Situation souhaitée", cas.situationSouhaitee),
    ligne("Gain espéré", cas.gainEspere),
    ligne("Priorité", priorites[cas.priorite]),
    "</cas_usage>",
    "",
    "Rédige la réponse des trois niveaux pour ce cas d'usage.",
  );

  return blocs.join("\n");
}
