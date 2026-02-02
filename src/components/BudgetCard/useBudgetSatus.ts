import { useMemo } from "react";

import { BudgetCardStatus, type CategoryItem } from "./BudgetCard";

/**
 * Hook pour calculer le status global et les status de chaque catégorie d'une carte budget.
 * @param currentAmount Montant courant du budget
 * @param limitAmount Limite du budget
 * @param categories Liste des catégories (optionnel)
 */
export function useBudgetCardStatus(
  currentAmount: number, //ok
  limitAmount: number, //ok
  categories?: CategoryItem[],
) {
  const getStatusColor = (current: number, max: number): BudgetCardStatus => {
    if (current === 0) return BudgetCardStatus.Neutral; // 0/max
    if (current > max) return BudgetCardStatus.Error; // Dépassé, doit être avant === max
    if (current === max) return BudgetCardStatus.Warning; // À la limite
    return BudgetCardStatus.Success; // En dessous de la limite
  };

  // Status global du budget
  const globalStatus = useMemo(() => getStatusColor(currentAmount, limitAmount), [currentAmount, limitAmount]);

  // Status de chaque catégorie (si fourni)
  const categoriesStatus = useMemo(
    () =>
      categories?.map((cat) => ({
        id: cat.id,
        status: getStatusColor(cat.currentAmount, cat.limitAmount) as BudgetCardStatus,
      })) ?? [],
    [categories],
  );

  return { globalStatus, categoriesStatus };
}
