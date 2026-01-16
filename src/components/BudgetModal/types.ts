import { z } from "zod";

export type BudgetFormState = {
  label: string;
  color: string;
};

export type BudgetEditFormState = BudgetFormState;

export const budgetSchema = z.object({
  label: z.string().min(1, "Le label est requis"),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/, {
    message: "Code couleur invalide. Doit contenir au moins 7 charactères (ex: #RRGGBB).",
  }),
});
export const budgetEditSchema = budgetSchema.extend({ pointedAt: z.string().min(2, "La date est requise") });
