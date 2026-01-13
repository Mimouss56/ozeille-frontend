import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(3, "L'email est requis")
    .email("Format d'email invalide")
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;