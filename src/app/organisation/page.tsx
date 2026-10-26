import Link from "next/link";

import { Champ } from "@/components/champ";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Écran 1 · Présentation de l'organisation (maquette Figma 8:2). Interface statique : aucune logique branchée.
const natures = [
  { valeur: "societe", libelle: "Société" },
  { valeur: "association", libelle: "Association" },
  { valeur: "service-etat", libelle: "Service d'État" },
  { valeur: "autre", libelle: "Autre" },
];

const natureSelectionnee = "societe";

export default function OrganisationPage() {
  return (
    <main className="mx-auto w-full max-w-page px-4 pt-8 pb-12 leading-[normal] md:px-8">
      <p className="text-sm text-muted-foreground">Écran 1 · Bonjour</p>
      <h1 className="mt-0.5 text-[28px] leading-[normal] font-semibold">Présentation de votre organisation</h1>

      <Card className="mt-11 gap-0 border p-6 pb-16 leading-[normal] ring-0">
        <div className="text-[15px] text-foreground">
          <p>Bonjour,</p>
          <p>Je vais vous aider à définir les cas d&apos;usage de l&apos;intelligence artificielle dans votre société.</p>
          <p className="mt-[1lh]">
            Avant de parler de cas d&apos;usage, je souhaite en savoir plus sur votre organisation. Merci de
            renseigner les informations ci-dessous :
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-6">
          <Champ id="nom" libelle="Nom de votre organisation" placeholder="Ex. : Novea" />

          <div className="flex flex-col gap-2">
            <p id="nature" className="text-sm leading-[normal] font-semibold">
              Nature de votre organisation
            </p>
            <div role="radiogroup" aria-labelledby="nature" className="flex flex-wrap gap-3">
              {natures.map((n) => {
                const actif = n.valeur === natureSelectionnee;
                return (
                  <Button
                    key={n.valeur}
                    role="radio"
                    aria-checked={actif}
                    variant={actif ? "default" : "outline"}
                    className={cn(
                      "h-11 w-[150px] justify-start px-5 font-semibold",
                      !actif && "border-input bg-card",
                    )}
                  >
                    {n.libelle}
                  </Button>
                );
              })}
            </div>
          </div>

          <Champ id="nature-autre" libelle="Si autre, préciser" placeholder="Ex. : fondation, coopérative…" />
          <Champ
            id="activite"
            libelle="Activité de votre organisation"
            placeholder="Décrivez votre activité, vos clients, vos produits…"
            hauteurZone="h-[120px]"
          />

          <Link href="/accueil" className={cn(buttonVariants(), "h-11 w-[212px] self-end font-semibold")}>
            Continuer
          </Link>
        </div>
      </Card>
    </main>
  );
}
