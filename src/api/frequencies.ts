import { axiosClient } from "../utils/axiosClient";
import type { Transaction } from "./transactions";

export const getFrequencies = async (): Promise<Frequency[]> => {
  const { data } = await axiosClient.get<Frequency[]>("/frequencies");
  return data;
};

export const getFrequencyById = async (id: string): Promise<Frequency> => {
  const { data } = await axiosClient.get<Frequency>(`/frequencies/${id}`);
  return data;
};

export const createFrequency = async (payload: CreateFrequencyDto): Promise<Frequency> => {
  const { data } = await axiosClient.post<Frequency>("/frequencies", payload);
  return data;
};

export const updateFrequency = async (id: string, payload: UpdateFrequencyDto): Promise<Frequency> => {
  const { data } = await axiosClient.put<Frequency>(`/frequencies/${id}`, payload);
  return data;
};

export const deleteFrequency = async (id: string): Promise<void> => {
  await axiosClient.delete(`/frequencies/${id}`);
};

export interface Frequency {
  id: string;
  label: string;
  monthlyValue: number;
  transactions: Transaction[];
}

export interface CreateFrequencyDto {
  label: string;
  monthlyValue: number;
}

export interface UpdateFrequencyDto {
  label?: string;
  monthlyValue?: number;
}
