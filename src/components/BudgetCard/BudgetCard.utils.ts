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
