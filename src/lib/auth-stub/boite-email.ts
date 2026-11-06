"use client";

// Boîte e-mail de la version de test : aucun e-mail n'est envoyé, les messages sont gardés dans le
// navigateur et affichés par <BoiteEmailTest />. Remplacée par src/lib/email.ts (nodemailer) avec Better Auth.

export interface EmailTest {
  id: string;
  a: string;
  sujet: string;
  texte: string;
  lien: string;
  libelleLien: string;
  envoyeLe: string;
}

const CLE = "aide-ia-boite-test";
const EVENEMENT = "aide-ia-boite-test";
const MAXIMUM = 5;

let cacheBrut: string | null | undefined;
let cacheEmails: EmailTest[] = [];

export function lireEmails(): EmailTest[] {
  const brut = localStorage.getItem(CLE);
  if (brut !== cacheBrut) {
    cacheBrut = brut;
    try {
      cacheEmails = brut ? (JSON.parse(brut) as EmailTest[]) : [];
    } catch {
      cacheEmails = [];
    }
  }
  return cacheEmails;
}

export function envoyerEmailTest(email: Omit<EmailTest, "id" | "envoyeLe">) {
  const complet: EmailTest = { ...email, id: crypto.randomUUID(), envoyeLe: new Date().toISOString() };
  localStorage.setItem(CLE, JSON.stringify([complet, ...lireEmails()].slice(0, MAXIMUM)));
  console.info(`[e-mail de test] à ${email.a} · ${email.sujet}\n${email.lien}`);
  window.dispatchEvent(new Event(EVENEMENT));
}

export function viderEmails() {
  localStorage.removeItem(CLE);
  window.dispatchEvent(new Event(EVENEMENT));
}

export function abonnerEmails(rappel: () => void) {
  window.addEventListener(EVENEMENT, rappel);
  window.addEventListener("storage", rappel);
  return () => {
    window.removeEventListener(EVENEMENT, rappel);
    window.removeEventListener("storage", rappel);
  };
}
