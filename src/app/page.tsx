import { redirect } from "next/navigation";

// Point d'entrée : l'application commence par la présentation de l'organisation.
export default function RacinePage() {
  redirect("/organisation");
}
