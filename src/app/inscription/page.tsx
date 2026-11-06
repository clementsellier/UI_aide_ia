import { CadreAuth } from "@/components/auth/cadre-auth";
import { FormulaireInscription } from "@/components/auth/formulaire-inscription";

export default function InscriptionPage() {
  return (
    <CadreAuth titre="Créer un compte" sousTitre="Vous recevrez un e-mail pour confirmer votre adresse.">
      <FormulaireInscription />
    </CadreAuth>
  );
}
