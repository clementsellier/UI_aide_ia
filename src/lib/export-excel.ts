import type { CasUsage, Priorite } from "@/lib/types";

// Colonnes identiques au tableau de cartographie des cas d'usage fourni (tests/jeu-de-test.json en est la transcription).
const colonnes: { entete: string; largeur: number; valeur: (cas: CasUsage) => string | number }[] = [
  { entete: "Fonction dans l'entreprise", largeur: 22, valeur: (c) => c.fonction },
  {
    entete: "Description du cas d'usage",
    largeur: 30,
    valeur: (c) => [c.titre, c.description].filter(Boolean).join("\n"),
  },
  { entete: "Situation actuelle", largeur: 33, valeur: (c) => c.situationActuelle },
  { entete: "Situation attendue", largeur: 33, valeur: (c) => c.situationSouhaitee },
  { entete: "Gain espéré", largeur: 22, valeur: (c) => c.gainEspere },
  { entete: "priorité", largeur: 12, valeur: (c) => numerosPriorite[c.priorite] },
  {
    entete: "Apport de l'IA au niveau 1 :\nutilisation de la conversation avec l'IA générative",
    largeur: 28,
    valeur: (c) => c.niveaux?.chat ?? "",
  },
  {
    entete: "Apport de l'IA au niveau 2 :\nutilisation de l'IA générative enrichie par un contexte, ou des compétences",
    largeur: 50,
    valeur: (c) => c.niveaux?.competences ?? "",
  },
  {
    entete: "Apport de l'IA au niveau 3 :\nAgent IA connecté aux outils qui peut agir",
    largeur: 55,
    valeur: (c) => c.niveaux?.agent ?? "",
  },
];

const numerosPriorite: Record<Priorite, number> = { urgent: 1, important: 2, souhaitable: 3 };

const bordure = { style: "thin", color: { argb: "FF000000" } } as const;

/** Construit le fichier Excel des cas d'usage et le propose au téléchargement (côté navigateur). */
export async function exporterExcel(cas: CasUsage[], nomOrganisation: string | undefined) {
  // Chargée seulement au clic : la bibliothèque pèse plusieurs centaines de Ko.
  const { default: ExcelJS } = await import("exceljs");

  const classeur = new ExcelJS.Workbook();
  const feuille = classeur.addWorksheet("Cas d'usage", { views: [{ state: "frozen", ySplit: 1 }] });
  feuille.columns = colonnes.map((c) => ({ width: c.largeur }));

  const entete = feuille.addRow(colonnes.map((c) => c.entete));
  entete.height = 48;
  entete.eachCell((cellule) => {
    cellule.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFDDEBF7" } };
    cellule.font = { bold: false };
    cellule.alignment = { vertical: "bottom", wrapText: true };
    cellule.border = { top: bordure, left: bordure, bottom: bordure, right: bordure };
  });

  for (const c of cas) {
    const ligne = feuille.addRow(colonnes.map((col) => col.valeur(c)));
    ligne.eachCell({ includeEmpty: true }, (cellule) => {
      cellule.alignment = { vertical: "bottom", wrapText: true };
      cellule.border = { top: bordure, left: bordure, bottom: bordure, right: bordure };
    });
  }

  const contenu = await classeur.xlsx.writeBuffer();
  const lien = document.createElement("a");
  lien.href = URL.createObjectURL(
    new Blob([contenu], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  );
  lien.download = `${nomFichier(nomOrganisation)}.xlsx`;
  lien.click();
  // Libérée un peu plus tard : certains navigateurs lisent le lien après le clic.
  setTimeout(() => URL.revokeObjectURL(lien.href), 1000);
}

function nomFichier(nomOrganisation: string | undefined) {
  const date = new Date().toISOString().slice(0, 10);
  const nom = (nomOrganisation ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return ["cas-usage", nom, date].filter(Boolean).join("-");
}
