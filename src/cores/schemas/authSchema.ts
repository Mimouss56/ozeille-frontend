import { z } from "zod";

const emailValidation = z.email("Format d'email invalide");

const passwordValidation = z
  .string()
  .min(8, "Le mot de passe doit faire au moins 8 caractères");

export const forgotPasswordSchema = z.object({
  email: emailValidation,
});

export const loginSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;
export type LoginData = z.infer<typeof loginSchema>;
