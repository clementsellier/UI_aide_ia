import { Suspense } from "react";

import { VueCasUsage } from "@/components/vue-cas-usage";

// Écran 5 · Cas d'usage et ses 3 niveaux. Les cas sont enregistrés dans le navigateur : la page lit l'identifiant
// puis délègue l'affichage au composant client.
export default function CasUsagePage({ params }: PageProps<"/cas-usage/[id]">) {
  return <Suspense>{params.then(({ id }) => <VueCasUsage id={id} />)}</Suspense>;
}
