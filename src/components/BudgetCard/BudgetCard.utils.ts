import type { Budget } from "../../api/budgets";

// Utilisation de as const pour un type plus précis et moderne
export const BudgetCardStatus = {
  Neutral: "neutral",
  Success: "success",
  Warning: "warning",
  Error: "error",
} as const;

export type BudgetCardStatus = (typeof BudgetCardStatus)[keyof typeof BudgetCardStatus];

export const getStatusColor = (current: number, max: number): BudgetCardStatus => {
  if (current === 0) return BudgetCardStatus.Neutral; // 0/max
  if (current > max) return BudgetCardStatus.Error; // Dépassé, doit être avant === max
  if (current === max) return BudgetCardStatus.Warning; // À la limite
  return BudgetCardStatus.Success; // En dessous de la limite
};

// Optimisation : création de l'instance Intl.NumberFormat une seule fois
const compactNumberFormatter = new Intl.NumberFormat("fr-FR", {
  notation: "compact",
  compactDisplay: "short",
});

export const formatCompact = (current: number, limit: number): string => {
  const currentStr = compactNumberFormatter.format(current);
  const limitStr = compactNumberFormatter.format(limit);
  return `${currentStr} / ${limitStr}`;
};

export const transformBudget = (budget: Budget) => ({
  id: budget.id,
  label: budget.label,
  color: budget.color || "#000",

  currentAmount: (budget.categories ?? []).reduce((sum, cat) => {
    const catAmount = cat.transactions?.reduce((s, tx) => s + Math.abs(tx.amount), 0) || 0;
    return sum + catAmount;
  }, 0),

  limitAmount: (budget.categories ?? []).reduce((sum, cat) => sum + Number(cat.limitAmount), 0),

  categories: (budget.categories ?? []).map((cat) => ({
    id: cat.id,
    label: cat.label,
    currentAmount: cat.transactions?.reduce((s, tx) => s + Math.abs(tx.amount), 0) || 0,
    limitAmount: Number(cat.limitAmount),
  })),
});
