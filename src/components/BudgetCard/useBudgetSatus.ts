import { useMemo } from "react";

import type { CategoryItem } from "./BudgetCard";
import { BudgetCardStatus, getStatusColor } from "./BudgetCard.utils";

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
