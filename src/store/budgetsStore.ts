import { create } from "zustand";

import {
  type Budget,
  type CreateBudgetDto,
  type UpdateBudgetDto,
  createBudget,
  deleteBudget,
  getBudgetById,
  getBudgets,
  updateBudget,
} from "../api/budgets";
import { createSelectors } from "../utils/createSelectors";

interface BudgetsState {
  budgets: Budget[];
  currentBudget: Budget | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchBudgets: () => Promise<void>;
  fetchBudgetById: (id: string) => Promise<void>;
  createNewBudget: (payload: CreateBudgetDto) => Promise<Budget | null>;
  updateCurrentBudget: (id: string, payload: UpdateBudgetDto) => Promise<Budget | null>;
  setCurrentBudget: (budget: Budget | null) => void;
  deleteBudgetById: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useBudgets = createSelectors(
  create<BudgetsState>((set) => ({
    budgets: [],
    currentBudget: null,
    loading: false,
    error: null,

    fetchBudgets: async () => {
      set({ loading: true, error: null });
      try {
        const budgets = await getBudgets();
        set({ budgets, loading: false });
      } catch (error) {
        set({ error: "Erreur lors du chargement des budgets", loading: false });
      }
    },

    fetchBudgetById: async (id: string) => {
      set({ loading: true, error: null });
      try {
        const budget = await getBudgetById(id);
        set({ currentBudget: budget, loading: false });
      } catch (error) {
        set({ error: "Erreur lors du chargement du budget", loading: false });
      }
    },

    createNewBudget: async (payload: CreateBudgetDto) => {
      set({ loading: true, error: null });
      try {
        const newBudget = await createBudget(payload);
        set((state) => ({
          budgets: [...state.budgets, newBudget],
          loading: false,
        }));
        return newBudget;
      } catch (error) {
        set({ error: "Erreur lors de la création", loading: false });
        return null;
      }
    },

    updateCurrentBudget: async (id: string, payload: UpdateBudgetDto) => {
      set({ loading: true, error: null });
      try {
        const updated = await updateBudget(id, payload);
        set((state) => ({
          budgets: state.budgets.map((budget) => (budget.id === id ? updated : budget)),
          currentBudget: updated,
          loading: false,
        }));
        return updated;
      } catch (error) {
        set({ error: "Erreur lors de la mise à jour", loading: false });
        return null;
      }
    },

    setCurrentBudget: (budget: Budget | null) => set({ currentBudget: budget }),

    deleteBudgetById: async (id: string) => {
      set({ loading: true, error: null });
      try {
        await deleteBudget(id);
        set((state) => ({
          budgets: state.budgets.filter((budget) => budget.id !== id),
          loading: false,
        }));
      } catch (error) {
        set({ error: "Erreur lors de la suppression", loading: false });
      }
    },

    clearError: () => set({ error: null }),
  })),
);
