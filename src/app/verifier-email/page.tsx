import { Suspense } from "react";

import { CadreAuth } from "@/components/auth/cadre-auth";
import { OuvertureLien } from "@/components/auth/ouverture-lien";

// Arrivée du lien de confirmation d'adresse envoyé après l'inscription.
export default function VerifierEmailPage() {
  return (
    <CadreAuth titre="Confirmation de votre adresse">
      <Suspense>
        <OuvertureLien type="verification" />
      </Suspense>
    </CadreAuth>
  );
}
