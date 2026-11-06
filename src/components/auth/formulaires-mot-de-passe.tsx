"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { Alerte, lienAuth } from "@/components/auth/cadre-auth";
import { Champ } from "@/components/champ";
import { Button, buttonVariants } from "@/components/ui/button";
import { authClient, LONGUEUR_MIN_MOT_DE_PASSE } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

/** Demande d'un lien de réinitialisation. La réponse ne dit pas si l'adresse a un compte. */
export function FormulaireMotDePasseOublie() {
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoyeA, setEnvoyeA] = useState<string | null>(null);

  async function soumettre(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErreur(null);
    setEnvoiEnCours(true);
    const { data, error } = await authClient.requestPasswordReset({
      email: String(new FormData(event.currentTarget).get("email") ?? ""),
      redirectTo: "/reinitialiser-mot-de-passe",
    });
    setEnvoiEnCours(false);
    if (error) return setErreur(error.message);
    setEnvoyeA(data.email);
  }

  if (envoyeA) {
    return (
      <div className="flex flex-col gap-5">
        <Alerte type="info">
          Si un compte existe pour <strong>{envoyeA}</strong>, un lien pour choisir un nouveau mot de passe vient
          de lui être envoyé. Il est valable 1 heure.
        </Alerte>
        <Link href="/connexion" className={`${lienAuth} text-sm`}>
          Retour à la connexion
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={soumettre} className="flex flex-col gap-5">
      <Champ
        id="email"
        type="email"
        libelle="Adresse e-mail de votre compte"
        placeholder="vous@exemple.fr"
        autoComplete="email"
        required
      />
      {erreur && <Alerte type="erreur">{erreur}</Alerte>}
      <Button type="submit" disabled={envoiEnCours} className="h-11 font-semibold">
        {envoiEnCours ? "Envoi en cours…" : "Recevoir un lien de réinitialisation"}
      </Button>
      <Link href="/connexion" className={`${lienAuth} text-center text-sm`}>
        Retour à la connexion
      </Link>
    </form>
  );
}

/** Choix du nouveau mot de passe depuis le lien reçu par e-mail. */
export function FormulaireReinitialisation() {
  const token = useSearchParams().get("token");
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [lienInvalide, setLienInvalide] = useState(!token);
  const [termine, setTermine] = useState(false);

  async function soumettre(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const donnees = new FormData(event.currentTarget);
    const newPassword = String(donnees.get("mot-de-passe") ?? "");
    if (newPassword !== String(donnees.get("confirmation") ?? "")) {
      return setErreur("Les deux mots de passe ne sont pas identiques.");
    }
    setErreur(null);
    setEnvoiEnCours(true);
    const { error } = await authClient.resetPassword({ token: token ?? "", newPassword });
    setEnvoiEnCours(false);
    if (!error) return setTermine(true);
    setErreur(error.message);
    if (["INVALID_TOKEN", "TOKEN_USED", "TOKEN_EXPIRED"].includes(error.code)) setLienInvalide(true);
  }

  if (termine) {
    return (
      <div className="flex flex-col gap-5">
        <Alerte type="info">Votre mot de passe a été modifié. Vous pouvez maintenant vous connecter.</Alerte>
        <Link href="/connexion" className={cn(buttonVariants(), "h-11 font-semibold")}>
          Se connecter
        </Link>
      </div>
    );
  }

  if (lienInvalide) {
    return (
      <div className="flex flex-col gap-5">
        <Alerte type="erreur">{erreur ?? "Ce lien est incomplet."}</Alerte>
        <Link href="/mot-de-passe-oublie" className={cn(buttonVariants(), "h-11 font-semibold")}>
          Demander un nouveau lien
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={soumettre} className="flex flex-col gap-5">
      <Champ
        id="mot-de-passe"
        type="password"
        libelle="Nouveau mot de passe"
        placeholder={`Au moins ${LONGUEUR_MIN_MOT_DE_PASSE} caractères`}
        autoComplete="new-password"
        minLength={LONGUEUR_MIN_MOT_DE_PASSE}
        required
      />
      <Champ
        id="confirmation"
        type="password"
        libelle="Confirmez le nouveau mot de passe"
        placeholder="Le même mot de passe"
        autoComplete="new-password"
        minLength={LONGUEUR_MIN_MOT_DE_PASSE}
        required
      />
      {erreur && <Alerte type="erreur">{erreur}</Alerte>}
      <Button type="submit" disabled={envoiEnCours} className="h-11 font-semibold">
        {envoiEnCours ? "Enregistrement…" : "Enregistrer le nouveau mot de passe"}
      </Button>
    </form>
  );
}
