import "server-only";

// Quota de générations IA de la version de test, tenu en mémoire du serveur (remis à zéro au redémarrage).
// Avec la base de données, il sera calculé sur la table generation_ia.

const JOUR = 24 * 60 * 60 * 1000;
const DELAI_ENTRE_GENERATIONS = 10_000;

const globalPourQuota = globalThis as unknown as { quotaAideIa?: Map<string, number[]> };
const generations = (globalPourQuota.quotaAideIa ??= new Map<string, number[]>());

function quotaJournalier() {
  const valeur = Number(process.env.QUOTA_GENERATIONS_JOUR);
  return Number.isInteger(valeur) && valeur > 0 ? valeur : 10;
}

/** Message d'erreur si l'utilisateur ne peut pas lancer de génération maintenant, sinon null. */
export function verifierQuota(userId: string): string | null {
  const maintenant = Date.now();
  const recentes = (generations.get(userId) ?? []).filter((t) => t > maintenant - JOUR);
  generations.set(userId, recentes);

  if (recentes.length >= quotaJournalier()) {
    return "Vous avez atteint la limite de générations pour aujourd'hui. Elle sera renouvelée demain.";
  }
  if (recentes.some((t) => t > maintenant - DELAI_ENTRE_GENERATIONS)) {
    return "Une génération vient d'être lancée. Patientez quelques secondes avant d'en demander une autre.";
  }
  return null;
}

/** Compte une génération (réussie ou non : l'appel à l'API a eu lieu). */
export function noterGeneration(userId: string) {
  generations.set(userId, [...(generations.get(userId) ?? []), Date.now()]);
}
