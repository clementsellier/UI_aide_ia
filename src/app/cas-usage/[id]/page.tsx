import Link from "next/link";
import { notFound } from "next/navigation";

import { CarteFilet } from "@/components/carte-filet";
import { buttonVariants } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { casDemo, trouverCasDemo } from "@/lib/demo";
import type { Niveaux } from "@/lib/types";
import { cn } from "@/lib/utils";

// Écran 5 · Cas d'usage et ses 3 niveaux (maquette Figma 21:56). Interface statique : aucune logique branchée.
const niveaux: { cle: keyof Niveaux; surtitre: string; titre: string }[] = [
  { cle: "chat", surtitre: "Niveau 1 · Chat", titre: "Demander dans le chat" },
  { cle: "competences", surtitre: "Niveau 2 · Compétences", titre: "IA avec compétences" },
  { cle: "agent", surtitre: "Niveau 3 · Agent", titre: "Agent IA connecté" },
];

export function generateStaticParams() {
  return casDemo.map((c) => ({ id: c.id }));
}

export default async function CasUsagePage({ params }: PageProps<"/cas-usage/[id]">) {
  const { id } = await params;
  const cas = trouverCasDemo(id);
  if (!cas) notFound();

  return (
    <main className="mx-auto w-full max-w-page-wide px-4 pt-8 pb-12 leading-[normal] md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link
            href="/accueil?vue=liste"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Vos cas d&apos;usage
          </Link>
          <h1 className="mt-0.5 text-[28px] leading-[normal] font-semibold">{cas.titre}</h1>
        </div>
        <Link
          href={`/cas-usage/${cas.id}/modifier`}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mb-0.5 h-10 w-[180px] bg-card text-[13px] font-semibold",
          )}
        >
          ← Retour à la description
        </Link>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <CarteFilet filet="bg-coral" className="min-h-24 rounded-xl bg-tint py-3.5 pr-5 pl-6">
          <p className="text-[13px] text-muted-foreground">Situation actuelle</p>
          <p className="mt-1.5 text-sm font-semibold">{cas.situationActuelle}</p>
        </CarteFilet>
        <CarteFilet filet="bg-teal" className="min-h-24 rounded-xl bg-teal-soft py-3.5 pr-5 pl-6">
          <p className="text-[13px] text-muted-foreground">Situation souhaitée</p>
          <p className="mt-1.5 text-sm font-semibold">{cas.situationSouhaitee}</p>
        </CarteFilet>
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        Réponses générées par notre IA : vous pouvez les compléter ou les modifier.
      </p>

      <div className="mt-3 grid gap-5 md:grid-cols-3">
        {niveaux.map((n) => (
          <section key={n.cle} className="flex flex-col rounded-xl border bg-card p-[22px] pb-6">
            <p className="text-[13px] text-muted-foreground">{n.surtitre}</p>
            <h2 className="mt-1.5 text-[19px] font-semibold">{n.titre}</h2>
            <p className="mt-5 mb-5 text-sm text-muted-foreground">{cas.niveaux?.[n.cle]}</p>
            <Textarea
              aria-label={`Réponse ${n.surtitre}`}
              placeholder="Réponse générée ici, modifiable…"
              className="mt-auto min-h-[290px] shrink-0 resize-y rounded-lg border-0 bg-tint px-[18px] py-4 text-sm placeholder:text-placeholder"
            />
          </section>
        ))}
      </div>
    </main>
  );
}
