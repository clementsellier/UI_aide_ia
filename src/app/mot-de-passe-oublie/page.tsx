import { CadreAuth } from "@/components/auth/cadre-auth";
import { FormulaireMotDePasseOublie } from "@/components/auth/formulaires-mot-de-passe";

export default function MotDePasseOubliePage() {
  return (
    <CadreAuth
      titre="Mot de passe oublié"
      sousTitre="Indiquez votre adresse : nous vous enverrons un lien pour choisir un nouveau mot de passe."
    >
      <FormulaireMotDePasseOublie />
    </CadreAuth>
  );
}
