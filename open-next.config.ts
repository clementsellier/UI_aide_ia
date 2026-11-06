import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Aucune page n'est revalidée (pas d'ISR) : les pages pré-rendues sont servies depuis les fichiers
// statiques du worker. Pas besoin de R2 ni de KV. (L'interception du cache reste désactivée : PPR est activé.)
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
