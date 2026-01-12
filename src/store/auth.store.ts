import { create } from "zustand";

import type { AuthState, LoginResponseDto } from "../@types/auth";
import { extractAxiosErrorMsg } from "../utils/axiosClient";
import { axiosClient } from "../utils/axiosClient";

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  loading: false,
  confirmationStatus: "idle",
  confirmationError: null,
  confirmationToken: null,
  user: null,

  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUser: (user) => set({ user }),

  sendConfirmationEmail: async (email) => {
    set({ loading: true });
    try {
      await axiosClient.post<void>("/auth/register/send-confirmation-email", { email });
    } catch (error) {
      set({ confirmationError: extractAxiosErrorMsg(error) });
    } finally {
      set({ loading: false });
    }
  },

  confirmEmail: async (token) => {
    set({ confirmationStatus: "pending", confirmationError: null });
    try {
      const { data } = await axiosClient.post<boolean>(`/auth/register/confirm?token=${token}`);
      set({ confirmationStatus: data === true ? "success" : "error" });
      return data === true;
    } catch (error) {
      set({ confirmationStatus: "error", confirmationError: extractAxiosErrorMsg(error) });
      return false;
    }
  },

  register: async (data) => {
    set({ loading: true });
    try {
      await axiosClient.post<void>("/auth/register", data);
    } catch (error) {
      set({ confirmationError: extractAxiosErrorMsg(error) });
    } finally {
      set({ loading: false });
    }
  },

  login: async (data) => {
    set({ loading: true });
    try {
      const resp = await axiosClient.post<LoginResponseDto>("/auth/login", data);
      set({ isAuthenticated: false });
      return resp.data;
    } catch (error) {
      set({ confirmationError: extractAxiosErrorMsg(error) });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  forgotPassword: async (email) => {
    set({ loading: true });
    try {
      await axiosClient.post<void>("/auth/forgot-password", { email });
    } catch (error) {
      set({ confirmationError: extractAxiosErrorMsg(error) });
    } finally {
      set({ loading: false });
    }
  },

  resetPassword: async (token, data) => {
    set({ loading: true });
    try {
      await axiosClient.post<void>(`/auth/reset-password?token=${token}`, data);
    } catch (error) {
      set({ confirmationError: extractAxiosErrorMsg(error) });
    } finally {
      set({ loading: false });
    }
  },
}));
