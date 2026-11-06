import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const styleChamp = "h-11 rounded-lg bg-input-bg px-5 text-sm placeholder:text-placeholder";

interface ChampProps {
  id: string;
  libelle: string;
  placeholder: string;
  defaultValue?: string;
  /** Hauteur d'une zone de texte multiligne ; sans hauteur, le champ tient sur une ligne. */
  hauteurZone?: string;
  /** Attributs du champ d'une ligne (formulaires de connexion). */
  type?: "text" | "email" | "password";
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
}

/** Libellé + champ de saisie, tels que dessinés dans les formulaires des maquettes. */
export function Champ({
  id,
  libelle,
  placeholder,
  defaultValue,
  hauteurZone,
  type = "text",
  autoComplete,
  required,
  minLength,
}: ChampProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="leading-[normal] font-semibold">
        {libelle}
      </Label>
      {hauteurZone ? (
        <Textarea
          id={id}
          name={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={cn(styleChamp, hauteurZone, "resize-none py-3.5")}
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          required={required}
          minLength={minLength}
          className={styleChamp}
        />
      )}
    </div>
  );
}
