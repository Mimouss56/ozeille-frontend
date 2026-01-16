import { PiggyBankIcon } from "@phosphor-icons/react";
import { PencilSimple, Trash } from "phosphor-react";
import { createElement, useMemo } from "react";

import type { Budget } from "../../api/budgets";
import { type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { useStoreBudgets } from "../../store";

export function useBudgetCard(
  options: {
    id?: string;
    budget?: Budget;
    onEditTransaction?: (id: string) => void;
  } = {},
) {
  const { updateCurrentBudget, deleteBudgetById } = useStoreBudgets();

  const menuActions: MenuAction[] = useMemo(() => {
    if (!options?.id) return [];
    return [
      {
        label: "Ajouter Transaction",
        icon: createElement(PiggyBankIcon, { size: 16 }),
        onClick: () => options.onEditTransaction?.(options.id!),
      },
      {
        label: "Éditer budget",
        icon: createElement(PencilSimple, { size: 16 }),
        onClick: () => updateCurrentBudget(options.id!, options.budget!),
      },
      {
        label: "Supprimer",
        icon: createElement(Trash, { size: 16 }),
        variant: "danger",
        onClick: () => deleteBudgetById(options.id!),
      },
    ];
  }, [deleteBudgetById, options, updateCurrentBudget]);

  return { menuActions };
}
