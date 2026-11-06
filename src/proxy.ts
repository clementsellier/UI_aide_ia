import { NextResponse, type NextRequest } from "next/server";

import { COOKIE_SESSION } from "@/lib/auth-stub/constantes";

// Vérification optimiste : sans cookie de session, renvoi vers /connexion. C'est du confort, pas de la
// sécurité : la vraie vérification se fait dans chaque route serveur (et, côté navigateur, GardeSession).
// Avec Better Auth : getSessionCookie(request) de "better-auth/cookies".
export function proxy(request: NextRequest) {
  if (request.cookies.has(COOKIE_SESSION)) return NextResponse.next();
  const connexion = new URL("/connexion", request.url);
  connexion.searchParams.set("retour", request.nextUrl.pathname + request.nextUrl.search);
  return NextResponse.redirect(connexion);
}

export const config = {
  // Pages internes uniquement : /, /connexion, /inscription, les liens reçus par e-mail, /api et les
  // fichiers statiques restent accessibles.
  matcher: ["/accueil/:path*", "/organisation/:path*", "/cas-usage/:path*", "/compte/:path*"],
};
