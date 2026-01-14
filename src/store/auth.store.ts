import { create } from "zustand";

import type { LoginData, LoginResponseDto, RegisterData, ResetPasswordData } from "../@types/auth.d";
import { ConfirmationStatusEnum } from "../@types/auth.d";
import type { UserEntity } from "../@types/user";
import { extractAxiosErrorMsg } from "../utils/axiosClient";
import { axiosClient } from "../utils/axiosClient";

type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
  confirmationStatus: ConfirmationStatusEnum;
  confirmationError: string | null;
  confirmationToken: string | null;
  user: UserEntity | null;

  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: UserEntity | null) => void;
  resetConfirmationState: () => void;
  sendConfirmationEmail: (email: string) => Promise<void>;
  confirmEmail: (token: string) => Promise<boolean>;
  register: (data: RegisterData) => Promise<void>;
  login: (data: LoginData) => Promise<LoginResponseDto>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, data: ResetPasswordData) => Promise<void>;
};
export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  loading: false,
  confirmationStatus: ConfirmationStatusEnum.Idle,
  confirmationError: null,
  confirmationToken: null,
  user: null,

  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUser: (user) => set({ user }),

  resetConfirmationState: () => set({ 
    confirmationStatus: ConfirmationStatusEnum.Idle, 
    confirmationError: null
  }),

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
    set({ confirmationStatus: ConfirmationStatusEnum.Pending, confirmationError: null });
    try {
      const { data } = await axiosClient.post<boolean>(`/auth/register/confirm?token=${token}`);

      set({ confirmationStatus: data === true ? ConfirmationStatusEnum.Success : ConfirmationStatusEnum.Error });
      return data === true;
    } catch (error) {
      set({ confirmationStatus: ConfirmationStatusEnum.Error, confirmationError: extractAxiosErrorMsg(error) });
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
    set({ 
      loading: true,
      confirmationStatus: ConfirmationStatusEnum.Pending,
      confirmationError: null 
    });
    try {
      await axiosClient.post<void>("/auth/forgot-password", { email });
      set({ confirmationStatus: ConfirmationStatusEnum.Success });
    } catch (error) {
      set({
        confirmationStatus: ConfirmationStatusEnum.Error, 
        confirmationError: extractAxiosErrorMsg(error) 
      });
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
