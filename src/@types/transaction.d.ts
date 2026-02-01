import { z } from "zod";

export const transactionSchema = z.object({
  label: z.string().min(1, "Le label est requis"),
  amount: z
    .string()
    .min(1, "Le montant est requis")
    .refine((value) => !isNaN(Number(value)), "Le montant doit être un nombre"),
  dueAt: z.string().min(1, "La date est requise"), // Ou .date() si vous voulez être strict sur le format
  categoryId: z.string().min(1, "Veuillez sélectionner une catégorie"),
  frequencyId: z.string().min(1, "Veuillez sélectionner une fréquence"),
});

export const transactionEditSchema = transactionSchema.extend({ pointedAt: z.string().min(2, "La date est requise") });

export type TransactionFormState = {
  label: string;
  amount: string;
  dueAt: string;
  categoryId: string;
  frequencyId: string;
};

export type TransactionEditFormState = TransactionFormState & {
  pointedAt: string;
};
