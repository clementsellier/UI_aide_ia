import { FormulaireCasUsage } from "@/components/formulaire-cas-usage";

// Sans store, « Valider » ouvre le premier cas de démonstration.
export default function NouveauCasUsagePage() {
  return <FormulaireCasUsage titre="Nouveau cas d'usage" validerVers="/cas-usage/1" />;
}
