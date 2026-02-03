import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { createElement, useMemo } from "react";

import type { Budget } from "../../api/budgets";
import { type MenuAction } from "../../components/ActionMenu/ActionMenu";
import { useStoreBudgets } from "../../store";
import { BudgetModal } from "../BudgetModal/BudgetModal";
import { useBudgetCardStatus } from "./useBudgetSatus";

export function useBudgetCard(options: {
  budget: Budget;
  onEditTransaction?: (id: string) => void;
  onAddCategories?: (id: string) => void;
  onEditBudget?: (id: string) => void;
}) {
  const { deleteBudgetById } = useStoreBudgets();

  const menuActions: MenuAction[] = useMemo(() => {
    const id = options?.budget?.id;
    if (!id) return [];
    return [
      {
        label: "Éditer budget",
        icon: PencilSimpleIcon,
        render: createElement(BudgetModal, { budget: options.budget }),
        style: "ghost",
      },
      {
        label: "Supprimer",
        icon: TrashIcon,
        style: "danger",
        onClick: () => deleteBudgetById(id),
      },
    ];
  }, [deleteBudgetById, options]);

  const formatCompact = useMemo(() => {
    const formatter = new Intl.NumberFormat("fr-FR", {
      notation: "compact",
      compactDisplay: "short",
    });
    return (current: number, limit: number): string => {
      return `${formatter.format(current)} / ${formatter.format(limit)}`;
    };
  }, []);

  const transformBudget = useMemo(() => {
    const { budget } = options;
    const categories = budget.categories ?? [];
    const expenseCategories = categories.filter((cat) => cat.type === "EXPENSE" || !cat.type);
    const categoriesTransformed = expenseCategories.map((cat) => {
      const currentAmount = (cat.transactions ?? []).reduce((s, tx) => s + Math.abs(tx.amount), 0);
      return {
        id: cat.id,
        label: cat.label,
        currentAmount,
        limitAmount: Number(cat.limitAmount),
        ratio: formatCompact(currentAmount, Number(cat.limitAmount)),
      };
    });
    return {
      id: budget.id,
      label: budget.label,
      currentAmount: categoriesTransformed.reduce((sum, cat) => sum + cat.currentAmount, 0),
      limitAmount: categoriesTransformed.reduce((sum, cat) => sum + cat.limitAmount, 0),
      categories: categoriesTransformed,
    };
  }, [formatCompact, options]);

  const { globalStatus, categoriesStatus } = useBudgetCardStatus(
    transformBudget.currentAmount,
    transformBudget.limitAmount,
    transformBudget.categories,
  );

  const formattedBudget = {
    color: options.budget.color || "#000",
    globalStatus,
    categoriesStatus,
    label: options.budget.label,
    currentAmount: transformBudget.currentAmount,
    limitAmount: transformBudget.limitAmount,
    ratio: formatCompact(transformBudget.currentAmount, transformBudget.limitAmount),
    categories: transformBudget.categories,
  };
  return {
    menuActions,
    globalStatus,
    categoriesStatus,
    formattedBudget,
  };
}
