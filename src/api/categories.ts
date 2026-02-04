import { axiosClient } from "../utils/axiosClient";
import type { Budget } from "./budgets";
import type { Paginated } from "./pagination";
import type { Transaction } from "./transactions";

export type TransactionType = "INCOME" | "EXPENSE";

export interface Category {
  id: string;
  budgetId: string;
  label: string;
  color: string | null;
  userId: string | null;
  limitAmount: number;
  budget?: Budget;
  type: TransactionType;
  transactions?: Transaction[];
}

export interface CreateCategoryDto {
  budgetId: string;
  label: string;
  color?: string;
  limitAmount: number;
  type: TransactionType;
}

export interface UpdateCategoryDto {
  label?: string;
  color?: string;
  limitAmount?: number;
  type?: TransactionType;
}

export const getCategories = async (
  filters: { limit?: number; page?: number } = { limit: 10, page: 1 },
): Promise<Paginated<Category>> => {
  const { data } = await axiosClient.get<Paginated<Category>>("/categories", { params: filters });
  return data;
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const { data } = await axiosClient.get<Category>(`/categories/${id}`);
  return data;
};

export const createCategory = async (payload: CreateCategoryDto): Promise<Category> => {
  const { data } = await axiosClient.post<Category>("/categories", payload);
  return data;
};

export const updateCategory = async (id: string, payload: UpdateCategoryDto): Promise<Category> => {
  const { data } = await axiosClient.put<Category>(`/categories/${id}`, payload);
  return data;
};

export const deleteCategory = async (id: string): Promise<void> => {
  await axiosClient.delete(`/categories/${id}`);
};
