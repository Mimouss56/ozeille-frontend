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
  // TODO importer depuis shared
}

export interface CreateTransactionDto {
  // TODO importer depuis shared
}

export interface UpdateTransactionDto {
  // TODO importer depuis shared
}
