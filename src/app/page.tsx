import Link from "next/link";

import { AccesEspace } from "@/components/auth/acces-espace";
import { CarteFilet } from "@/components/carte-filet";

// Page publique : présentation courte et accès à la connexion.
export default function RacinePage() {
  return (
    <main className="mx-auto w-full max-w-page px-4 pt-16 pb-12 leading-[normal] md:px-8">
      <p className="text-sm font-semibold text-coral">Aide IA · Cas d&apos;usage</p>
      <h1 className="mt-2 text-[32px] leading-tight font-semibold">
        Trouvez comment l&apos;intelligence artificielle peut aider votre organisation
      </h1>

      <CarteFilet filet="bg-coral" className="mt-8 rounded-2xl bg-card py-6 pr-6 pl-[30px]">
        <p className="text-base">
          Décrivez votre organisation puis vos tâches du quotidien. Pour chacune, je vous propose trois façons
          d&apos;utiliser l&apos;IA générative :
        </p>
        <ul className="mt-4 flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted-foreground">
          <li>une simple conversation avec un assistant ;</li>
          <li>une conversation enrichie par vos documents et des compétences dédiées ;</li>
          <li>un agent relié à vos outils.</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Vous pouvez ensuite exporter l&apos;ensemble de vos cas d&apos;usage dans un fichier Excel.
        </p>
      </CarteFilet>

      <AccesEspace />

      <p className="mt-6 text-sm text-muted-foreground">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="font-semibold text-coral underline-offset-4 hover:underline">
          Créer un compte
        </Link>
      </p>
    </main>
  );
}
