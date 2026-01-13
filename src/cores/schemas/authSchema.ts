import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email("Format d'email invalide").min(3, "L'email est requis"),
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;
