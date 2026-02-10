import { z } from "zod";

export const transactionSchema = z.object({
  label: z.string().min(1, "Le label est requis"),
  amount: z.coerce
    .number({ invalid_type_error: "Le montant doit être un nombre" })
    .refine((val) => val !== 0, "Le montant ne peut pas être zéro"),
  dueAt: z.string().min(1, "La date est requise"), // Ou .date() si vous voulez être strict sur le format
  categoryId: z.string().min(1, "Veuillez sélectionner une catégorie"),
  frequencyId: z
    .string()
    .transform((val) => (val.trim() === "" ? undefined : val))
    .optional(),
});

export const transactionEditSchema = transactionSchema.extend({
  pointedAt: z.string().optional().nullable(),
  frequencyId: z
    .string()
    .nullable()
    .optional()
    .transform((val) => {
      if (val === null || val === undefined) return null;
      return val.trim() === "" ? null : val;
    }),
});

export type TransactionFormState = {
  label: string;
  amount: string;
  dueAt: string;
  categoryId: string;
  frequencyId?: string | null;
};

export type TransactionEditFormState = TransactionFormState & {
  pointedAt: string;
};
