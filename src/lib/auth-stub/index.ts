"use client";

// Faux serveur d'authentification de la version de test : comptes, jetons et session dans le localStorage.
// AUCUNE sécurité réelle (tout est modifiable dans le navigateur). Il reproduit le comportement prévu
// avec Better Auth (lien magique 15 min à usage unique, e-mail vérifié avant la connexion par mot de passe,
// limites de demandes, messages qui ne révèlent pas si une adresse existe) pour tester les parcours.

import { envoyerEmailTest } from "./boite-email";
import { COOKIE_SESSION, LONGUEUR_MIN_MOT_DE_PASSE } from "./constantes";

export { LONGUEUR_MIN_MOT_DE_PASSE };

const CLE = "aide-ia-auth";
const EVENEMENT = "aide-ia-auth";
const MINUTE = 60_000;
const DUREE_SESSION = 30 * 24 * 60 * MINUTE;
const RENOUVELLEMENT_SESSION = 24 * 60 * MINUTE;
const DUREES_JETON = { "lien-magique": 15 * MINUTE, verification: 60 * MINUTE, reinitialisation: 60 * MINUTE };
const LIMITES = {
  "lien-magique": { nombre: 3, fenetre: 10 * MINUTE },
  connexion: { nombre: 5, fenetre: 10 * MINUTE },
  reinitialisation: { nombre: 3, fenetre: 10 * MINUTE },
};

export interface Utilisateur {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
  createdAt: string;
}

interface UtilisateurStocke extends Utilisateur {
  motDePasse: { sel: string; empreinte: string } | null;
}

type TypeJeton = keyof typeof DUREES_JETON;

interface Jeton {
  jeton: string;
  type: TypeJeton;
  email: string;
  expireLe: number;
  utilise: boolean;
}

interface SessionStockee {
  token: string;
  userId: string;
  expiresAt: number;
}

interface Donnees {
  utilisateurs: UtilisateurStocke[];
  jetons: Jeton[];
  session: SessionStockee | null;
  tentatives: Record<string, number[]>;
}

export interface Session {
  user: Utilisateur & { aUnMotDePasse: boolean };
  session: { token: string; expiresAt: string };
}

/** Même forme que les erreurs du client Better Auth. */
export interface ErreurAuth {
  message: string;
  status: number;
  code: string;
}

export type Resultat<T> = { data: T; error: null } | { data: null; error: ErreurAuth };

// ── Lecture / écriture ────────────────────────────────────────────────────

function lire(): Donnees {
  try {
    const brut = localStorage.getItem(CLE);
    if (brut) return JSON.parse(brut) as Donnees;
  } catch {
    // données illisibles : on repart de zéro
  }
  return { utilisateurs: [], jetons: [], session: null, tentatives: {} };
}

function ecrire(donnees: Donnees) {
  // Les jetons expirés sont gardés un jour pour pouvoir afficher « Ce lien a expiré ».
  const limite = Date.now() - 24 * 60 * MINUTE;
  donnees.jetons = donnees.jetons.filter((j) => j.expireLe > limite);
  localStorage.setItem(CLE, JSON.stringify(donnees));
  window.dispatchEvent(new Event(EVENEMENT));
}

const ok = <T>(data: T): Resultat<T> => ({ data, error: null });
const echec = (status: number, code: string, message: string): Resultat<never> => ({
  data: null,
  error: { status, code, message },
});

const normaliser = (email: string) => email.trim().toLowerCase();
const emailValide = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ── Mots de passe (empreinte PBKDF2 : jamais stockés en clair, même en test) ──

const enHex = (octets: ArrayBuffer | Uint8Array) =>
  Array.from(new Uint8Array(octets), (o) => o.toString(16).padStart(2, "0")).join("");

async function empreinte(motDePasse: string, sel: string) {
  const cle = await crypto.subtle.importKey("raw", new TextEncoder().encode(motDePasse), "PBKDF2", false, [
    "deriveBits",
  ]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: new TextEncoder().encode(sel), iterations: 100_000 },
    cle,
    256,
  );
  return enHex(bits);
}

