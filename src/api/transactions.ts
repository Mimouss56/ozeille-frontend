import type { PaginationFilter } from "../@types/filters";
import { axiosClient } from "../utils/axiosClient";
import type { Category } from "./categories.ts";
import type { Paginated } from "./pagination.ts";

/**
 * Filtre de transaction complètement aligné avec le backend
 * Voir: backend/src/transactions/dto/transaction-filter.dto.ts
 */
export type TransactionFilters = PaginationFilter & {
  label?: string;
  categoryId?: string;
  amount?: number;
  "order[dueAt]"?: "asc" | "desc";
  "exists[pointedAt]"?: boolean;
  from?: string;
  to?: string;
};

export const getTransactions = async (
  filters: TransactionFilters = { limit: 10, page: 1 },
): Promise<Paginated<Transaction>> => {
  // Construction dynamique des paramètres
  const searchParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  });
  const url = `/transactions?${searchParams.toString()}`;
  const { data } = await axiosClient.get<Paginated<Transaction>>(url);
  return data;
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
  const { data } = await axiosClient.get<Transaction>(`/transactions/${id}`);
  return data;
};

export const createTransaction = async (payload: CreateTransactionDto): Promise<Transaction> => {
  const { data } = await axiosClient.post<Transaction>("/transactions", payload);
  return data;
};

export const updateTransaction = async (id: string, payload: UpdateTransactionDto): Promise<Transaction> => {
  const { data } = await axiosClient.put<Transaction>(`/transactions/${id}`, payload);
  return data;
};

export const deleteTransaction = async (id: string): Promise<void> => {
  await axiosClient.delete(`/transactions/${id}`);
};

export interface Transaction {
  id: string;
  amount: number;
  label: string;
  dueAt: string;
  pointedAt: string | null;
  createdAt: string;
  updatedAt: string;
  frequencyId: string;
  category: Category;
  categoryId: string | null;
}

export interface CreateTransactionDto {
  amount: number;
  label: string;
  dueAt: string;
  frequencyId?: string | null;
  categoryId: string;
  pointedAt?: string;
}

export interface UpdateTransactionDto {
  amount: number;
  label: string;
  dueAt: string;
  categoryId: string;
  pointedAt?: string | null;
  frequencyId?: string | null;
}
