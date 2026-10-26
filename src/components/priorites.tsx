import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Priorite } from "@/lib/types";

const priorites: { valeur: Priorite; libelle: string; actif: string }[] = [
  { valeur: "urgent", libelle: "Urgent", actif: "bg-urgent hover:bg-urgent/90" },
  { valeur: "important", libelle: "Important", actif: "bg-important hover:bg-important/90" },
  { valeur: "souhaitable", libelle: "Souhaitable", actif: "bg-souhaitable hover:bg-souhaitable/90" },
];

interface PrioritesProps {
  valeur: Priorite;
  /** Identifiant du libellé qui nomme le groupe (accessibilité). */
  libelleId?: string;
  libelle?: string;
  className?: string;
  boutonClassName?: string;
}

/** Les trois boutons de priorité. Interface statique : le choix n'est pas encore modifiable. */
export function Priorites({ valeur, libelleId, libelle, className, boutonClassName }: PrioritesProps) {
  return (
    <div
      role="radiogroup"
      aria-labelledby={libelleId}
      aria-label={libelleId ? undefined : libelle}
      className={cn("flex gap-2", className)}
    >
      {priorites.map((p) => {
        const actif = p.valeur === valeur;
        return (
          <Button
            key={p.valeur}
            role="radio"
            aria-checked={actif}
            className={cn(
              "h-9 font-semibold",
              actif ? cn(p.actif, "text-white") : "bg-inactive text-inactive-foreground hover:bg-inactive/80",
              boutonClassName,
            )}
          >
            {p.libelle}
          </Button>
        );
      })}
    </div>
  );
}
