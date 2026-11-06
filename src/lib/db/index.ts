import "server-only";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import { cache } from "react";

// Base Cloudflare D1 (SQLite). Sur Workers, la liaison `DB` n'existe que pendant une requête :
// le client est créé à la demande, une fois par requête (cache de React), jamais au chargement du module.
// En développement (`next dev`), next.config.ts branche une base D1 locale (dossier .wrangler/).
export const obtenirDb = cache(() => drizzle(getCloudflareContext().env.DB));
