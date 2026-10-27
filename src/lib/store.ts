"use client";

import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CasUsage, ContexteEntreprise, Niveaux, Organisation, Priorite } from "./types";

// Stockage local en attendant le backend : à remplacer par des appels API.
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

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      organisation: null,
      contexte: contexteVide,
      cas: [],
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
    { name: "aide-ia" },
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
