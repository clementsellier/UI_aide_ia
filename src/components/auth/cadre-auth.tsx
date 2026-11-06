import Link from "next/link";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/** Mise en page commune des écrans de connexion, d'inscription et de mot de passe. */
export function CadreAuth({
  titre,
  sousTitre,
  children,
}: {
  titre: string;
  sousTitre?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-[480px] px-4 pt-16 pb-12 leading-[normal]">
      <Link href="/" className="text-sm font-semibold text-coral underline-offset-4 hover:underline">
        Aide IA · Cas d&apos;usage
      </Link>
      <h1 className="mt-2 text-[28px] leading-[normal] font-semibold">{titre}</h1>
      {sousTitre && <p className="mt-2 text-sm text-muted-foreground">{sousTitre}</p>}
      <Card className="mt-8 gap-0 border p-6 leading-[normal] ring-0">{children}</Card>
    </main>
  );
}

/** Message d'erreur ou d'information dans un formulaire. */
export function Alerte({ type, children }: { type: "erreur" | "info"; children: React.ReactNode }) {
  return (
    <p
      role={type === "erreur" ? "alert" : "status"}
      className={cn(
        "rounded-lg px-4 py-3 text-sm",
        type === "erreur" ? "bg-destructive/10 text-destructive" : "bg-teal-soft text-foreground",
      )}
    >
      {children}
    </p>
  );
}

export const lienAuth = "font-semibold text-coral underline-offset-4 hover:underline";
