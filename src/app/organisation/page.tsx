import { FormulaireOrganisation } from "@/components/formulaire-organisation";
import { Card } from "@/components/ui/card";

// Écran 1 · Présentation de l'organisation (maquette Figma 8:2).
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

        <FormulaireOrganisation />
      </Card>
    </main>
  );
}
