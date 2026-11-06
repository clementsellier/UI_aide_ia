"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const bouton = cn(
  buttonVariants(),
  "mt-10 h-12 w-[300px] max-w-full rounded-button-lg bg-coral font-semibold text-white hover:bg-coral/90",
);

/** Bouton de la page publique : « Se connecter », ou accès direct si une session est ouverte. */
export function AccesEspace() {
  const { data } = authClient.useSession();
  return data ? (
    <Link href="/accueil" className={bouton}>
      Accéder à mon espace
    </Link>
  ) : (
    <Link href="/connexion" className={bouton}>
      Se connecter
    </Link>
  );
}
