import { create } from "zustand";

import {
  type CreateFrequencyDto,
  type Frequency,
  type UpdateFrequencyDto,
  createFrequency,
  deleteFrequency,
  getFrequencies,
  getFrequencyById,
  updateFrequency,
} from "../api/frequencies";
import { createSelectors } from "../utils/createSelectors";

interface FrequenciesState {
  frequencies: Frequency[];
  currentFrequency: Frequency | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchFrequencies: () => Promise<void>;
  fetchFrequencyById: (id: string) => Promise<void>;
  createNewFrequency: (payload: CreateFrequencyDto) => Promise<Frequency | null>;
  updateCurrentFrequency: (id: string, payload: UpdateFrequencyDto) => Promise<Frequency | null>;
  deleteFrequencyById: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useFrequencies = createSelectors(
  create<FrequenciesState>((set) => ({
    frequencies: [],
    currentFrequency: null,
    loading: false,
    error: null,

    fetchFrequencies: async () => {
      set({ loading: true, error: null });
      try {
        const frequencies = await getFrequencies();
        set({ frequencies, loading: false });
      } catch (error) {
        set({ error: "Erreur lors du chargement des fréquences", loading: false });
      }
    },

    fetchFrequencyById: async (id: string) => {
      set({ loading: true, error: null });
      try {
        const frequency = await getFrequencyById(id);
        set({ currentFrequency: frequency, loading: false });
      } catch (error) {
        set({ error: "Erreur lors du chargement de la fréquence", loading: false });
      }
    },

    createNewFrequency: async (payload: CreateFrequencyDto) => {
      set({ loading: true, error: null });
      try {
        const newFrequency = await createFrequency(payload);
        set((state) => ({
          frequencies: [...state.frequencies, newFrequency],
          loading: false,
        }));
        return newFrequency;
      } catch (error) {
        set({ error: "Erreur lors de la création", loading: false });
        return null;
      }
    },

    updateCurrentFrequency: async (id: string, payload: UpdateFrequencyDto) => {
      set({ loading: true, error: null });
      try {
        const updated = await updateFrequency(id, payload);
        set((state) => ({
          frequencies: state.frequencies.map((frequency) => (frequency.id === id ? updated : frequency)),
          currentFrequency: updated,
          loading: false,
        }));
        return updated;
      } catch (error) {
        set({ error: "Erreur lors de la mise à jour", loading: false });
        return null;
      }
    },

    deleteFrequencyById: async (id: string) => {
      set({ loading: true, error: null });
      try {
        await deleteFrequency(id);
        set((state) => ({
          frequencies: state.frequencies.filter((frequency) => frequency.id !== id),
          loading: false,
        }));
      } catch (error) {
        set({ error: "Erreur lors de la suppression", loading: false });
      }
    },

    clearError: () => set({ error: null }),
  })),
);
