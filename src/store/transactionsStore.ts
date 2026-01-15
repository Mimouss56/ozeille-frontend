import { create } from "zustand";

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
import { createSelectors } from "../utils/createSelectors";

interface TransactionState {
  transactions: Transaction[];
  currentTransaction: Transaction | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchTransactions: () => Promise<void>;
  fetchTransactionById: (id: string) => Promise<void>;
  createNewTransaction: (payload: CreateTransactionDto) => Promise<Transaction | null>;
  updateCurrentTransaction: (id: string, payload: UpdateTransactionDto) => Promise<Transaction | null>;
  deleteTransactionById: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useTransactions = createSelectors(
  create<TransactionState>((set) => ({
    transactions: [],
    currentTransaction: null,
    loading: false,
    error: null,

    fetchTransactions: async () => {
      set({ loading: true, error: null });
      try {
        const transactions = await getTransactions();
        set({ transactions, loading: false });
      } catch (error) {
        set({ error: "Erreur lors du chargement des transactions", loading: false });
      }
    },

    fetchTransactionById: async (id: string) => {
      set({ loading: true, error: null });
      try {
        const transaction = await getTransactionById(id);
        set({ currentTransaction: transaction, loading: false });
      } catch (error) {
        set({ error: "Erreur lors du chargement de la transaction", loading: false });
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
        set({ error: "Erreur lors de la création", loading: false });
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
        set({ error: "Erreur lors de la mise à jour", loading: false });
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
        set({ error: "Erreur lors de la suppression", loading: false });
      }
    },

    clearError: () => set({ error: null }),
  })),
);
