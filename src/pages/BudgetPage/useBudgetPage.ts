import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { BudgetFilter } from "../../@types/budget";
import { useStoreBudgets } from "../../store/budgetsStore";

const defaultPeriod = () => dayjs().startOf("month").format("YYYY-MM");

export function useBudgetPage() {
  const [searchValue, setSearchValue] = useState("");
  const [period, setPeriod] = useState<string>(() => defaultPeriod());

  const { loading, fetchBudgets, budgets } = useStoreBudgets();
  useEffect(() => {
    const filters: BudgetFilter = {};
    const from = dayjs(period, "YYYY-MM").startOf("month").format("YYYY-MM-DD");
    const to = dayjs(period, "YYYY-MM").endOf("month").format("YYYY-MM-DD");
    filters.from = from;
    filters.to = to;
    fetchBudgets(filters);
  }, [fetchBudgets, period]);

  const filteredBudgets = useMemo(() => {
    if (!searchValue.trim()) return budgets;
    return budgets.filter((b) => b.label.toLowerCase().includes(searchValue.toLowerCase()));
  }, [budgets, searchValue]);

  const incomeCategories = useMemo(() => {
    if (!budgets) return [];
    return budgets.flatMap((b) => b.categories ?? []).filter((c) => c.type === "INCOME");
  }, [budgets]);

  const handleChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handlePeriodChange = useCallback((value: string) => {
    setPeriod(value);
  }, []);

  return {
    searchValue,
    period,
    filteredBudgets,
    incomeCategories,
    loading,
    handleChange,
    handlePeriodChange,
  };
}
