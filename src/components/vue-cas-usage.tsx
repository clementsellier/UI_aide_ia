"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { CarteFilet } from "@/components/carte-filet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { demanderNiveaux } from "@/lib/ia/client";
import { useAppStore, useStoreCharge } from "@/lib/store";
import type { Niveaux } from "@/lib/types";
import { cn } from "@/lib/utils";

const niveaux: { cle: keyof Niveaux; surtitre: string; titre: string; description: string }[] = [
  {
    cle: "chat",
    surtitre: "Niveau 1 · Chat",
    titre: "Demander dans le chat",
    description:
      "Vous utilisez un assistant conversationnel, sans préparation : vous lui écrivez votre demande et joignez vos documents.",
  },
  {
    cle: "competences",
    surtitre: "Niveau 2 · Compétences",
    titre: "IA avec compétences",
    description:
      "L'IA est préparée une fois pour toutes avec vos consignes, vos règles et vos documents de référence.",
  },
  {
    cle: "agent",
    surtitre: "Niveau 3 · Agent",
    titre: "Agent IA connecté",
    description:
      "Un agent relié à vos outils agit pour vous : certains envois partent automatiquement, les autres après votre validation.",
  },
];

// Une seule génération à la fois par cas, même si l'écran est monté deux fois (mode strict de React en développement).
const generationsEnCours = new Map<string, Promise<Niveaux>>();

/** Écran 5 · Cas d'usage et ses 3 niveaux (maquette Figma 21:56). Génère les réponses de l'IA à la première ouverture. */
export function VueCasUsage({ id }: { id: string }) {
  const charge = useStoreCharge();
  const cas = useAppStore((s) => s.cas.find((c) => c.id === id));
  const setNiveaux = useAppStore((s) => s.setNiveaux);
  const [erreur, setErreur] = useState<string | null>(null);

  const aGenerer = charge && cas !== undefined && cas.niveaux === null && erreur === null;

  useEffect(() => {
    if (!aGenerer) return;
    let generation = generationsEnCours.get(id);
    if (!generation) {
      const { organisation, contexte, cas: tous } = useAppStore.getState();
      const casActuel = tous.find((c) => c.id === id);
      if (!casActuel) return;
      generation = demanderNiveaux(organisation, contexte, casActuel).finally(() => generationsEnCours.delete(id));
      generationsEnCours.set(id, generation);
    }
    generation.then(
      (resultat) => setNiveaux(id, resultat),
      (e: Error) => setErreur(e.message),
    );
  }, [aGenerer, id, setNiveaux]);

  if (charge && !cas) {
    return (
      <main className="mx-auto w-full max-w-page-wide px-4 pt-8 pb-12 leading-[normal] md:px-8">
        <LienRetour />
        <p className="mt-6 text-sm text-muted-foreground">Ce cas d&apos;usage n&apos;existe pas ou a été supprimé.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-page-wide px-4 pt-8 pb-12 leading-[normal] md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <LienRetour />
          <h1 className="mt-0.5 text-[28px] leading-[normal] font-semibold">{cas?.titre || "Cas sans titre"}</h1>
        </div>
        <Link
          href={`/cas-usage/${id}/modifier`}
          className={cn(buttonVariants({ variant: "outline" }), "mb-0.5 h-10 w-[180px] bg-card text-[13px] font-semibold")}
        >
          ← Retour à la description
        </Link>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <CarteFilet filet="bg-coral" className="min-h-24 rounded-xl bg-tint py-3.5 pr-5 pl-6">
          <p className="text-[13px] text-muted-foreground">Situation actuelle</p>
          <p className="mt-1.5 text-sm font-semibold">{cas?.situationActuelle || "Non renseignée"}</p>
        </CarteFilet>
        <CarteFilet filet="bg-teal" className="min-h-24 rounded-xl bg-teal-soft py-3.5 pr-5 pl-6">
          <p className="text-[13px] text-muted-foreground">Situation souhaitée</p>
          <p className="mt-1.5 text-sm font-semibold">{cas?.situationSouhaitee || "Non renseignée"}</p>
        </CarteFilet>
      </div>

      {erreur ? (
        <div role="alert" className="mt-5 flex flex-wrap items-center gap-3 text-sm">
          <p className="text-destructive">{erreur}</p>
          <Button variant="outline" className="h-8 bg-card font-semibold" onClick={() => setErreur(null)}>
            Réessayer
          </Button>
        </div>
      ) : (
        <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
          {cas?.niveaux || !charge
            ? "Réponses générées par notre IA : vous pouvez les compléter ou les modifier."
            : "Notre IA rédige les réponses adaptées à votre cas, cela prend quelques secondes…"}
        </p>
      )}

      <div className="mt-3 grid gap-5 md:grid-cols-3">
        {niveaux.map((n) => (
          <section key={n.cle} className="flex flex-col rounded-xl border bg-card p-[22px] pb-6">
            <p className="text-[13px] text-muted-foreground">{n.surtitre}</p>
            <h2 className="mt-1.5 text-[19px] font-semibold">{n.titre}</h2>
            <p className="mt-5 mb-5 text-sm text-muted-foreground">{n.description}</p>
            {cas?.niveaux ? (
              <Textarea
                aria-label={`Réponse ${n.surtitre}`}
                value={cas.niveaux[n.cle]}
                onChange={(e) => setNiveaux(id, { ...cas.niveaux!, [n.cle]: e.target.value })}
                className="min-h-[290px] flex-1 resize-y rounded-lg border-0 bg-tint px-[18px] py-4 text-sm"
              />
            ) : (
              <div
                aria-hidden
                className={cn(
                  "flex min-h-[290px] flex-1 flex-col gap-2.5 rounded-lg bg-tint px-[18px] py-4",
                  !erreur && "animate-pulse",
                )}
              >
                {!erreur && ["w-11/12", "w-full", "w-4/5", "w-full", "w-2/3"].map((largeur, i) => (
                  <span key={i} className={cn("h-3 rounded-full bg-inactive", largeur)} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}

function LienRetour() {
  return (
    <Link href="/accueil" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
      ← Vos cas d&apos;usage
    </Link>
  );
}
