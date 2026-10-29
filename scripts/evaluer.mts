// Évalue une version du prompt sur les jeux de test et écrit un rapport à relire dans tests/resultats/<version>/.
//
//   npm run evaluer                                   → version active, tous les jeux
//   npm run evaluer -- --prompt v2                    → une autre version
//   npm run evaluer -- --jeu maison-luxe              → un seul jeu (fichier tests/jeux/<nom>.json)
//   npm run evaluer -- --cas luxe-synthese-ventes     → un seul cas
//   npm run evaluer -- --modele claude-sonnet-5-5     → un autre modèle (claude-opus-5-5, claude-sonnet-5-5, claude-haiku-5-5)
//   npm run evaluer -- --effort low                   → un autre niveau de réflexion (low, medium, high, xhigh, max)
//
// Chaque cas est un appel réel à l'API Claude, donc facturé. Lancé avec la condition « react-server »
// pour pouvoir importer les modules serveur (protégés par « server-only »).
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { parseArgs } from "node:util";

import {
  EFFORT,
  genererNiveaux,
  MODELE,
  MODELES,
  type Effort,
  type GenerationNiveaux,
  type Modele,
} from "@/lib/ia/generer-niveaux";
import { estNomVersion, VERSION_ACTIVE, versions } from "@/lib/ia/prompts";
import type { DemandeNiveaux } from "@/lib/ia/schemas";
import type { Niveaux, Priorite } from "@/lib/types";

interface CasTest {
  id: string;
  fonction: string;
  titre: string;
  description: string;
  situationActuelle: string;
  situationSouhaitee: string;
  gainEspere: string;
  priorite: Priorite | null;
  attendu: Partial<Niveaux> | null;
}

interface JeuTest {
  description: string;
  organisation: DemandeNiveaux["organisation"];
  cas: CasTest[];
}

type Consommation = GenerationNiveaux["consommation"];

const PARALLELE = 3;
const niveaux: [keyof Niveaux, string][] = [
  ["chat", "Niveau 1 · Chat"],
  ["competences", "Niveau 2 · Compétences"],
  ["agent", "Niveau 3 · Agent"],
];

// Tarifs indicatifs en dollars par million de tokens (grille au 2026-10-06, à vérifier sur
// https://platform.claude.com/docs/en/about-claude/pricing) : entrée, écriture du cache (5 min, 1,25 × l'entrée),
// lecture du cache, sortie. La lecture du cache de Haiku 5.5 est estimée à 0,1 × l'entrée.
const TARIFS: Record<Modele, { entree: number; ecritureCache: number; lectureCache: number; sortie: number }> = {
  "claude-opus-5-5": { entree: 4, ecritureCache: 5, lectureCache: 0.2, sortie: 20 },
  "claude-sonnet-5-5": { entree: 2, ecritureCache: 2.5, lectureCache: 0.2, sortie: 10 },
  "claude-haiku-5-5": { entree: 0.1, ecritureCache: 0.125, lectureCache: 0.01, sortie: 0.5 },
};
const EFFORTS: Effort[] = ["low", "medium", "high", "xhigh", "max"];

function resumeConsommation(c: Consommation) {
  const reflexion = c.output_tokens_details?.thinking_tokens ?? 0;
  return [
    `entrée ${c.input_tokens}`,
    `cache écrit ${c.cache_creation_input_tokens ?? 0}`,
    `cache lu ${c.cache_read_input_tokens ?? 0}`,
    `sortie ${c.output_tokens} (dont réflexion ${reflexion})`,
    `~${cout(c).toFixed(4)} $`,
  ].join(" · ");
}

process.loadEnvFile(".env.local");

const { values: options } = parseArgs({
  options: {
    prompt: { type: "string", default: VERSION_ACTIVE },
    jeu: { type: "string", multiple: true },
    cas: { type: "string", multiple: true },
    modele: { type: "string", default: MODELE },
    effort: { type: "string", default: EFFORT },
  },
});

const modele = options.modele as Modele;
const effort = options.effort as Effort;
if (!MODELES.includes(modele) || !EFFORTS.includes(effort)) {
  console.error(`Modèle ou effort inconnu. Modèles : ${MODELES.join(", ")} · efforts : ${EFFORTS.join(", ")}`);
  process.exit(1);
}
const tarif = TARIFS[modele];

function cout(c: Consommation) {
  return (
    (c.input_tokens * tarif.entree +
      (c.cache_creation_input_tokens ?? 0) * tarif.ecritureCache +
      (c.cache_read_input_tokens ?? 0) * tarif.lectureCache +
      c.output_tokens * tarif.sortie) /
    1_000_000
  );
}

const version = options.prompt;
if (!estNomVersion(version)) {
  console.error(`Version « ${version} » inconnue. Versions disponibles : ${Object.keys(versions).join(", ")}`);
  process.exit(1);
}
const versionChoisie = version;

const nomsJeux = options.jeu ?? (await readdir("tests/jeux")).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5));
const aEvaluer: { jeu: string; organisation: JeuTest["organisation"]; cas: CasTest }[] = [];
for (const jeu of nomsJeux) {
  const contenu = JSON.parse(await readFile(`tests/jeux/${jeu}.json`, "utf8")) as JeuTest;
  for (const cas of contenu.cas) {
    if (versions[version].exemples.includes(cas.id) || (options.cas && !options.cas.includes(cas.id))) continue;
    aEvaluer.push({ jeu, organisation: contenu.organisation, cas });
  }
}
if (aEvaluer.length === 0) {
  console.error("Aucun cas à évaluer avec ces options.");
  process.exit(1);
}

