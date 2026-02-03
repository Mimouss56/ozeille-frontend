import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z.string().min(12, "Le mot de passe doit faire au moins 12 caractères"),
    confirmedPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmedPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.email("Format d'email invalide"),
});

export const loginSchema = z.object({
  email: z.email("Format d'email invalide"),
  password: z.string().min(12, "Le mot de passe doit faire au moins 12 caractères"),
});

export const registerSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.email("Format d'email invalide"),
    password: z.string().min(12, "Le mot de passe doit faire au moins 12 caractères"),
    confirmedPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmedPassword"],
  });

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;
