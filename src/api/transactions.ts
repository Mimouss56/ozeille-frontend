import { axiosClient } from "../utils/axiosClient";

export const getTransactions = async (): Promise<Transaction[]> => {
  const { data } = await axiosClient.get<Transaction[]>("/transactions");

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
  frequencyId: string | null;
}

export interface CreateTransactionDto {
  amount: number;
  label: string;
  dueAt: string;
  frequencyId?: string;
  categoryId?: string;
}

export interface UpdateTransactionDto {
  amount?: number;
  label?: string;
  dueAt?: string;
  pointedAt?: string;
  frequencyId?: string;
}
