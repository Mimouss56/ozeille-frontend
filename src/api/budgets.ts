import type { BudgetFilter } from "../@types/budget";
import { axiosClient } from "../utils/axiosClient";
import type { Category } from "./categories";
import type { Transaction } from "./transactions";

export const getBudgets = async (filters?: BudgetFilter): Promise<Budget[]> => {
  const { data } = await axiosClient.get<Budget[]>("/budgets", { params: filters });

  return data;
};

export const getBudgetById = async (id: string): Promise<Budget> => {
  const { data } = await axiosClient.get<Budget>(`/budgets/${id}`);
  return data;
};

export const createBudget = async (payload: CreateBudgetDto): Promise<Budget> => {
  const { data } = await axiosClient.post<Budget>("/budgets", payload);
  return data;
};

export const updateBudget = async (id: string, payload: UpdateBudgetDto): Promise<Budget> => {
  const { data } = await axiosClient.put<Budget>(`/budgets/${id}`, payload);
  return data;
};

export const deleteBudget = async (id: string): Promise<void> => {
  await axiosClient.delete(`/budgets/${id}`);
};

export const getSummaryBudget = async (filters?: BudgetFilter): Promise<SummaryBudget> => {
  const { data } = await axiosClient.get<SummaryBudget>("/budgets/summary", { params: filters });
  return data;
};

export interface Budget {
  id: string;
  label: string;
  color: string;
  categories: (Category & { transactions: Transaction[] })[];
}

export interface CreateBudgetDto {
  label: string;
  color?: string;
}

export interface UpdateBudgetDto {
  label?: string;
  color?: string;
}

export interface SummaryBudget {
  incomes: SummaryCategory[];
  upCommingBills: SummaryUpcomingBills[];
  balance: SummaryBalance;
  monthlySummaries: MonthlySummary[];
}

export interface SummaryCategory {
  id: string;
  label: string;
  color: string | null;
  amount: number;
}

export interface SummaryUpcomingBills extends SummaryCategory {
  budgetName: string | null;
}

export interface SummaryBalance {
  totalIncome: number;
  totalExpenses: number;
}

export interface MonthlySummary {
  month: string;
  totalIncome: number;
  totalExpenses: number;
}