console.log(`Prompt ${version} · ${modele} · effort ${effort} · ${aEvaluer.length} cas (${nomsJeux.join(", ")})\n`);

async function evaluer({ jeu, organisation, cas }: (typeof aEvaluer)[number]) {
  const debut = Date.now();
  try {
    const { niveaux: obtenu, consommation } = await genererNiveaux(
      {
        organisation,
        cas: {
          fonction: cas.fonction,
          titre: cas.titre,
          description: cas.description,
          situationActuelle: cas.situationActuelle,
          situationSouhaitee: cas.situationSouhaitee,
          gainEspere: cas.gainEspere,
          priorite: cas.priorite ?? "important",
        },
      },
      { version: versionChoisie, modele, effort },
    );
    const duree = Math.round((Date.now() - debut) / 1000);
    console.log(`ok      ${cas.id} (${duree} s, ${consommation.output_tokens} tokens en sortie)`);
    return { jeu, cas, obtenu, consommation, duree, erreur: null };
  } catch (e) {
    const duree = Math.round((Date.now() - debut) / 1000);
    console.log(`ERREUR  ${cas.id} : ${(e as Error).message}`);
    return { jeu, cas, obtenu: null, consommation: null, duree, erreur: (e as Error).message };
  }
}

const resultats = [];
for (let i = 0; i < aEvaluer.length; i += PARALLELE) {
  resultats.push(...(await Promise.all(aEvaluer.slice(i, i + PARALLELE).map(evaluer))));
}

const consos = resultats.flatMap((r) => (r.consommation ? [r.consommation] : []));
const somme = (f: (c: Consommation) => number) => consos.reduce((total, c) => total + f(c), 0);
const moyenne = (f: (c: Consommation) => number) => Math.round(somme(f) / Math.max(consos.length, 1));
const dureeMoyenne = Math.round(resultats.reduce((total, r) => total + r.duree, 0) / resultats.length);

const maintenant = new Date();
const lignes = [
  `# Prompt ${version} · ${maintenant.toLocaleString("fr-FR")}`,
  "",
  `- Version : **${version}** — ${versions[version].note}`,
  `- Modèle : ${modele} · effort ${effort}`,
  `- Jeux : ${nomsJeux.join(", ")}`,
  "",
  "## Synthèse de consommation",
  "",
  `- Durée moyenne : ${dureeMoyenne} s par cas`,
  `- Tokens moyens par cas : entrée ${moyenne((c) => c.input_tokens)}, cache écrit ${moyenne((c) => c.cache_creation_input_tokens ?? 0)}, cache lu ${moyenne((c) => c.cache_read_input_tokens ?? 0)}, sortie ${moyenne((c) => c.output_tokens)} (dont réflexion ${moyenne((c) => c.output_tokens_details?.thinking_tokens ?? 0)})`,
  `- Coût estimé : ~${somme(cout).toFixed(3)} $ au total, ~${(somme(cout) / Math.max(consos.length, 1)).toFixed(4)} $ par cas (tarifs indicatifs)`,
  "",
];
for (const { jeu, cas, obtenu, consommation, duree, erreur } of resultats) {
  lignes.push(`## ${cas.titre}`, "", `\`${jeu} / ${cas.id}\` · ${duree} s`, "");
  if (consommation) lignes.push(`Tokens : ${resumeConsommation(consommation)}`, "");
  lignes.push(
    `> **Fonction** : ${cas.fonction || "—"} · **Priorité** : ${cas.priorite ?? "—"}  `,
    `> **Description** : ${cas.description || "—"}  `,
    `> **Situation actuelle** : ${cas.situationActuelle || "—"}  `,
    `> **Situation souhaitée** : ${cas.situationSouhaitee || "—"}  `,
    `> **Gain espéré** : ${cas.gainEspere || "—"}`,
    "",
  );
  if (!obtenu) {
    lignes.push(`**Erreur** : ${erreur}`, "");
    continue;
  }
  for (const [cle, libelle] of niveaux) {
    lignes.push(`### ${libelle}`, "");
    const attendu = cas.attendu?.[cle];
    if (attendu) lignes.push("**Attendu**", "", attendu, "");
    lignes.push(`**Obtenu** (${obtenu[cle].length} caractères)`, "", obtenu[cle], "");
  }
  lignes.push("**Vos remarques** :", "", "");
}

const dossier = `tests/resultats/${version}`;
await mkdir(dossier, { recursive: true });
const horodatage = maintenant.toISOString().slice(0, 16).replace(/[:T]/g, "-");
const reglages = modele === MODELE && effort === EFFORT ? "" : `-${modele.replace("claude-", "")}-${effort}`;
const fichier = `${dossier}/${horodatage}-${options.cas ? "cas" : nomsJeux.join("+")}${reglages}.md`;
await writeFile(fichier, lignes.join("\n"));

const reussis = resultats.filter((r) => r.obtenu).length;
console.log(`\n${reussis}/${resultats.length} réussis, ${dureeMoyenne} s en moyenne, coût estimé ~${somme(cout).toFixed(3)} $`);
console.log(`Rapport : ${fichier}`);
