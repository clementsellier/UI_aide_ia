"use client";

import { useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { abonnerEmails, lireEmails, viderEmails, type EmailTest } from "@/lib/auth-stub/boite-email";

const aucun: EmailTest[] = [];
// Dernier e-mail déjà vu dans cet onglet : la boîte ne s'ouvre d'elle-même que pour un nouveau message.
const CLE_VU = "aide-ia-boite-test-vu";

function lireVu() {
  return sessionStorage.getItem(CLE_VU);
}

/** Version de test : affiche les e-mails qui auraient été envoyés (liens de connexion, confirmation…). */
export function BoiteEmailTest() {
  const emails = useSyncExternalStore(abonnerEmails, lireEmails, () => aucun);
  const vu = useSyncExternalStore(abonnerEmails, lireVu, () => null);
  const [ouverteManuellement, setOuverteManuellement] = useState(false);

  if (emails.length === 0) return null;
  const ouverte = ouverteManuellement || emails[0].id !== vu;

  function marquerVu() {
    sessionStorage.setItem(CLE_VU, emails[0].id);
    setOuverteManuellement(false);
    window.dispatchEvent(new Event("aide-ia-boite-test"));
  }

  if (!ouverte) {
    return (
      <button
        type="button"
        onClick={() => setOuverteManuellement(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-md"
      >
        Boîte e-mail de test ({emails.length})
      </button>
    );
  }

  return (
    <aside
      aria-label="Boîte e-mail de test"
      className="fixed bottom-4 left-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-card text-sm shadow-lg"
    >
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <p className="font-semibold">Boîte e-mail de test ({emails.length})</p>
        <div className="flex gap-1">
          <Button variant="ghost" size="xs" onClick={viderEmails}>
            Vider
          </Button>
          <Button variant="ghost" size="xs" onClick={marquerVu}>
            Fermer
          </Button>
        </div>
      </div>
      <div className="max-h-[50vh] overflow-y-auto px-4 py-3">
        <p className="text-xs text-muted-foreground">
          Version de test : aucun e-mail n&apos;est envoyé. Voici ceux que vous auriez reçus.
        </p>
        <ul className="mt-3 flex flex-col gap-3">
          {emails.map((e) => (
            <li key={e.id} className="rounded-lg bg-muted px-3 py-2.5">
              <p className="font-semibold">{e.sujet}</p>
              <p className="text-xs text-muted-foreground">
                À {e.a} · {new Date(e.envoyeLe).toLocaleTimeString("fr-FR", { timeStyle: "short" })}
              </p>
              <p className="mt-1.5">{e.texte}</p>
              <a href={e.lien} onClick={marquerVu} className="mt-1.5 inline-block font-semibold text-coral underline">
                {e.libelleLien}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
