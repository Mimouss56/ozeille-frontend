// Types liés à l'authentification (inscription, login, réponses, etc.)
// Centralise les types pour une meilleure réutilisation et maintenabilité

export type ResetPasswordData = {
  password: string;
  confirmedPassword: string;
};

export type RegisterData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmedPassword: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponseDto = {
  message: string;
  tempToken: string;
};
export enum ConfirmationStatusEnum {
  Idle = "idle",
  Pending = "pending",
  Success = "success",
  Error = "error",
}

export type ConfirmationStatus = ConfirmationStatusEnum;
