import { create } from "zustand";

import type { BudgetFilter } from "../@types/budget";
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
import { extractAxiosErrorMsg } from "../utils/axiosClient";

interface BudgetsState {
  budgets: Budget[];
  currentBudget: Budget | null;
  loading: boolean;
  error: string | null;
  editingBudgetId: string | null;

  // Actions
  fetchBudgets: (filters?: BudgetFilter) => Promise<void>;
  fetchBudgetById: (id: string) => Promise<void>;
  createNewBudget: (payload: CreateBudgetDto) => Promise<Budget | null>;
  updateCurrentBudget: (id: string, payload: UpdateBudgetDto) => Promise<Budget | null>;
  setCurrentBudget: (budget: Budget | null) => void;
  deleteBudgetById: (id: string) => Promise<void>;
  openEditBudget: (id: string) => void;
  closeEditBudget: () => void;
}

export const useStoreBudgets = create<BudgetsState>((set) => ({
  budgets: [],
  currentBudget: null,
  loading: false,
  error: null,
  editingBudgetId: null,

  fetchBudgets: async (filters?: BudgetFilter) => {
    set({ loading: true, error: null });
    try {
      const budgets = await getBudgets(filters);
      // const budgets = budgetMock;
      set({ budgets, loading: false });
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false, budgets: [] });
    }
  },

  fetchBudgetById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const budget = await getBudgetById(id);
      set({ currentBudget: budget, loading: false });
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false, budgets: [] });
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
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
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
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
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
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
    }
  },

  openEditBudget: (id: string) => set({ editingBudgetId: id }),

  closeEditBudget: () => set({ editingBudgetId: null }),
}));
