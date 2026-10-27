import { Suspense } from "react";

import { FormulaireCasUsage } from "@/components/formulaire-cas-usage";

export default function ModifierCasUsagePage({ params }: PageProps<"/cas-usage/[id]/modifier">) {
  return <Suspense>{params.then(({ id }) => <FormulaireCasUsage casId={id} />)}</Suspense>;
}