async function proteger(motDePasse: string) {
  const sel = enHex(crypto.getRandomValues(new Uint8Array(16)));
  return { sel, empreinte: await empreinte(motDePasse, sel) };
}

async function verifierMotDePasse(utilisateur: UtilisateurStocke, motDePasse: string) {
  if (!utilisateur.motDePasse) return false;
  return (await empreinte(motDePasse, utilisateur.motDePasse.sel)) === utilisateur.motDePasse.empreinte;
}

function controlerMotDePasse(motDePasse: string): Resultat<never> | null {
  if (motDePasse.length < LONGUEUR_MIN_MOT_DE_PASSE) {
    return echec(
      400,
      "PASSWORD_TOO_SHORT",
      `Le mot de passe doit contenir au moins ${LONGUEUR_MIN_MOT_DE_PASSE} caractères.`,
    );
  }
  return null;
}

// ── Limites de demandes ──────────────────────────────────────────────────

function depasseLimite(donnees: Donnees, type: keyof typeof LIMITES, email: string) {
  const { nombre, fenetre } = LIMITES[type];
  const cle = `${type}:${email}`;
  const recentes = (donnees.tentatives[cle] ?? []).filter((t) => t > Date.now() - fenetre);
  donnees.tentatives[cle] = recentes;
  return recentes.length >= nombre;
}

function noterTentative(donnees: Donnees, type: keyof typeof LIMITES, email: string) {
  const cle = `${type}:${email}`;
  donnees.tentatives[cle] = [...(donnees.tentatives[cle] ?? []), Date.now()];
}

const tropDeDemandes = () =>
  echec(429, "TOO_MANY_REQUESTS", "Trop de demandes pour cette adresse. Réessayez dans quelques minutes.");

// ── Jetons et e-mails ────────────────────────────────────────────────────

function creerJeton(donnees: Donnees, type: TypeJeton, email: string) {
  const jeton = enHex(crypto.getRandomValues(new Uint8Array(24)));
  donnees.jetons.push({ jeton, type, email, expireLe: Date.now() + DUREES_JETON[type], utilise: false });
  return jeton;
}

/** Consomme un jeton à usage unique. */
function consommerJeton(donnees: Donnees, type: TypeJeton, jeton: string): Resultat<Jeton> {
  const stocke = donnees.jetons.find((j) => j.jeton === jeton && j.type === type);
  if (!stocke) return echec(400, "INVALID_TOKEN", "Ce lien n'est pas valide ou a expiré.");
  if (stocke.utilise) return echec(400, "TOKEN_USED", "Ce lien a déjà été utilisé.");
  if (stocke.expireLe <= Date.now()) return echec(400, "TOKEN_EXPIRED", "Ce lien a expiré.");
  stocke.utilise = true;
  return ok(stocke);
}

const lienAbsolu = (chemin: string, jeton: string) => {
  const url = new URL(chemin, window.location.origin);
  url.searchParams.set("token", jeton);
  return url.toString();
};

function envoyerVerification(donnees: Donnees, email: string) {
  const lien = lienAbsolu("/verifier-email", creerJeton(donnees, "verification", email));
  envoyerEmailTest({
    a: email,
    sujet: "Confirmez votre adresse e-mail",
    texte: "Pour activer votre compte Aide IA, confirmez votre adresse. Ce lien est valable 1 heure.",
    lien,
    libelleLien: "Confirmer mon adresse",
  });
}

// ── Session ──────────────────────────────────────────────────────────────

function ouvrirSession(donnees: Donnees, userId: string) {
  donnees.session = { token: crypto.randomUUID(), userId, expiresAt: Date.now() + DUREE_SESSION };
  ecrireCookie(userId);
}

