import { notFound } from "next/navigation";

import { FormulaireCasUsage } from "@/components/formulaire-cas-usage";
import { casDemo, trouverCasDemo } from "@/lib/demo";

export function generateStaticParams() {
  return casDemo.map((c) => ({ id: c.id }));
}

export default async function ModifierCasUsagePage({ params }: PageProps<"/cas-usage/[id]/modifier">) {
  const { id } = await params;
  const cas = trouverCasDemo(id);
  if (!cas) notFound();

  return <FormulaireCasUsage titre="Modifier le cas d'usage" cas={cas} validerVers={`/cas-usage/${cas.id}`} />;
}
