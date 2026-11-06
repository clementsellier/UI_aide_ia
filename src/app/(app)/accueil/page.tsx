"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { CarteFilet } from "@/components/carte-filet";
import { Priorites } from "@/components/priorites";
import { Button, buttonVariants } from "@/components/ui/button";
import { exporterExcel } from "@/lib/export-excel";
import { useAppStore, useStoreCharge } from "@/lib/store";
import { cn } from "@/lib/utils";

// Écrans 2 et 3 · Accueil sans cas d'usage / avec cas d'usage (maquettes Figma 17:2 et 17:34).
const boutonCorail = cn(
  buttonVariants(),
  "rounded-button-lg bg-coral font-semibold text-white hover:bg-coral/90",
);

export default function AccueilPage() {
  const charge = useStoreCharge();
  const nom = useAppStore((s) => s.organisation?.nom);
  const avecCas = useAppStore((s) => s.cas.length > 0);

  return (
    <main className="mx-auto w-full max-w-page-large px-4 pt-10 pb-12 leading-[normal] md:px-8">
      <h1 className="text-[28px] leading-[normal] font-semibold">
        Bonjour{charge && nom ? `, ${nom}` : ""}
      </h1>

      <Link
        href="/organisation"
        className="mt-[22px] inline-block text-sm font-semibold text-coral underline-offset-4 hover:underline"
      >
        Voir le détail de mon organisation&nbsp;&nbsp;→
      </Link>

      <CarteFilet filet="bg-coral" className="mt-[23px] min-h-44 rounded-2xl bg-card py-6 pr-6 pl-[30px]">
        <p className="text-base">
          Je vais vous aider à définir les cas d&apos;usage de l&apos;intelligence artificielle dans votre société.
        </p>
        {charge && !avecCas && (
          <p className="mt-[26px] text-sm text-muted-foreground">
            Entrez chacun de vos cas d&apos;usage concrets et je vous proposerai des solutions pour vous permettre
            d&apos;être plus efficace avec l&apos;intelligence artificielle générative.
          </p>
        )}
      </CarteFilet>

      {charge && (avecCas ? <ListeCas /> : <EtatVide />)}
    </main>
  );
}

function EtatVide() {
  return (
    <section className="mt-[69px] flex flex-col items-center rounded-2xl border border-dashed border-coral bg-tint px-6 pt-[26px] pb-[50px] text-center">
      <div className="relative flex size-16 items-center justify-center">
        <Image src="/images/cercle-etat-vide.svg" alt="" width={64} height={64} className="absolute inset-0" />
        <span aria-hidden className="relative text-[30px] font-semibold text-coral">
          +
        </span>
      </div>
      <h2 className="mt-[27px] text-xl leading-[normal] font-semibold">Aucun cas d&apos;usage pour le moment</h2>
      <p className="mt-2 text-sm leading-[normal] text-muted-foreground">Entrez vos cas d’usage</p>
      <Link href="/cas-usage/nouveau" className={cn(boutonCorail, "mt-[34px] h-12 w-[300px] max-w-full")}>
        Entrer votre premier cas d&apos;usage
      </Link>
    </section>
  );
}

function ListeCas() {
  const cas = useAppStore((s) => s.cas);
  const setPriorite = useAppStore((s) => s.setPriorite);
  const nom = useAppStore((s) => s.organisation?.nom);
  const [export_, setExport] = useState<"pret" | "en-cours" | "erreur">("pret");

  async function exporter() {
    setExport("en-cours");
    try {
      await exporterExcel(cas, nom);
      setExport("pret");
    } catch (e) {
      console.error("Export Excel :", e);
      setExport("erreur");
    }
  }

  return (
    <section className="mt-[69px]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="pl-1.5 text-lg leading-[normal] font-semibold">Vos cas d&apos;usage</h2>
        <div className="flex items-center gap-3">
          {export_ === "erreur" && (
            <p role="alert" className="text-sm text-destructive">
              L&apos;export a échoué, réessayez.
            </p>
          )}
          <Button
            onClick={exporter}
            disabled={export_ === "en-cours"}
            className="h-10 w-[260px] bg-coral font-semibold text-white hover:bg-coral/90"
          >
            {export_ === "en-cours" ? "Préparation du fichier…" : "Exporter en Excel"}
          </Button>
        </div>
      </div>

      <ul className="mt-3 flex flex-col gap-3">
        {cas.map((c, index) => (
          <li key={c.id}>
            <CarteFilet
              filet={index % 2 === 0 ? "bg-teal" : "bg-coral"}
              className="flex min-h-[66px] flex-wrap items-center justify-between gap-3 rounded-xl bg-card py-3 pr-4 pl-[26px]"
            >
              <Link href={`/cas-usage/${c.id}`} className="group">
                <p className="text-base leading-[normal] font-semibold group-hover:underline">
                  {index + 1}&nbsp;&nbsp;{c.titre || "Cas sans titre"}
                </p>
                <p className="mt-[7px] text-[13px] leading-[normal] text-muted-foreground">
                  {c.niveaux ? "Niveaux 1 · 2 · 3 disponibles" : "Niveaux à générer"}
                </p>
              </Link>
              <Priorites
                valeur={c.priorite}
                onChange={(priorite) => setPriorite(c.id, priorite)}
                libelle={`Priorité de « ${c.titre} »`}
                boutonClassName="w-[110px]"
              />
            </CarteFilet>
          </li>
        ))}
      </ul>

      <Link href="/cas-usage/nouveau" className={cn(boutonCorail, "mt-[22px] h-12 w-[300px] max-w-full")}>
        + Entrer un nouveau cas d&apos;usage
      </Link>
    </section>
  );
}
