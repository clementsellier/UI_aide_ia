"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { authClient, entretenirSession } from "@/lib/auth-client";
import { chargerDonneesUtilisateur, useAppStore } from "@/lib/store";

// Pages accessibles avant d'avoir décrit son organisation.
const SANS_ORGANISATION = ["/organisation", "/compte"];

/**
 * Pages internes : exige une session, charge les données du compte, puis renvoie vers /organisation
 * tant que l'organisation n'est pas décrite. Rien n'est affiché avant.
 */
export function GardeSession({ children }: { children: React.ReactNode }) {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();
  const chemin = usePathname();
  const userId = data?.user.id ?? null;
  const [chargePour, setChargePour] = useState<string | null>(null);
  const sansOrganisation = useAppStore((s) => s.organisation === null);

  useEffect(() => {
    if (!isPending && !userId) router.replace(`/connexion?retour=${encodeURIComponent(chemin)}`);
  }, [isPending, userId, chemin, router]);

  useEffect(() => {
    if (!userId) return;
    entretenirSession();
    let annule = false;
    chargerDonneesUtilisateur(userId).then(() => {
      if (!annule) setChargePour(userId);
    });
    return () => {
      annule = true;
    };
  }, [userId]);

  const pret = userId !== null && chargePour === userId;
  const doitDecrireOrganisation = pret && sansOrganisation && !SANS_ORGANISATION.includes(chemin);

  useEffect(() => {
    if (doitDecrireOrganisation) router.replace("/organisation");
  }, [doitDecrireOrganisation, router]);

  if (!pret || doitDecrireOrganisation) {
    return <p className="mx-auto mt-16 text-sm text-muted-foreground">Chargement…</p>;
  }
  return children;
}
