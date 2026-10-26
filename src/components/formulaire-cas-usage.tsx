import Link from "next/link";

import { Champ } from "@/components/champ";
import { Priorites } from "@/components/priorites";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { CasUsage } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FormulaireCasUsageProps {
  titre: string;
  /** Cas à modifier ; absent pour un nouveau cas. */
  cas?: CasUsage;
  /** Page affichée après « Valider ». */
  validerVers: string;
}

/** Écran 4 · Saisie d'un cas d'usage (maquette Figma 21:27). Interface statique : aucune logique branchée. */
export function FormulaireCasUsage({ titre, cas, validerVers }: FormulaireCasUsageProps) {
  return (
    <main className="mx-auto w-full max-w-page px-4 pt-8 pb-12 leading-[normal] md:px-8">
      <Link
        href="/accueil?vue=liste"
        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        ← Vos cas d&apos;usage
      </Link>
      <h1 className="mt-0.5 text-[28px] leading-[normal] font-semibold">{titre}</h1>

      <Card className="mt-11 gap-0 border p-6 leading-[normal] ring-0">
        <p className="text-[15px]">
          Nous allons détailler ensemble un cas d&apos;usage de l&apos;IA dans votre organisation.
        </p>

        <div className="mt-6 flex flex-col gap-5">
          <Champ
            id="fonction"
            libelle="Fonction de l'organisation concernée"
            placeholder="Ex. : Vente, Comptabilité, Ressources humaines…"
            defaultValue={cas?.fonction}
          />
          <Champ
            id="titre"
            libelle="Titre du cas d'usage"
            placeholder="Ex. : Rédiger les devis"
            defaultValue={cas?.titre}
          />
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

          <div className="flex flex-col gap-2">
            <p id="priorite" className="text-sm leading-[normal] font-semibold">
              Priorité
            </p>
            <Priorites
              valeur={cas?.priorite ?? "important"}
              libelleId="priorite"
              className="gap-2.5"
              boutonClassName="flex-1"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-[597px] flex-1 text-sm text-placeholder">
              Une fois toutes les informations du cas d&apos;usage remplies, vous pouvez appuyer sur le bouton
              valider et découvrir comment l&apos;IA peut vous accompagner au mieux dans votre cas.
            </p>
            <Link href={validerVers} className={cn(buttonVariants(), "h-11 w-[175px] font-semibold")}>
              Valider
            </Link>
          </div>
        </div>
      </Card>
    </main>
  );
}
