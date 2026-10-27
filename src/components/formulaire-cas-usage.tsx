"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Champ } from "@/components/champ";
import { Priorites } from "@/components/priorites";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAppStore, useStoreCharge } from "@/lib/store";
import type { CasUsage, Priorite } from "@/lib/types";

/** Champs saisis : s'ils changent, les réponses de l'IA ne correspondent plus et sont régénérées. */
const champsTexte = [
  ["fonction", "fonction"],
  ["titre", "titre"],
  ["description", "description"],
  ["situation-actuelle", "situationActuelle"],
  ["situation-souhaitee", "situationSouhaitee"],
  ["gain-espere", "gainEspere"],
] as const;

interface FormulaireCasUsageProps {
  /** Cas à modifier ; absent pour un nouveau cas. */
  casId?: string;
}

/** Écran 4 · Saisie d'un cas d'usage (maquette Figma 21:27). Le contrôle de remplissage viendra plus tard. */
export function FormulaireCasUsage({ casId }: FormulaireCasUsageProps) {
  const charge = useStoreCharge();
  const cas = useAppStore((s) => (casId ? s.cas.find((c) => c.id === casId) : undefined));

  return (
    <main className="mx-auto w-full max-w-page px-4 pt-8 pb-12 leading-[normal] md:px-8">
      <Link
        href="/accueil"
        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        ← Vos cas d&apos;usage
      </Link>
      <h1 className="mt-0.5 text-[28px] leading-[normal] font-semibold">
        {casId ? "Modifier le cas d'usage" : "Nouveau cas d'usage"}
      </h1>

      <Card className="mt-11 gap-0 border p-6 leading-[normal] ring-0">
        <p className="text-[15px]">
          Nous allons détailler ensemble un cas d&apos;usage de l&apos;IA dans votre organisation.
        </p>
        {casId && charge && !cas ? (
          <p className="mt-6 text-sm text-muted-foreground">Ce cas d&apos;usage n&apos;existe pas ou a été supprimé.</p>
        ) : (
          // Recréé une fois les données chargées, pour afficher les valeurs enregistrées.
          <Formulaire key={charge ? "charge" : "initial"} cas={cas} />
        )}
      </Card>
    </main>
  );
}

function Formulaire({ cas }: { cas?: CasUsage }) {
  const router = useRouter();
  const ajouterCas = useAppStore((s) => s.ajouterCas);
  const modifierCas = useAppStore((s) => s.modifierCas);
  const [priorite, setPriorite] = useState<Priorite>(cas?.priorite ?? "important");

  function valider(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const donnees = new FormData(event.currentTarget);
    const saisie = Object.fromEntries(
      champsTexte.map(([nom, cle]) => [cle, String(donnees.get(nom) ?? "").trim()]),
    ) as Record<(typeof champsTexte)[number][1], string>;

    if (!cas) {
      const id = ajouterCas({ ...saisie, priorite });
      // Next garde la page en mémoire après la navigation : on la vide pour le prochain nouveau cas.
      event.currentTarget.reset();
      setPriorite("important");
      router.push(`/cas-usage/${id}`);
      return;
    }
    const contenuModifie = champsTexte.some(([, cle]) => saisie[cle] !== cas[cle]);
    modifierCas(cas.id, { ...saisie, priorite, ...(contenuModifie && { niveaux: null }) });
    router.push(`/cas-usage/${cas.id}`);
  }

  return (
    <form onSubmit={valider} className="mt-6 flex flex-col gap-5">
      <Champ
        id="fonction"
        libelle="Fonction de l'organisation concernée"
        placeholder="Ex. : Vente, Comptabilité, Ressources humaines…"
        defaultValue={cas?.fonction}
      />
      <Champ id="titre" libelle="Titre du cas d'usage" placeholder="Ex. : Rédiger les devis" defaultValue={cas?.titre} />
      <Champ
        id="description"
        libelle="Décrire le cas d'usage en une ou deux phrases"
        placeholder="Ex. : Je veux une solution pour faciliter la création des devis."
        defaultValue={cas?.description}
        hauteurZone="h-16"
      />
      <Champ
        id="situation-actuelle"
        libelle="Situation actuelle (votre manière de travailler)"
        placeholder="Ex. : Je fais le chiffrage sur Excel, puis je rédige le devis dans mon logiciel."
        defaultValue={cas?.situationActuelle}
        hauteurZone="h-16"
      />
      <Champ
        id="situation-souhaitee"
        libelle="Situation souhaitée idéale"
        placeholder="Ex. : À partir d'un descriptif, la solution chiffre et rédige le devis que je valide."
        defaultValue={cas?.situationSouhaitee}
        hauteurZone="h-16"
      />
      <Champ
        id="gain-espere"
        libelle="Gain espéré"
        placeholder="Ex. : Plus de réactivité avec le client, du temps gagné pour la prospection."
        defaultValue={cas?.gainEspere}
        hauteurZone="h-16"
      />

      <div className="flex flex-col gap-2">
        <p id="priorite" className="text-sm leading-[normal] font-semibold">
          Priorité
        </p>
        <Priorites
          valeur={priorite}
          onChange={setPriorite}
          libelleId="priorite"
          className="gap-2.5"
          boutonClassName="flex-1"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[597px] flex-1 text-sm text-placeholder">
          Une fois toutes les informations du cas d&apos;usage remplies, vous pouvez appuyer sur le bouton valider et
          découvrir comment l&apos;IA peut vous accompagner au mieux dans votre cas.
        </p>
        <Button type="submit" className="h-11 w-[175px] font-semibold">
          Valider
        </Button>
      </div>
    </form>
  );
}
