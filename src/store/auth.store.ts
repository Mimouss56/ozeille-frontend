import { create } from "zustand";

import type { LoginData, LoginResponseDto, RegisterData, ResetPasswordData } from "../@types/auth.d";
import { ConfirmationStatusEnum } from "../@types/auth.d";
import type { FetchMeResponse, UserEntity } from "../@types/user";
import { extractAxiosErrorMsg } from "../utils/axiosClient";
import { axiosClient } from "../utils/axiosClient";

type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
  confirmationStatus: ConfirmationStatusEnum;
  confirmationError: string | null;
  confirmationToken: string | null;
  user: UserEntity | null;

  /**
   * Set the authentication state
   * @param isAuthenticated - Whether the user is authenticated
   */
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  /**
   * Reset the confirmation state to initial values
   */
  resetConfirmationState: () => void;
  /**
   * Set the state to loading
   */
  setLoadingState: () => void;
  /**
   * Set the state to error
   * @param error - The error message
   */
  setErrorState: (error: unknown) => void;
  /**
   * Set the state to success
   */
  setSuccessState: () => void;
  /**
   * Set the state based on the result of an operation
   * @param isSuccess - Whether the operation was successful
   * @param error - Optional error object if the operation failed
   */
  setStateOnResult: (isSuccess: boolean, error?: unknown | null) => void;
  /**
   * Check if the user has confirmed their email address
   */
  isConfirmed: () => boolean;

  sendConfirmationEmail: (email: string) => Promise<void>;
  confirmEmail: (token: string) => Promise<boolean>;
  confirm2FA: (code: string) => Promise<boolean>;
  register: (data: RegisterData) => Promise<void>;
  login: (data: LoginData) => Promise<LoginResponseDto | undefined>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, data: ResetPasswordData) => Promise<void>;
  fetchMe: () => Promise<FetchMeResponse | undefined>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  loading: false,
  confirmationStatus: ConfirmationStatusEnum.Idle,
  confirmationError: null,
  confirmationToken: null,
  user: null,

  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),

  resetConfirmationState: () =>
    set({
      confirmationStatus: ConfirmationStatusEnum.Idle,
      confirmationError: null,
    }),

  setLoadingState: () => {
    set({
      loading: true,
      confirmationStatus: ConfirmationStatusEnum.Pending,
      confirmationError: null,
    });
  },

  setErrorState: (error: unknown) => {
    set({
      loading: false,
      confirmationStatus: ConfirmationStatusEnum.Error,
      confirmationError: extractAxiosErrorMsg(error),
    });
  },

  setSuccessState: () => {
    set({
      loading: false,
      confirmationStatus: ConfirmationStatusEnum.Success,
      confirmationError: null,
    });
  },

  setStateOnResult: (isSuccess: boolean, error?: unknown | null) => {
    if (isSuccess) {
      get().setSuccessState();
    } else {
      get().setErrorState(error);
    }
  },

  isConfirmed: () => get().confirmationStatus === ConfirmationStatusEnum.Success,

  sendConfirmationEmail: async (email) => {
    get().setLoadingState();
    try {
      await axiosClient.post<void>("/auth/register/send-confirmation-email", { email });
      get().setSuccessState();
    } catch (error) {
      get().setErrorState(error);
    }
  },

  confirmEmail: async (token) => {
    get().setLoadingState();
    let isValid = false;
    try {
      const { data } = await axiosClient.post<boolean>(`/auth/register/confirm?token=${token}`);
      isValid = data;
      get().setStateOnResult(data);
    } catch (error) {
      get().setErrorState(error);
    }
    return isValid;
  },
  confirm2FA: async (code: string) => {
    get().setLoadingState();
    try {
      const { data } = await axiosClient.post<{ accessToken: string; refreshToken: string; userId: string }>(
        `/auth/2fa/validate`,
        {
          tempToken: sessionStorage.getItem("tmp_token"),
          code,
        },
      );

      set({ confirmationStatus: data ? ConfirmationStatusEnum.Success : ConfirmationStatusEnum.Error });
      sessionStorage.removeItem("tmp_token");
      sessionStorage.setItem("access_token", data.accessToken);
      sessionStorage.setItem("refresh_token", data.refreshToken);

      // Récupérer l'utilisateur après confirmation 2FA
      const dataUser = await axiosClient.get<FetchMeResponse>("/auth/me");
      console.log("user", dataUser);

      set({ user: dataUser.data.me, isAuthenticated: true });
      get().setSuccessState();
      return true;
    } catch (error) {
      get().setErrorState(error);
      return false;
    }
  },
  register: async (data) => {
    get().setLoadingState();
    try {
      await axiosClient.post<void>("/auth/register", data);
      get().setSuccessState();
    } catch (error) {
      get().setErrorState(error);
    }
  },

  login: async (data) => {
    get().setLoadingState();

    let loginResponse: LoginResponseDto | undefined;
    try {
      const resp = await axiosClient.post<LoginResponseDto>("/auth/login", data);
      loginResponse = resp.data;
      set({ isAuthenticated: false });
      get().setSuccessState();
    } catch (error) {
      get().setErrorState(error);
    }
    return loginResponse;
  },

  forgotPassword: async (email) => {
    get().setLoadingState();
    try {
      await axiosClient.post<void>("/auth/forgot-password", { email });
      get().setSuccessState();
    } catch (error) {
      get().setErrorState(error);
    }
  },

  resetPassword: async (token, data) => {
    get().setLoadingState();
    try {
      await axiosClient.post<void>(`/auth/reset-password?token=${token}`, data);
      get().setSuccessState();
    } catch (error) {
      get().setErrorState(error);
    }
  },
  fetchMe: async () => {
    get().setLoadingState();

    try {
      const { data } = await axiosClient.get<FetchMeResponse>("/auth/me");
      set({ user: data.me, isAuthenticated: true });
      get().setSuccessState();
      return data;
    } catch (error) {
      get().setErrorState(error);
    }
  },
  logout: () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    set({
      isAuthenticated: false,
      user: null,
      confirmationStatus: ConfirmationStatusEnum.Idle,
      confirmationError: null,
      confirmationToken: null,
    });
  },
}));
