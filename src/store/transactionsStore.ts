import { create } from "zustand";

import type { TransactionFilters } from "../@types/filters.d";
import type { MetaResponse } from "../api/pagination";
import {
  type CreateTransactionDto,
  type Transaction,
  type UpdateTransactionDto,
  createTransaction,
  deleteTransaction,
  getTransactionById,
  getTransactions,
  updateTransaction,
} from "../api/transactions";
import { extractAxiosErrorMsg } from "../utils/axiosClient";

interface TransactionState {
  transactions: Transaction[];
  meta: MetaResponse;
  currentTransaction: Transaction | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchTransactions: (filters?: TransactionFilters) => Promise<void>;
  fetchTransactionById: (id: string) => Promise<void>;
  createNewTransaction: (payload: CreateTransactionDto) => Promise<Transaction | null>;
  updateCurrentTransaction: (id: string, payload: UpdateTransactionDto) => Promise<Transaction | null>;
  deleteTransactionById: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useStoreTransactions = create<TransactionState>((set) => ({
  transactions: [],
  meta: {} as MetaResponse,
  currentTransaction: null,
  loading: false,
  error: null,

  fetchTransactions: async (filters?: TransactionFilters) => {
    set({ loading: true, error: null });
    try {
      const paginatedTransactions = await getTransactions({
        limit: filters?.limit ?? 10,
        page: filters?.page ?? 1,
        label: filters?.label,
        categoryId: filters?.categoryId,
        "order[dueAt]": filters?.["order[dueAt]"] ?? "desc",
        "exists[pointedAt]": filters?.["exists[pointedAt]"],
      });
      set({ transactions: paginatedTransactions.data, meta: paginatedTransactions.meta, loading: false });
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
    }
  },

  fetchTransactionById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const transaction = await getTransactionById(id);
      set({ currentTransaction: transaction, loading: false });
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
    }
  },

  createNewTransaction: async (payload: CreateTransactionDto) => {
    set({ loading: true, error: null });
    try {
      const newTransaction = await createTransaction(payload);
      set((state) => ({
        transactions: [...state.transactions, newTransaction],
        loading: false,
      }));
      return newTransaction;
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
      return null;
    }
  },

  updateCurrentTransaction: async (id: string, payload: UpdateTransactionDto) => {
    set({ loading: true, error: null });
    try {
      const updated = await updateTransaction(id, payload);
      set((state) => ({
        transactions: state.transactions.map((transaction) => (transaction.id === id ? updated : transaction)),
        currentTransaction: updated,

        loading: false,
      }));
      return updated;
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
      return null;
    }
  },

  deleteTransactionById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await deleteTransaction(id);
      set((state) => ({
        transactions: state.transactions.filter((transactions) => transactions.id !== id),
        loading: false,
      }));
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
    }
  },

  clearError: () => set({ error: null }),
}));