/** Cookie lu par src/proxy.ts et /api/niveaux (vérification optimiste uniquement). */
function ecrireCookie(userId: string | null) {
  document.cookie = userId
    ? `${COOKIE_SESSION}=${userId}; Path=/; Max-Age=${DUREE_SESSION / 1000}; SameSite=Lax`
    : `${COOKIE_SESSION}=; Path=/; Max-Age=0; SameSite=Lax`;
}

let cacheBrut: string | null | undefined;
let cacheSession: Session | null = null;

function sessionCourante(): Session | null {
  const brut = localStorage.getItem(CLE);
  if (brut === cacheBrut) return cacheSession;
  cacheBrut = brut;
  const donnees = lire();
  const s = donnees.session;
  const u = s && s.expiresAt > Date.now() ? donnees.utilisateurs.find((x) => x.id === s.userId) : undefined;
  cacheSession =
    s && u
      ? {
          user: {
            id: u.id,
            email: u.email,
            name: u.name,
            emailVerified: u.emailVerified,
            createdAt: u.createdAt,
            aUnMotDePasse: u.motDePasse !== null,
          },
          session: { token: s.token, expiresAt: new Date(s.expiresAt).toISOString() },
        }
      : null;
  return cacheSession;
}

/** Renouvellement glissant de la session et remise du cookie s'il a disparu. */
export function entretenirSession() {
  const donnees = lire();
  const s = donnees.session;
  if (!s || s.expiresAt <= Date.now()) {
    ecrireCookie(null);
    return;
  }
  if (s.expiresAt - Date.now() < DUREE_SESSION - RENOUVELLEMENT_SESSION) {
    s.expiresAt = Date.now() + DUREE_SESSION;
    ecrire(donnees);
  }
  ecrireCookie(s.userId);
}

export function abonnerSession(rappel: () => void) {
  window.addEventListener(EVENEMENT, rappel);
  window.addEventListener("storage", rappel);
  return () => {
    window.removeEventListener(EVENEMENT, rappel);
    window.removeEventListener("storage", rappel);
  };
}

export { sessionCourante };

// ── Opérations (mêmes noms et formes que le client Better Auth) ─────────

