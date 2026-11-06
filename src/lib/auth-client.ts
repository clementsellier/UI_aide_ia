"use client";

import { useSyncExternalStore } from "react";

import * as stub from "@/lib/auth-stub";

// Point d'entrée unique de l'authentification côté navigateur. Les pages n'importent que ce fichier.
// Version de test : branché sur le stub local (src/lib/auth-stub). Pour passer à Better Auth, remplacer
// ce fichier par createAuthClient({ plugins: [magicLinkClient(), organizationClient()] }) : les noms des
// méthodes et la forme { data, error } des réponses sont déjà les mêmes.

export type { ErreurAuth, Session } from "@/lib/auth-stub";
export { LONGUEUR_MIN_MOT_DE_PASSE } from "@/lib/auth-stub";

/** Session courante : `isPending` vaut vrai tant que le navigateur n'a pas lu le stockage. */
function useSession() {
  const data = useSyncExternalStore<stub.Session | null | undefined>(
    stub.abonnerSession,
    stub.sessionCourante,
    () => undefined,
  );
  return { data: data ?? null, isPending: data === undefined };
}

export const authClient = {
  useSession,
  signUp: { email: stub.inscrireParEmail },
  signIn: { email: stub.connecterParEmail, magicLink: stub.demanderLienMagique },
  magicLink: { verify: stub.verifierLienMagique },
  verifyEmail: stub.verifierEmail,
  requestPasswordReset: stub.demanderReinitialisation,
  resetPassword: stub.reinitialiserMotDePasse,
  changePassword: stub.changerMotDePasse,
  updateUser: stub.modifierUtilisateur,
  deleteUser: stub.supprimerUtilisateur,
  signOut: stub.deconnecter,
};

/** Spécifique au stub : renouvelle la session et remet le cookie lu par le proxy. */
export const entretenirSession = stub.entretenirSession;

/** Adresse de retour sûre après connexion (chemin interne uniquement). */
export function cheminDeRetour(retour: string | null) {
  return retour && retour.startsWith("/") && !retour.startsWith("//") ? retour : "/accueil";
}
