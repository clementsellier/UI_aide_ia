import { Suspense } from "react";

import { CadreAuth } from "@/components/auth/cadre-auth";
import { FormulaireReinitialisation } from "@/components/auth/formulaires-mot-de-passe";

// Arrivée du lien de réinitialisation reçu par e-mail.
export default function ReinitialiserMotDePassePage() {
  return (
    <CadreAuth titre="Choisir un nouveau mot de passe">
      <Suspense>
        <FormulaireReinitialisation />
      </Suspense>
    </CadreAuth>
  );
}
