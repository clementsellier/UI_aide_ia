import { existsSync } from "node:fs";

import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL && existsSync(".env.local")) {
  process.loadEnvFile(".env.local");
}

export default defineConfig({
  dialect: "postgresql",
  // auth-schema.ts : tables Better Auth (généré) ; schema.ts : tables métier.
  schema: ["./src/lib/db/auth-schema.ts", "./src/lib/db/schema.ts"],
  out: "./drizzle",
  dbCredentials: { url: process.env.DATABASE_URL ?? "" },
  strict: true,
});
