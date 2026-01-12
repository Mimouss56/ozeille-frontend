// Types liés à l'authentification (inscription, login, réponses, etc.)
// Centralise les types pour une meilleure réutilisation et maintenabilité
import type { UserEntity } from "../store/user.store";

export type ResetPasswordData = {
  password: string;
  confirmedPassword: string;
};

export type RegisterData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponseDto = {
  message: string;
  tempToken: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
  confirmationStatus: "idle" | "pending" | "success" | "error";
  confirmationError: string | null;
  confirmationToken: string | null;
  user: UserEntity | null;

  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: UserEntity | null) => void;
  sendConfirmationEmail: (email: string) => Promise<void>;
  confirmEmail: (token: string) => Promise<boolean>;
  register: (data: RegisterData) => Promise<void>;
  login: (data: LoginData) => Promise<LoginResponseDto>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, data: ResetPasswordData) => Promise<void>;
};
