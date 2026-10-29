import "server-only";

import type { PromptVersion } from "./commun";
import { v1 } from "./v1";
import { v2 } from "./v2";
import { v3 } from "./v3";
import { v4 } from "./v4";

// Toutes les versions du prompt. Pour en ajouter une :
//   1. copier la dernière version (ex. v1.ts → v2.ts) et renommer l'export (v1 → v2) ;
//   2. la modifier, décrire le changement dans « note » et choisir ses cas d'exemple dans « exemples »
//      (identifiants de tests/jeux/cartographie.json, exclus de l'évaluation de cette version) ;
//   3. l'ajouter ci-dessous, puis l'évaluer : npm run evaluer -- --prompt v2
//   4. quand elle est meilleure, la mettre dans VERSION_ACTIVE : c'est celle qu'utilise l'application.
export const versions = { v1, v2, v3, v4 } satisfies Record<string, PromptVersion>;

export type NomVersion = keyof typeof versions;

export const VERSION_ACTIVE: NomVersion = "v4";

export function estNomVersion(nom: string): nom is NomVersion {
  return nom in versions;
}
