import { cn } from "@/lib/utils";

interface CarteFiletProps extends React.ComponentProps<"div"> {
  /** Classe de couleur du filet vertical gauche, ex. « bg-coral ». */
  filet: string;
}

/** Carte ou bandeau avec le filet coloré de 6 px sur la gauche (cartes de bienvenue, cas, situations). */
export function CarteFilet({ filet, className, children, ...props }: CarteFiletProps) {
  return (
    <div className={cn("relative overflow-hidden border", className)} {...props}>
      <span aria-hidden className={cn("absolute inset-y-0 left-0 w-1.5", filet)} />
      {children}
    </div>
  );
}
