import { axiosClient } from "../utils/axiosClient";

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axiosClient.get<Category[]>("/categories");
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

export interface Category {
  id: string;
  budgetId: string;
  label: string;
  color: string | null;
  userId: string | null;
  limitAmount: number;
}

export interface CreateCategoryDto {
  budgetId: string;
  label: string;
  color?: string;
  userId?: string;
  limitAmount?: number;
}

export interface UpdateCategoryDto {
  label?: string;
  color?: string;
  limitAmount?: number;
}
