import { Suspense } from "react";

import { CadreAuth } from "@/components/auth/cadre-auth";
import { OuvertureLien } from "@/components/auth/ouverture-lien";

// Arrivée du lien de connexion reçu par e-mail.
export default function LienConnexionPage() {
  return (
    <CadreAuth titre="Connexion">
      <Suspense>
        <OuvertureLien type="lien-magique" />
      </Suspense>
    </CadreAuth>
  );
}
