import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Les pages internes s'affichent une fois la session et les données du navigateur lues
    // (GardeSession) : le serveur ne peut pas les pré-rendre, la validation automatique les signalait
    // à tort. Validation seulement pour les pages qui exportent `instant`.
    instantInsights: { validationLevel: "manual-warning" },
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

// `next dev` : donne accès aux liaisons Cloudflare (base D1 locale, variables de wrangler.jsonc).
initOpenNextCloudflareForDev();
