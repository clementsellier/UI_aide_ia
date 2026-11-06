import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Une seule réserve de connexions par processus. En développement, le
// rechargement à chaud réévalue ce module : on garde la réserve sur
// globalThis pour ne pas ouvrir de nouvelles connexions à chaque fois.
const globalPourDb = globalThis as unknown as { poolAideIa?: Pool };

// Le constructeur ne se connecte pas : sans DATABASE_URL, le build et
// `npm run evaluer` fonctionnent ; seule la première requête échouera.
const pool =
  globalPourDb.poolAideIa ??
  new Pool({ connectionString: process.env.DATABASE_URL, max: 10 });

if (process.env.NODE_ENV !== "production") {
  globalPourDb.poolAideIa = pool;
}

export const db = drizzle({ client: pool });
