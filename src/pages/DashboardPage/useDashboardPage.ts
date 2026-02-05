import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { BudgetFilter } from "../../@types/budget";
import { useStoreBudgets } from "../../store/budgetsStore";

const defaultPeriod = () => dayjs().startOf("month").format("YYYY-MM");

export function useDashboardPage() {
  const [period, setPeriod] = useState<string>(() => defaultPeriod());
  const { loading, fetchBudgets, budgets } = useStoreBudgets();

  // On charge les données quand la période change
  useEffect(() => {
    const filters: BudgetFilter = {};
    const from = dayjs(period, "YYYY-MM").startOf("month").format("YYYY-MM-DD");
    const to = dayjs(period, "YYYY-MM").endOf("month").format("YYYY-MM-DD");
    filters.from = from;
    filters.to = to;
    fetchBudgets(filters);
  }, [fetchBudgets, period]);

  // 1. Séparation Budgets Dépenses / Catégories Revenus
  const expenseBudgets = useMemo(() => {
    return budgets.filter((b) => {
      const categories = b.categories ?? [];
      if (categories.length === 0) return true;
      return categories.some((categorie) => categorie.type !== "INCOME");
    });
  }, [budgets]);

  const incomeCategories = useMemo(() => {
    return budgets.flatMap((budget) => budget.categories ?? []).filter((categorie) => categorie.type === "INCOME");
  }, [budgets]);

  // 2. Calcul des Totaux (Pour le Reste à Vivre)
  const { totalIncome, totalExpenses } = useMemo(() => {
    let inc = 0;
    let exp = 0;

    budgets.forEach((budget) => {
      budget.categories?.forEach((categorie) => {
        const sum = (categorie.transactions ?? []).reduce((acc, t) => acc + Number(t.amount), 0);

        if (categorie.type === "INCOME") {
          inc += sum;
        } else {
          exp += sum;
        }
      });
    });

    return {
      totalIncome: inc,
      totalExpenses: Math.abs(exp),
    };
  }, [budgets]);

  const handlePeriodChange = useCallback((value: string) => {
    setPeriod(value);
  }, []);

  return {
    period,
    loading,
    handlePeriodChange,
    expenseBudgets,
    incomeCategories,
    totalIncome,
    totalExpenses,
  };
}
