import "server-only";

import cartographie from "../../../../tests/jeux/cartographie.json";

import type { DemandeNiveaux } from "../schemas";

/** Une version du prompt : le prompt système et la façon de présenter les informations saisies. */
export interface PromptVersion {
  /** Ce qui change par rapport à la version précédente (repris dans les rapports d'évaluation). */
  note: string;
  /**
   * Cas de tests/jeux/cartographie.json donnés en exemple dans le prompt, figés dans la version
   * pour qu'elle ne change pas si la cartographie évolue. Ils sont exclus de son évaluation.
   */
  exemples: string[];
  systeme: string;
  construireMessage: (demande: DemandeNiveaux) => string;
}

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

export function ligne(libelle: string, valeur: string | undefined) {
  return `${libelle} : ${valeur || "(non renseigné)"}`;
}

/** Message utilisateur standard : les informations saisies dans l'application, balisées par bloc. */
export function messageStandard({ organisation, contexte, cas }: DemandeNiveaux) {
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

/** Exemples tirés de la cartographie de référence (tests/jeux/cartographie.json), dans l'ordre donné. */
export function exemplesCartographie(ids: string[]) {
  return ids
    .map((id) => {
      const c = cartographie.cas.find((cas) => cas.id === id);
      if (!c) throw new Error(`Exemple « ${id} » absent de tests/jeux/cartographie.json`);
      return c;
    })
    .map((c) =>
      [
        "<exemple>",
        "<cas_usage>",
        ligne("Fonction concernée", c.fonction),
        ligne("Titre", c.titre),
        ligne("Situation actuelle", c.situationActuelle),
        ligne("Situation souhaitée", c.situationSouhaitee),
        ligne("Gain espéré", c.gainEspere),
        "</cas_usage>",
        "<reponse>",
        JSON.stringify(c.attendu, null, 2),
        "</reponse>",
        "</exemple>",
      ].join("\n"),
    )
    .join("\n\n");
}
