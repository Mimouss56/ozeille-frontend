import { z } from "zod";

const emailValidation = z.email("Format d'email invalide");

const passwordValidation = z
  .string()
  .min(8, "Le mot de passe doit faire au moins 8 caractères");

const nameValidation = z.string();

export const forgotPasswordSchema = z.object({
  email: emailValidation,
});

export const loginSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
});

export const registerSchema = z.object({
  firstName: nameValidation,
  lastName: nameValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmedPassword: z.string(),
}).refine((data) => data.password === data.confirmedPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmedPassword"],
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;