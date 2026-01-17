import { PiggyBankIcon } from "@phosphor-icons/react";
import { PencilSimple, Trash } from "phosphor-react";
import { createElement, useMemo } from "react";

import type { MenuAction } from "../ActionMenu/ActionMenu";
import type { CategoryItem } from "./BudgetCard";
import { BudgetCardStatus, getStatusColor } from "./BudgetCard.utils";

/**
 * Hook pour calculer le status global et les status de chaque catégorie d'une carte budget.
 * @param currentAmount Montant courant du budget
 * @param limitAmount Limite du budget
 * @param categories Liste des catégories (optionnel)
 */
export function useBudgetCardStatus(
  currentAmount: number,
  limitAmount: number,
  categories?: CategoryItem[],
  options?: {
    id?: string;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onEditBudget?: (id: string) => void;
  },
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

  // Actions du menu contextuel
  const menuActions: MenuAction[] = useMemo(() => {
    if (!options?.id) return [];
    return [
      {
        label: "Ajouter transaction",
        icon: PiggyBankIcon,
        onClick: () => options.onEdit?.(options.id!),
      },
      {
        label: "Éditer budget",
        icon: PencilSimple,
        onClick: () => options.onEditBudget?.(options.id!),
      },
      {
        label: "Supprimer",
        icon: Trash,
        variant: "danger",
        onClick: () => options.onDelete?.(options.id!),
      },
    ];
  }, [options]);

  return { globalStatus, categoriesStatus, menuActions };
}
