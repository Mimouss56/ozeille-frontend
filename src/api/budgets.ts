import { axiosClient } from "../utils/axiosClient";

export const getBudgets = async (): Promise<Budget[]> => {
  const { data } = await axiosClient.get<Budget[]>("/budgets");

  return data;
};

export const getBudgetById = async (id: string): Promise<Budget> => {
  const { data } = await axiosClient.get<Budget>(
    `/budgets/${id}`
  );
  return data;
};

export const createBudget = async (
  payload: CreateBudgetDto
): Promise<Budget> => {
  const { data } = await axiosClient.post<Budget>(
    "/budgets",
    payload
  );
  return data;
};

export const updateBudget = async (
  id: string,
  payload: UpdateBudgetDto
): Promise<Budget> => {
  const { data } = await axiosClient.put<Budget>(
    `/budgets/${id}`,
    payload
  );
  return data;
};

export const deleteBudget = async (id: string): Promise<void> => {
  await axiosClient.delete(`/budgets/${id}`);
};

export interface Budget {
  // TODO importer depuis shared
}

export interface CreateBudgetDto {
  // TODO importer depuis shared
}

export interface UpdateBudgetDto {
  // TODO importer depuis shared
}
