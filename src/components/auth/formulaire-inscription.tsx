"use client";

import Link from "next/link";
import { useState } from "react";

import { Alerte, lienAuth } from "@/components/auth/cadre-auth";
import { Champ } from "@/components/champ";
import { Button } from "@/components/ui/button";
import { authClient, LONGUEUR_MIN_MOT_DE_PASSE } from "@/lib/auth-client";

/** Création d'un compte avec mot de passe ; l'adresse doit être confirmée avant la première connexion. */
export function FormulaireInscription() {
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [inscritAvec, setInscritAvec] = useState<string | null>(null);

  async function soumettre(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const donnees = new FormData(event.currentTarget);
    const password = String(donnees.get("mot-de-passe") ?? "");
    if (password !== String(donnees.get("confirmation") ?? "")) {
      return setErreur("Les deux mots de passe ne sont pas identiques.");
    }
    setErreur(null);
    setEnvoiEnCours(true);
    const { data, error } = await authClient.signUp.email({
      name: String(donnees.get("nom") ?? ""),
      email: String(donnees.get("email") ?? ""),
      password,
    });
    setEnvoiEnCours(false);
    if (error) return setErreur(error.message);
    setInscritAvec(data.email);
  }

  if (inscritAvec) {
    // Même message si l'adresse avait déjà un compte : rien n'est révélé.
    return (
      <div className="flex flex-col gap-5">
        <Alerte type="info">
          Vérifiez votre boîte mail : nous avons envoyé un lien de confirmation à <strong>{inscritAvec}</strong>.
        </Alerte>
        <p className="text-sm text-muted-foreground">
          Cliquez sur ce lien pour activer votre compte. Il est valable 1 heure. Si vous aviez déjà un compte
          avec cette adresse, connectez-vous directement.
        </p>
        <Link href="/connexion" className={`${lienAuth} text-sm`}>
          Aller à la page de connexion
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={soumettre} className="flex flex-col gap-5">
      <Champ id="nom" libelle="Votre nom" placeholder="Ex. : Marie Martin" autoComplete="name" required />
      <Champ
        id="email"
        type="email"
        libelle="Adresse e-mail"
        placeholder="vous@exemple.fr"
        autoComplete="email"
        required
      />
      <Champ
        id="mot-de-passe"
        type="password"
        libelle="Mot de passe"
        placeholder={`Au moins ${LONGUEUR_MIN_MOT_DE_PASSE} caractères`}
        autoComplete="new-password"
        minLength={LONGUEUR_MIN_MOT_DE_PASSE}
        required
      />
      <Champ
        id="confirmation"
        type="password"
        libelle="Confirmez le mot de passe"
        placeholder="Le même mot de passe"
        autoComplete="new-password"
        minLength={LONGUEUR_MIN_MOT_DE_PASSE}
        required
      />

      {erreur && <Alerte type="erreur">{erreur}</Alerte>}

      <Button type="submit" disabled={envoiEnCours} className="h-11 font-semibold">
        {envoiEnCours ? "Création du compte…" : "Créer mon compte"}
      </Button>

      <p className="border-t border-border pt-5 text-center text-sm text-muted-foreground">
        Déjà un compte ?{" "}
        <Link href="/connexion" className={lienAuth}>
          Se connecter
        </Link>
      </p>
    </form>
  );
}
