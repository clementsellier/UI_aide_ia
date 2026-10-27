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
  onChange: (priorite: Priorite) => void;
  /** Identifiant du libellé qui nomme le groupe (accessibilité). */
  libelleId?: string;
  libelle?: string;
  className?: string;
  boutonClassName?: string;
}

/** Les trois boutons de priorité, à choix unique. */
export function Priorites({ valeur, onChange, libelleId, libelle, className, boutonClassName }: PrioritesProps) {
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
            type="button"
            role="radio"
            aria-checked={actif}
            onClick={() => onChange(p.valeur)}
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
