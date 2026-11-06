"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { chargerDonneesUtilisateur, useAppStore } from "@/lib/store";

/** En-tête des pages internes : utilisateur, organisation, compte et déconnexion. */
export function EnTete() {
  const { data } = authClient.useSession();
  const organisation = useAppStore((s) => s.organisation?.nom);
  const router = useRouter();

  async function seDeconnecter() {
    await authClient.signOut();
    await chargerDonneesUtilisateur(null);
    router.replace("/connexion");
  }

  if (!data) return null;

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex w-full max-w-page-large flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-8">
        <Link href="/accueil" className="text-sm font-semibold text-coral">
          Aide IA · Cas d&apos;usage
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <p className="leading-tight">
            <span className="font-semibold">{data.user.name || data.user.email}</span>
            {organisation && <span className="text-muted-foreground"> · {organisation}</span>}
          </p>
          <Link href="/compte" className="font-semibold underline-offset-4 hover:underline">
            Mon compte
          </Link>
          <Button variant="outline" size="sm" onClick={seDeconnecter}>
            Se déconnecter
          </Button>
        </div>
      </div>
    </header>
  );
}
