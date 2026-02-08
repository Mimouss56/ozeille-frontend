import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { BudgetFilter } from "../../@types/budget";
import { useStoreBudgets } from "../../store/budgetsStore";

const defaultPeriod = () => dayjs().startOf("month").format("YYYY-MM");

const calculateCategorySum = (transactions: Array<{ amount: string | number }> | undefined): number => {
  return (transactions ?? []).reduce((acc, t) => acc + Number(t.amount), 0);
};

export function useDashboardPage() {
  const [period, setPeriod] = useState<string>(() => defaultPeriod());
  const { loading, fetchBudgets, budgets, fetchSummary, summary } = useStoreBudgets();

  // On charge les données quand la période change
  useEffect(() => {
    const filters: BudgetFilter = {};
    const from = dayjs(period, "YYYY-MM").startOf("month").format("YYYY-MM-DD");
    const to = dayjs(period, "YYYY-MM").endOf("month").format("YYYY-MM-DD");
    filters.from = from;
    filters.to = to;

    // On charge les budgets du mois en cours (pour les cartes détaillées)
    fetchBudgets(filters);

    // On charge le summary jusqu'à aujourd'hui pour conserver les mois postérieurs
    fetchSummary({ to: dayjs().format("YYYY-MM-DD") });
  }, [fetchBudgets, fetchSummary, period]);

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

  // 2. Utilisation des totaux du summary (optimisé backend) ou fallback sur calcul local
  const { totalIncome, totalExpenses } = useMemo(() => {
    if (summary?.balance) {
      return {
        totalIncome: summary.balance.totalIncome,
        totalExpenses: summary.balance.totalExpenses,
      };
    }

    // Fallback si le summary n'est pas encore chargé
    let inc = 0;
    let exp = 0;

    budgets.forEach((budget) => {
      budget.categories?.forEach((categorie) => {
        const sum = calculateCategorySum(categorie.transactions);

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
  }, [budgets, summary]);

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
    monthlySummaries: summary?.monthlySummaries ?? [],
  };
}
