import { axiosClient } from "../utils/axiosClient";
import type { Category } from "./categories.ts";
import type { Paginated } from "./pagination.ts";

export const getTransactions = async (
  filters: { limit?: number; page?: number } = { limit: 10, page: 1 },
): Promise<Paginated<Transaction>> => {
  const { data } = await axiosClient.get<Paginated<Transaction>>("/transactions", { params: filters });

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
}

export interface CreateTransactionDto {
  amount: number;
  label: string;
  dueAt: string;
  frequencyId: string;
  categoryId: string;
  pointedAt: string;
}

export interface UpdateTransactionDto {
  amount: number;
  label: string;
  dueAt: string;
  categoryId: string;
  pointedAt?: string | null;
  frequencyId: string;
}
