"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Alerte } from "@/components/auth/cadre-auth";
import { buttonVariants } from "@/components/ui/button";
import { authClient, cheminDeRetour } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

// Chaque type de lien : vérification du jeton (usage unique, ouvre la session) et relance proposée en cas d'échec.
const types = {
  "lien-magique": {
    verifier: authClient.magicLink.verify,
    attente: "Connexion en cours…",
    relance: { href: "/connexion", libelle: "Recevoir un nouveau lien" },
  },
  verification: {
    verifier: authClient.verifyEmail,
    attente: "Confirmation de votre adresse…",
    relance: { href: "/connexion", libelle: "Me connecter pour recevoir un nouveau lien" },
  },
};

/** Page d'arrivée d'un lien reçu par e-mail (lien de connexion, confirmation d'adresse). */
export function OuvertureLien({ type }: { type: keyof typeof types }) {
  const { verifier, attente, relance } = types[type];
  const router = useRouter();
  const parametres = useSearchParams();
  const token = parametres.get("token");
  const retour = cheminDeRetour(parametres.get("callbackURL"));
  const [erreur, setErreur] = useState<string | null>(token ? null : "Ce lien est incomplet.");
  // Le jeton ne sert qu'une fois : on ne le vérifie qu'une fois, même si l'effet est rejoué en développement.
  const dejaVerifie = useRef(false);

  useEffect(() => {
    if (!token || dejaVerifie.current) return;
    dejaVerifie.current = true;
    verifier({ token }).then(({ error }) => {
      if (error) setErreur(error.message);
      else router.replace(retour);
    });
  }, [token, verifier, retour, router]);

  if (!erreur) return <p className="text-sm text-muted-foreground">{attente}</p>;

  return (
    <div className="flex flex-col gap-5">
      <Alerte type="erreur">{erreur}</Alerte>
      <p className="text-sm text-muted-foreground">
        Pour des raisons de sécurité, chaque lien n&apos;est valable qu&apos;un temps limité et ne sert qu&apos;une
        fois.
      </p>
      <Link href={relance.href} className={cn(buttonVariants(), "h-11 font-semibold")}>
        {relance.libelle}
      </Link>
    </div>
  );
}
