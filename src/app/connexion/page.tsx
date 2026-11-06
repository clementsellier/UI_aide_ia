import { Suspense } from "react";

import { CadreAuth } from "@/components/auth/cadre-auth";
import { FormulaireConnexion } from "@/components/auth/formulaire-connexion";

export default function ConnexionPage() {
  return (
    <CadreAuth titre="Se connecter">
      <Suspense>
        <FormulaireConnexion />
      </Suspense>
    </CadreAuth>
  );
}
