import { z } from "zod";

export const categorySchema = z.object({
  label: z.string().min(1, "Le label est requis"),
  limitAmount: z.coerce.number({ invalid_type_error: "Le montant doit être un nombre" }).optional(), // Optionnel : accepte vide ou un nombre valide
  budgetId: z.string().min(1, "Veuillez sélectionner un budget"),
  color: z.string().optional(),
});

// Pas de champ supplémentaire pour l'édition d'une catégorie, mais on garde la structure
export const categoryEditSchema = categorySchema;

export type CategoryFormState = {
  label: string;
  limitAmount: string;
  budgetId: string;
  color: string;
};

export type CategoryEditFormState = CategoryFormState;
