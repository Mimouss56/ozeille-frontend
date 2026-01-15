import { create } from "zustand";

import {
  type CreateTransactionDto,
  type MetaResponse,
  type Transaction,
  type UpdateTransactionDto,
  createTransaction,
  deleteTransaction,
  getTransactionById,
  getTransactions,
  updateTransaction,
} from "../api/transactions";
import { createSelectors } from "./index";

interface TransactionState {
  transactions: Transaction[];
  meta: MetaResponse;
  currentTransaction: Transaction | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchTransactions: (filters?: { limit?: number; page?: number }) => Promise<void>;
  fetchTransactionById: (id: string) => Promise<void>;
  createNewTransaction: (payload: CreateTransactionDto) => Promise<Transaction | null>;
  updateCurrentTransaction: (id: string, payload: UpdateTransactionDto) => Promise<Transaction | null>;
  deleteTransactionById: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useStoreTransactions = createSelectors(
  create<TransactionState>((set) => ({
    transactions: [],
    meta: {} as MetaResponse,
    currentTransaction: null,
    loading: false,
    error: null,

    fetchTransactions: async (filters: { limit?: number; page?: number } = { limit: 10, page: 1 }) => {
      set({ loading: true, error: null });
      try {
        const paginatedTransactions = await getTransactions({ ...filters, page: filters.page ?? 1 });
        set({ transactions: paginatedTransactions.data, meta: paginatedTransactions.meta, loading: false });
      } catch (error) {
        set({ error: JSON.stringify(error), loading: false });
      }
    },

    fetchTransactionById: async (id: string) => {
      set({ loading: true, error: null });
      try {
        const transaction = await getTransactionById(id);
        set({ currentTransaction: transaction, loading: false });
      } catch (error) {
        set({ error: JSON.stringify(error), loading: false });
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
        set({ error: JSON.stringify(error), loading: false });
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
        set({ error: JSON.stringify(error), loading: false });
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
        set({ error: JSON.stringify(error), loading: false });
      }
    },

    clearError: () => set({ error: null }),
  })),
);
