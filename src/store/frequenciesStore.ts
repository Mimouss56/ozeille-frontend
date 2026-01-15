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
import type { SelectOption } from "../components/Select/Select.tsx";
import { extractAxiosErrorMsg } from "../utils/axiosClient.ts";
import { createSelectors } from "./index";

interface FrequenciesState {
  frequencies: Frequency[];
  frequenciesOptions: SelectOption[];
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
    frequenciesOptions: [],
    currentFrequency: null,
    loading: false,
    error: null,

    fetchFrequencies: async () => {
      set({ loading: true, error: null });
      try {
        const frequencies = await getFrequencies();
        set({
          frequencies,
          frequenciesOptions: frequencies.map((frequency) => ({
            id: frequency.id,
            value: frequency.id,
            label: frequency.label,
          })),
          loading: false,
        });
      } catch (error) {
        const msg = extractAxiosErrorMsg(error);
        set({ error: msg, loading: false });
      }
    },

    fetchFrequencyById: async (id: string) => {
      set({ loading: true, error: null });
      try {
        const frequency = await getFrequencyById(id);
        set({ currentFrequency: frequency, loading: false });
      } catch (error) {
        const msg = extractAxiosErrorMsg(error);
        set({ error: msg, loading: false });
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
        const msg = extractAxiosErrorMsg(error);
        set({ error: msg, loading: false });
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
        const msg = extractAxiosErrorMsg(error);
        set({ error: msg, loading: false });
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
        const msg = extractAxiosErrorMsg(error);
        set({ error: msg, loading: false });
      }
    },

    clearError: () => set({ error: null }),
  })),
);