export async function inscrireParEmail({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<Resultat<{ email: string }>> {
  const adresse = normaliser(email);
  if (!emailValide(adresse)) return echec(400, "INVALID_EMAIL", "Cette adresse e-mail n'est pas valide.");
  const erreurMotDePasse = controlerMotDePasse(password);
  if (erreurMotDePasse) return erreurMotDePasse;

  const donnees = lire();
  const existant = donnees.utilisateurs.find((u) => u.email === adresse);
  // Adresse déjà inscrite : même réponse qu'une inscription réussie, pour ne rien révéler.
  if (!existant) {
    donnees.utilisateurs.push({
      id: crypto.randomUUID(),
      email: adresse,
      name: name.trim(),
      emailVerified: false,
      createdAt: new Date().toISOString(),
      motDePasse: await proteger(password),
    });
    envoyerVerification(donnees, adresse);
  }
  ecrire(donnees);
  return ok({ email: adresse });
}

export async function connecterParEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Resultat<{ userId: string }>> {
  const adresse = normaliser(email);
  const donnees = lire();
  if (depasseLimite(donnees, "connexion", adresse)) return tropDeDemandes();

  const utilisateur = donnees.utilisateurs.find((u) => u.email === adresse);
  if (!utilisateur || !(await verifierMotDePasse(utilisateur, password))) {
    noterTentative(donnees, "connexion", adresse);
    ecrire(donnees);
    return echec(401, "INVALID_EMAIL_OR_PASSWORD", "Adresse e-mail ou mot de passe incorrect.");
  }
  if (!utilisateur.emailVerified) {
    envoyerVerification(donnees, adresse);
    ecrire(donnees);
    return echec(
      403,
      "EMAIL_NOT_VERIFIED",
      "Votre adresse n'est pas encore confirmée. Nous venons de vous renvoyer le lien de confirmation.",
    );
  }
  donnees.tentatives[`connexion:${adresse}`] = [];
  ouvrirSession(donnees, utilisateur.id);
  ecrire(donnees);
  return ok({ userId: utilisateur.id });
}

export async function demanderLienMagique({
  email,
  callbackURL,
}: {
  email: string;
  callbackURL?: string;
}): Promise<Resultat<{ email: string }>> {
  const adresse = normaliser(email);
  if (!emailValide(adresse)) return echec(400, "INVALID_EMAIL", "Cette adresse e-mail n'est pas valide.");
  const donnees = lire();
  if (depasseLimite(donnees, "lien-magique", adresse)) return tropDeDemandes();
  noterTentative(donnees, "lien-magique", adresse);

  // Comme Better Auth : le compte est créé au premier clic sur le lien s'il n'existe pas encore.
  const url = new URL(lienAbsolu("/connexion/lien", creerJeton(donnees, "lien-magique", adresse)));
  if (callbackURL) url.searchParams.set("callbackURL", callbackURL);
  const lien = url.toString();
  envoyerEmailTest({
    a: adresse,
    sujet: "Votre lien de connexion",
    texte: "Cliquez sur le lien pour vous connecter à Aide IA. Il est valable 15 minutes et ne sert qu'une fois.",
    lien,
    libelleLien: "Me connecter",
  });
  ecrire(donnees);
  return ok({ email: adresse });
}

export async function verifierLienMagique({ token }: { token: string }): Promise<Resultat<{ userId: string }>> {
  const donnees = lire();
  const jeton = consommerJeton(donnees, "lien-magique", token);
  if (jeton.error) {
    ecrire(donnees);
    return jeton;
  }
  let utilisateur = donnees.utilisateurs.find((u) => u.email === jeton.data.email);
  if (!utilisateur) {
    utilisateur = {
      id: crypto.randomUUID(),
      email: jeton.data.email,
      name: "",
      emailVerified: true,
      createdAt: new Date().toISOString(),
      motDePasse: null,
    };
    donnees.utilisateurs.push(utilisateur);
  }
  // Cliquer sur le lien prouve que l'adresse appartient à la personne.
  utilisateur.emailVerified = true;
  ouvrirSession(donnees, utilisateur.id);
  ecrire(donnees);
  return ok({ userId: utilisateur.id });
}

export async function verifierEmail({ token }: { token: string }): Promise<Resultat<{ userId: string }>> {
  const donnees = lire();
  const jeton = consommerJeton(donnees, "verification", token);
  if (jeton.error) {
    ecrire(donnees);
    return jeton;
  }
  const utilisateur = donnees.utilisateurs.find((u) => u.email === jeton.data.email);
  if (!utilisateur) return echec(400, "INVALID_TOKEN", "Ce lien n'est pas valide ou a expiré.");
  utilisateur.emailVerified = true;
  ouvrirSession(donnees, utilisateur.id); // connexion automatique après la confirmation
  ecrire(donnees);
  return ok({ userId: utilisateur.id });
}

export async function demanderReinitialisation({
  email,
}: {
  email: string;
  /** Page du lien envoyé (fixe dans le stub : /reinitialiser-mot-de-passe). */
  redirectTo?: string;
}): Promise<Resultat<{ email: string }>> {
  const adresse = normaliser(email);
  if (!emailValide(adresse)) return echec(400, "INVALID_EMAIL", "Cette adresse e-mail n'est pas valide.");
  const donnees = lire();
  if (depasseLimite(donnees, "reinitialisation", adresse)) return tropDeDemandes();
  noterTentative(donnees, "reinitialisation", adresse);

  // E-mail envoyé seulement si le compte existe ; la réponse est la même dans les deux cas.
  if (donnees.utilisateurs.some((u) => u.email === adresse)) {
    const lien = lienAbsolu("/reinitialiser-mot-de-passe", creerJeton(donnees, "reinitialisation", adresse));
    envoyerEmailTest({
      a: adresse,
      sujet: "Réinitialiser votre mot de passe",
      texte: "Pour choisir un nouveau mot de passe, suivez ce lien. Il est valable 1 heure.",
      lien,
      libelleLien: "Choisir un nouveau mot de passe",
    });
  }
  ecrire(donnees);
  return ok({ email: adresse });
}

export async function reinitialiserMotDePasse({
  token,
  newPassword,
}: {
  token: string;
  newPassword: string;
}): Promise<Resultat<{ email: string }>> {
  const erreurMotDePasse = controlerMotDePasse(newPassword);
  if (erreurMotDePasse) return erreurMotDePasse;
  const donnees = lire();
  const jeton = consommerJeton(donnees, "reinitialisation", token);
  if (jeton.error) {
    ecrire(donnees);
    return jeton;
  }
  const utilisateur = donnees.utilisateurs.find((u) => u.email === jeton.data.email);
  if (!utilisateur) return echec(400, "INVALID_TOKEN", "Ce lien n'est pas valide ou a expiré.");
  utilisateur.motDePasse = await proteger(newPassword);
  utilisateur.emailVerified = true; // le lien reçu par e-mail prouve l'adresse
  // Par sécurité, les sessions ouvertes sont fermées : il faut se reconnecter.
  if (donnees.session?.userId === utilisateur.id) {
    donnees.session = null;
    ecrireCookie(null);
  }
  ecrire(donnees);
  return ok({ email: utilisateur.email });
}

/** Définit (compte créé par lien magique) ou change le mot de passe de l'utilisateur connecté. */
export async function changerMotDePasse({
  currentPassword,
  newPassword,
}: {
  currentPassword?: string;
  newPassword: string;
}): Promise<Resultat<{ ok: true }>> {
  const erreurMotDePasse = controlerMotDePasse(newPassword);
  if (erreurMotDePasse) return erreurMotDePasse;
  const donnees = lire();
  const utilisateur = donnees.utilisateurs.find((u) => u.id === donnees.session?.userId);
  if (!utilisateur) return echec(401, "UNAUTHORIZED", "Votre session a expiré. Reconnectez-vous.");
  if (utilisateur.motDePasse && !(await verifierMotDePasse(utilisateur, currentPassword ?? ""))) {
    return echec(400, "INVALID_PASSWORD", "Le mot de passe actuel est incorrect.");
  }
  utilisateur.motDePasse = await proteger(newPassword);
  ecrire(donnees);
  return ok({ ok: true });
}

export async function modifierUtilisateur({ name }: { name: string }): Promise<Resultat<{ ok: true }>> {
  const donnees = lire();
  const utilisateur = donnees.utilisateurs.find((u) => u.id === donnees.session?.userId);
  if (!utilisateur) return echec(401, "UNAUTHORIZED", "Votre session a expiré. Reconnectez-vous.");
  utilisateur.name = name.trim();
  ecrire(donnees);
  return ok({ ok: true });
}

export async function supprimerUtilisateur(): Promise<Resultat<{ userId: string }>> {
  const donnees = lire();
  const userId = donnees.session?.userId;
  if (!userId) return echec(401, "UNAUTHORIZED", "Votre session a expiré. Reconnectez-vous.");
  const email = donnees.utilisateurs.find((u) => u.id === userId)?.email;
  donnees.utilisateurs = donnees.utilisateurs.filter((u) => u.id !== userId);
  donnees.jetons = donnees.jetons.filter((j) => j.email !== email);
  donnees.session = null;
  ecrireCookie(null);
  ecrire(donnees);
  return ok({ userId });
}

export async function deconnecter(): Promise<Resultat<{ ok: true }>> {
  const donnees = lire();
  donnees.session = null;
  ecrireCookie(null);
  ecrire(donnees);
  return ok({ ok: true });
}
