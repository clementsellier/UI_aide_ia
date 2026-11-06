"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Alerte, lienAuth } from "@/components/auth/cadre-auth";
import { Champ } from "@/components/champ";
import { Button } from "@/components/ui/button";
import { authClient, cheminDeRetour } from "@/lib/auth-client";

type Mode = "mot-de-passe" | "lien";

/** Connexion par e-mail et mot de passe, ou par lien magique reçu par e-mail. */
export function FormulaireConnexion() {
  const router = useRouter();
  const parametres = useSearchParams();
  const retour = cheminDeRetour(parametres.get("retour"));
  const [mode, setMode] = useState<Mode>("mot-de-passe");
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [lienEnvoyeA, setLienEnvoyeA] = useState<string | null>(null);

  async function soumettre(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const donnees = new FormData(event.currentTarget);
    const email = String(donnees.get("email") ?? "");
    setErreur(null);
    setEnvoiEnCours(true);

    if (mode === "lien") {
      const { data, error } = await authClient.signIn.magicLink({ email, callbackURL: retour });
      setEnvoiEnCours(false);
      if (error) return setErreur(error.message);
      return setLienEnvoyeA(data.email);
    }

    const { error } = await authClient.signIn.email({ email, password: String(donnees.get("mot-de-passe") ?? "") });
    setEnvoiEnCours(false);
    if (error) return setErreur(error.message);
    router.replace(retour);
  }

  function changerMode(nouveau: Mode) {
    setMode(nouveau);
    setErreur(null);
    setLienEnvoyeA(null);
  }

  if (lienEnvoyeA) {
    return (
      <div className="flex flex-col gap-5">
        <Alerte type="info">
          Un lien vient de vous être envoyé à <strong>{lienEnvoyeA}</strong>. Il est valable 15 minutes.
        </Alerte>
        <p className="text-sm text-muted-foreground">
          Ouvrez l&apos;e-mail et cliquez sur le lien pour vous connecter. Pensez à vérifier vos courriers
          indésirables.
        </p>
        <button type="button" onClick={() => changerMode("lien")} className={`${lienAuth} self-start text-sm`}>
          Utiliser une autre adresse
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={soumettre} className="flex flex-col gap-5">
      <Champ
        id="email"
        type="email"
        libelle="Adresse e-mail"
        placeholder="vous@exemple.fr"
        autoComplete="email"
        required
      />

      {mode === "mot-de-passe" && (
        <div className="flex flex-col gap-2">
          <Champ
            id="mot-de-passe"
            type="password"
            libelle="Mot de passe"
            placeholder="Votre mot de passe"
            autoComplete="current-password"
            required
          />
          <Link href="/mot-de-passe-oublie" className={`${lienAuth} self-end text-sm`}>
            Mot de passe oublié ?
          </Link>
        </div>
      )}

      {erreur && <Alerte type="erreur">{erreur}</Alerte>}

      <Button type="submit" disabled={envoiEnCours} className="h-11 font-semibold">
        {mode === "lien"
          ? envoiEnCours
            ? "Envoi en cours…"
            : "Recevoir mon lien de connexion"
          : envoiEnCours
            ? "Connexion…"
            : "Se connecter"}
      </Button>

      <button
        type="button"
        onClick={() => changerMode(mode === "lien" ? "mot-de-passe" : "lien")}
        className={`${lienAuth} text-sm`}
      >
        {mode === "lien" ? "Me connecter avec mon mot de passe" : "Recevoir plutôt un lien de connexion par e-mail"}
      </button>

      <p className="border-t border-border pt-5 text-center text-sm text-muted-foreground">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className={lienAuth}>
          Créer un compte
        </Link>
      </p>
    </form>
  );
}
