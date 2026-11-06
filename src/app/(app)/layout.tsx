import { Suspense } from "react";

import { EnTete } from "@/components/auth/en-tete";
import { GardeSession } from "@/components/auth/garde-session";

// Pages internes : réservées aux personnes connectées.
export default function LayoutApplication({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EnTete />
      <Suspense>
        <GardeSession>{children}</GardeSession>
      </Suspense>
    </>
  );
}
