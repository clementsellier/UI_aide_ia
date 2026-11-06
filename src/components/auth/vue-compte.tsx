"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Alerte } from "@/components/auth/cadre-auth";
import { Champ } from "@/components/champ";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { authClient, LONGUEUR_MIN_MOT_DE_PASSE, type Session } from "@/lib/auth-client";
import { chargerDonneesUtilisateur, supprimerDonneesUtilisateur, useAppStore } from "@/lib/store";

type Retour = { type: "erreur" | "info"; texte: string } | null;

/** Écran « Mon compte » : informations, mot de passe, export et suppression des données. */
export function VueCompte() {
  const { data } = authClient.useSession();
  if (!data) return null;
  return (
    <main className="mx-auto w-full max-w-page px-4 pt-8 pb-12 leading-[normal] md:px-8">
      <h1 className="text-[28px] leading-[normal] font-semibold">Mon compte</h1>
      <div className="mt-8 flex flex-col gap-6">
        <Informations session={data} />
        <MotDePasse aUnMotDePasse={data.user.aUnMotDePasse} />
        <MesDonnees />
        <Suppression userId={data.user.id} />
      </div>
    </main>
  );
}

function Section({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <Card className="gap-0 border p-6 leading-[normal] ring-0">
      <h2 className="text-lg font-semibold">{titre}</h2>
      <div className="mt-4">{children}</div>
    </Card>
  );
}

function Informations({ session }: { session: Session }) {
  const [retour, setRetour] = useState<Retour>(null);

  async function enregistrer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { error } = await authClient.updateUser({ name: String(new FormData(event.currentTarget).get("nom")) });
    setRetour(error ? { type: "erreur", texte: error.message } : { type: "info", texte: "Votre nom est enregistré." });
  }

  return (
    <Section titre="Mes informations">
      <p className="text-sm">
        Adresse e-mail : <strong>{session.user.email}</strong>
      </p>
      <form onSubmit={enregistrer} className="mt-5 flex flex-col gap-4">
        <Champ id="nom" libelle="Votre nom" placeholder="Ex. : Marie Martin" defaultValue={session.user.name} />
        {retour && <Alerte type={retour.type}>{retour.texte}</Alerte>}
        <Button type="submit" variant="outline" className="h-10 self-start font-semibold">
          Enregistrer mon nom
        </Button>
      </form>
    </Section>
  );
}

function MotDePasse({ aUnMotDePasse }: { aUnMotDePasse: boolean }) {
  const [retour, setRetour] = useState<Retour>(null);
  const [cle, setCle] = useState(0);

  async function enregistrer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const donnees = new FormData(event.currentTarget);
    const newPassword = String(donnees.get("nouveau") ?? "");
    if (newPassword !== String(donnees.get("confirmation") ?? "")) {
      return setRetour({ type: "erreur", texte: "Les deux mots de passe ne sont pas identiques." });
    }
    const { error } = await authClient.changePassword({
      currentPassword: aUnMotDePasse ? String(donnees.get("actuel") ?? "") : undefined,
      newPassword,
    });
    if (error) return setRetour({ type: "erreur", texte: error.message });
    setRetour({ type: "info", texte: "Votre mot de passe est enregistré." });
    setCle((c) => c + 1); // vide le formulaire
  }

  return (
    <Section titre={aUnMotDePasse ? "Changer mon mot de passe" : "Définir un mot de passe"}>
      {!aUnMotDePasse && (
        <p className="text-sm text-muted-foreground">
          Vous vous connectez aujourd&apos;hui par lien reçu par e-mail. Vous pouvez aussi choisir un mot de passe.
        </p>
      )}
      <form key={cle} onSubmit={enregistrer} className="mt-4 flex flex-col gap-4">
        {aUnMotDePasse && (
          <Champ
            id="actuel"
            type="password"
            libelle="Mot de passe actuel"
            placeholder="Votre mot de passe actuel"
            autoComplete="current-password"
            required
          />
        )}
        <Champ
          id="nouveau"
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
        {retour && <Alerte type={retour.type}>{retour.texte}</Alerte>}
        <Button type="submit" variant="outline" className="h-10 self-start font-semibold">
          Enregistrer le mot de passe
        </Button>
      </form>
    </Section>
  );
}

function MesDonnees() {
  function exporter() {
    const { organisation, contexte, cas } = useAppStore.getState();
    const contenu = JSON.stringify({ exporteLe: new Date().toISOString(), organisation, contexte, cas }, null, 2);
    const url = URL.createObjectURL(new Blob([contenu], { type: "application/json" }));
    const lien = document.createElement("a");
    lien.href = url;
    lien.download = `aide-ia-mes-donnees-${new Date().toISOString().slice(0, 10)}.json`;
    lien.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Section titre="Mes données">
      <p className="text-sm text-muted-foreground">
        Téléchargez votre organisation et tous vos cas d&apos;usage dans un fichier (format JSON).
      </p>
      <Button onClick={exporter} variant="outline" className="mt-4 h-10 font-semibold">
        Exporter mes données
      </Button>
    </Section>
  );
}

function Suppression({ userId }: { userId: string }) {
  const router = useRouter();
  const [confirmation, setConfirmation] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  async function supprimer() {
    const { error } = await authClient.deleteUser();
    if (error) return setErreur(error.message);
    supprimerDonneesUtilisateur(userId);
    await chargerDonneesUtilisateur(null);
    router.replace("/");
  }

  return (
    <Section titre="Supprimer mon compte">
      <p className="text-sm text-muted-foreground">
        Votre compte, votre organisation et tous vos cas d&apos;usage seront définitivement effacés.
      </p>
      {erreur && (
        <div className="mt-4">
          <Alerte type="erreur">{erreur}</Alerte>
        </div>
      )}
      {confirmation ? (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold">Confirmez-vous la suppression ? Elle est définitive.</p>
          <Button onClick={supprimer} variant="destructive" className="h-10 font-semibold">
            Oui, supprimer définitivement
          </Button>
          <Button onClick={() => setConfirmation(false)} variant="outline" className="h-10">
            Annuler
          </Button>
        </div>
      ) : (
        <Button onClick={() => setConfirmation(true)} variant="destructive" className="mt-4 h-10 font-semibold">
          Supprimer mon compte
        </Button>
      )}
    </Section>
  );
}
