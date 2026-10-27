"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Champ } from "@/components/champ";
import { Button } from "@/components/ui/button";
import { useAppStore, useStoreCharge } from "@/lib/store";
import type { NatureOrganisation } from "@/lib/types";
import { cn } from "@/lib/utils";

const natures: { valeur: NatureOrganisation; libelle: string }[] = [
  { valeur: "societe", libelle: "Société" },
  { valeur: "association", libelle: "Association" },
  { valeur: "service-etat", libelle: "Service d'État" },
  { valeur: "autre", libelle: "Autre" },
];

/** Formulaire de l'écran 1. Le contrôle de remplissage des champs viendra plus tard. */
export function FormulaireOrganisation() {
  const charge = useStoreCharge();
  // Le formulaire est recréé une fois les données du navigateur chargées, pour afficher les valeurs enregistrées.
  return <Formulaire key={charge ? "charge" : "initial"} />;
}

function Formulaire() {
  const router = useRouter();
  const organisation = useAppStore((s) => s.organisation);
  const setOrganisation = useAppStore((s) => s.setOrganisation);
  const [nature, setNature] = useState<NatureOrganisation | null>(organisation?.nature ?? "societe");

  function enregistrer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const donnees = new FormData(event.currentTarget);
    setOrganisation({
      nom: String(donnees.get("nom") ?? "").trim(),
      nature,
      natureAutre: String(donnees.get("nature-autre") ?? "").trim(),
      activite: String(donnees.get("activite") ?? "").trim(),
    });
    router.push("/accueil");
  }

  return (
    <form onSubmit={enregistrer} className="mt-7 flex flex-col gap-6">
      <Champ id="nom" libelle="Nom de votre organisation" placeholder="Ex. : Novea" defaultValue={organisation?.nom} />

      <div className="flex flex-col gap-2">
        <p id="nature" className="text-sm leading-[normal] font-semibold">
          Nature de votre organisation
        </p>
        <div role="radiogroup" aria-labelledby="nature" className="flex flex-wrap gap-3">
          {natures.map((n) => {
            const actif = n.valeur === nature;
            return (
              <Button
                key={n.valeur}
                type="button"
                role="radio"
                aria-checked={actif}
                onClick={() => setNature(n.valeur)}
                variant={actif ? "default" : "outline"}
                className={cn("h-11 w-[150px] justify-start px-5 font-semibold", !actif && "border-input bg-card")}
              >
                {n.libelle}
              </Button>
            );
          })}
        </div>
      </div>

      <Champ
        id="nature-autre"
        libelle="Si autre, préciser"
        placeholder="Ex. : fondation, coopérative…"
        defaultValue={organisation?.natureAutre}
      />
      <Champ
        id="activite"
        libelle="Activité de votre organisation"
        placeholder="Décrivez votre activité, vos clients, vos produits…"
        defaultValue={organisation?.activite}
        hauteurZone="h-[120px]"
      />

      <Button type="submit" className="h-11 w-[212px] self-end font-semibold">
        Continuer
      </Button>
    </form>
  );
}
