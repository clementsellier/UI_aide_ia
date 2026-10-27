// Passe le jeu de test dans le relais /api/niveaux et écrit un rapport « attendu / obtenu » à relire.
// Usage : lancer l'application (npm run dev ou npm start), puis : npm run evaluer
// Variable facultative : URL_APP (par défaut http://localhost:3000).
// Chaque cas est un appel réel à l'API Claude, donc facturé.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const URL_APP = process.env.URL_APP ?? "http://localhost:3000";
const PARALLELE = 3;
const niveaux = [
  ["chat", "Niveau 1 · Chat"],
  ["competences", "Niveau 2 · Compétences"],
  ["agent", "Niveau 3 · Agent"],
];

const jeu = JSON.parse(await readFile(new URL("../tests/jeu-de-test.json", import.meta.url), "utf8"));
const cas = jeu.filter((c) => !c.exemple);

async function evaluer(c) {
  const demande = {
    organisation: { nom: "", nature: "societe", natureAutre: "", activite: "" },
    cas: {
      fonction: c.fonction,
      titre: c.titre,
      description: "",
      situationActuelle: c.situationActuelle,
      situationSouhaitee: c.situationSouhaitee,
      gainEspere: c.gainEspere,
      priorite: c.priorite ?? "important",
    },
  };
  const debut = Date.now();
  const reponse = await fetch(`${URL_APP}/api/niveaux`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(demande),
  });
  const corps = await reponse.json();
  const duree = Math.round((Date.now() - debut) / 1000);
  console.log(`${reponse.ok ? "ok    " : "ERREUR"} ${c.id} (${duree} s)`);
  return { cas: c, statut: reponse.status, corps, duree };
}

const resultats = [];
for (let i = 0; i < cas.length; i += PARALLELE) {
  resultats.push(...(await Promise.all(cas.slice(i, i + PARALLELE).map(evaluer))));
}

const lignes = [`# Évaluation du prompt · ${new Date().toLocaleString("fr-FR")}`, ""];
for (const { cas: c, statut, corps, duree } of resultats) {
  lignes.push(`## ${c.titre}`, "", `Durée : ${duree} s`, "");
  if (statut !== 200) {
    lignes.push(`**Erreur ${statut}** : ${corps.erreur}`, "");
    continue;
  }
  for (const [cle, libelle] of niveaux) {
    lignes.push(`### ${libelle}`, "", "**Attendu**", "", c.attendu?.[cle] ?? "_(pas de réponse attendue)_", "");
    lignes.push(`**Obtenu** (${corps[cle].length} caractères)`, "", corps[cle], "");
  }
}

const dossier = new URL("../tests/resultats/", import.meta.url);
await mkdir(dossier, { recursive: true });
const fichier = new URL(`evaluation-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-")}.md`, dossier);
await writeFile(fichier, lignes.join("\n"));
const moyenne = Math.round(resultats.reduce((s, r) => s + r.duree, 0) / resultats.length);
console.log(`\n${resultats.filter((r) => r.statut === 200).length}/${resultats.length} réussis, ${moyenne} s en moyenne`);
console.log(`Rapport : ${fichier.pathname}`);
