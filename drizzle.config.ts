import { defineConfig } from "drizzle-kit";

// Génère les migrations SQL (npm run db:generate) ; elles sont appliquées par Wrangler
// (npm run db:migrate:local, npm run db:migrate:remote), qui lit le dossier drizzle/.
export default defineConfig({
  dialect: "sqlite",
  // auth-schema.ts : tables Better Auth (généré) ; schema.ts : tables métier.
  schema: ["./src/lib/db/auth-schema.ts", "./src/lib/db/schema.ts"],
  out: "./drizzle",
  strict: true,
});
