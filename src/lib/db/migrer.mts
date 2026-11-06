// Applique les migrations SQL du dossier `drizzle/` sans drizzle-kit.
// Exécuté directement par Node (types TypeScript ignorés nativement) :
//   npm run db:migrate
// Ce fichier ne doit importer que des paquets, sans alias `@/`.
import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const dossierMigrations = resolve(process.cwd(), "drizzle");

// En local, la variable est dans .env.local. En production, elle est fournie
// par l'environnement et le fichier n'existe pas.
if (!process.env.DATABASE_URL && existsSync(".env.local")) {
  process.loadEnvFile(".env.local");
}

async function principal() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL est absente : impossible de migrer la base.");
  }
  if (!existsSync(resolve(dossierMigrations, "meta", "_journal.json"))) {
    console.log("Aucune migration à appliquer.");
    return;
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  try {
    await migrate(drizzle({ client: pool }), {
      migrationsFolder: dossierMigrations,
    });
    console.log("Migrations appliquées.");
  } finally {
    await pool.end();
  }
}

principal().catch((erreur: unknown) => {
  console.error(erreur instanceof Error ? erreur.message : erreur);
  process.exit(1);
});
