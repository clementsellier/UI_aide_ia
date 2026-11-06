"use client";

import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";
import type { CasUsage, ContexteEntreprise, Niveaux, Organisation, Priorite } from "./types";

// Stockage local en attendant le backend : à remplacer par des appels API.
// Chaque compte a sa propre clé « aide-ia:<id utilisateur> ». Tant qu'aucun compte n'est chargé,
// rien n'est lu ni écrit (voir chargerDonneesUtilisateur).
const CLE = "aide-ia";
let utilisateurActif: string | null = null;

const stockageParUtilisateur: StateStorage = {
  getItem: (nom) => {
    if (!utilisateurActif) return null;
    const cle = `${nom}:${utilisateurActif}`;
    const valeur = localStorage.getItem(cle);
    if (valeur !== null) return valeur;
    // Données saisies avant l'arrivée des comptes : reprises par le premier compte qui se connecte.
    const anciennes = localStorage.getItem(nom);
    if (anciennes !== null) {
      localStorage.setItem(cle, anciennes);
      localStorage.removeItem(nom);
    }
    return anciennes;
  },
  setItem: (nom, valeur) => {
    if (utilisateurActif) localStorage.setItem(`${nom}:${utilisateurActif}`, valeur);
  },
  removeItem: (nom) => {
    if (utilisateurActif) localStorage.removeItem(`${nom}:${utilisateurActif}`);
  },
};

interface AppState {
  organisation: Organisation | null;
  contexte: ContexteEntreprise;
  cas: CasUsage[];
  setOrganisation: (organisation: Organisation) => void;
  setContexte: (contexte: ContexteEntreprise) => void;
  ajouterCas: (cas: Omit<CasUsage, "id" | "creeLe" | "niveaux">) => string;
  modifierCas: (id: string, cas: Partial<CasUsage>) => void;
  setPriorite: (id: string, priorite: Priorite) => void;
  setNiveaux: (id: string, niveaux: Niveaux) => void;
}

const contexteVide: ContexteEntreprise = {
  typeEntreprise: "",
  secteur: "",
  typeClients: "",
  nombreSalaries: "",
  informations: "",
};

const etatVide = { organisation: null, contexte: contexteVide, cas: [] as CasUsage[] };

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      ...etatVide,
      setOrganisation: (organisation) => set({ organisation }),
      setContexte: (contexte) => set({ contexte }),
      ajouterCas: (nouveau) => {
        const id = crypto.randomUUID();
        set((s) => ({
          cas: [...s.cas, { ...nouveau, id, niveaux: null, creeLe: new Date().toISOString() }],
        }));
        return id;
      },
      modifierCas: (id, modif) =>
        set((s) => ({ cas: s.cas.map((c) => (c.id === id ? { ...c, ...modif } : c)) })),
      setPriorite: (id, priorite) =>
        set((s) => ({ cas: s.cas.map((c) => (c.id === id ? { ...c, priorite } : c)) })),
      setNiveaux: (id, niveaux) =>
        set((s) => ({ cas: s.cas.map((c) => (c.id === id ? { ...c, niveaux } : c)) })),
    }),
    {
      name: CLE,
      storage: createJSONStorage(() => stockageParUtilisateur),
      partialize: ({ organisation, contexte, cas }) => ({ organisation, contexte, cas }),
      // Chargé par chargerDonneesUtilisateur une fois la session connue.
      skipHydration: true,
    },
  ),
);

/**
 * Vrai une fois les données du navigateur chargées. Le serveur ne les connaît pas : afficher
 * avant ce moment provoquerait un décalage entre le HTML serveur et le premier rendu client.
 */
export function useStoreCharge() {
  return useSyncExternalStore(
    (onChange) => useAppStore.persist.onFinishHydration(onChange),
    () => useAppStore.persist.hasHydrated(),
    () => false,
  );
}

/** Vide l'état en mémoire puis charge les données du compte (null : aucun compte, après déconnexion). */
export async function chargerDonneesUtilisateur(userId: string | null) {
  utilisateurActif = null; // la remise à zéro ne doit écraser les données d'aucun compte
  useAppStore.setState(etatVide);
  utilisateurActif = userId;
  if (userId) await useAppStore.persist.rehydrate();
}

/** Efface définitivement les données d'un compte (suppression du compte). */
export function supprimerDonneesUtilisateur(userId: string) {
  localStorage.removeItem(`${CLE}:${userId}`);
}
