import { PiggyBankIcon, TagIcon } from "@phosphor-icons/react";
import { PencilSimple, Trash } from "phosphor-react";
import { createElement, useMemo } from "react";

import type { Budget } from "../../api/budgets";
import { type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { useStoreBudgets } from "../../store";
import { BudgetModal } from "../BudgetModal/BudgetModal";

export function useBudgetCard(
  options: {
    id?: string;
    budget?: Budget;
    onEditTransaction?: (id: string) => void;
    onAddCategories?: (id: string) => void;
    onEditBudget?: (id: string) => void;
  } = {},
) {
  const { deleteBudgetById } = useStoreBudgets();

  const menuActions: MenuAction[] = useMemo(() => {
    if (!options?.id) return [];
    return [
      {
        label: "Ajouter Catégorie",
        icon: TagIcon,
        onClick: () => options.onAddCategories?.(options.id!),
        style: "ghost",
      },
      {
        label: "Ajouter Transaction",
        icon: PiggyBankIcon,
        onClick: () => options.onEditTransaction?.(options.id!),
        style: "ghost",
      },
      {
        label: "Éditer budget",
        icon: PencilSimple,
        render: options.budget ? createElement(BudgetModal, { budget: options.budget! }) : null,
        style: "ghost",
      },
      {
        label: "Supprimer",
        icon: Trash,
        style: "danger",
        onClick: () => deleteBudgetById(options.id!),
      },
    ];
  }, [deleteBudgetById, options]);

  return { menuActions };
}
