import { SpinnerIcon } from "@phosphor-icons/react";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { BudgetFilter } from "../../@types/budget";
import { BudgetCard } from "../../components/BudgetCard/BudgetCard";
import { BudgetModal } from "../../components/BudgetModal/BudgetModal";
import { InputField } from "../../components/InputField/InputField";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { useStoreBudgets } from "../../store/budgetsStore";

const defaultPeriod = () => {
  const date = new Date();
  date.setDate(1);
  const currentMonth = date.getMonth() + 1;

  if (currentMonth < 10) return `${date.getFullYear()}-0${currentMonth}`;

  return `${date.getFullYear()}-${currentMonth}`;
};

export function BudgetPage() {
  const [searchValue, setSearchValue] = useState("");
  const [period, setPeriod] = useState<string>(() => defaultPeriod());
  const { loading, fetchBudgets, budgets } = useStoreBudgets();
  // const editingBudget = budgets.find((b) => b.id === editingBudgetId);

  useEffect(() => {
    const filters: BudgetFilter = {};

    // Convert the period string to a Date object
    const periodDate = new Date(period);
    // Retrieve only the year, month and day from the Date object: YYYY-MM-DD
    filters.from = periodDate.toISOString().split("T")[0];
    // Add one month to the Date object and set the day to the last day of the month
    periodDate.setMonth(periodDate.getMonth() + 1);
    periodDate.setDate(0);
    filters.to = periodDate.toISOString().split("T")[0];

    fetchBudgets(filters);
  }, [fetchBudgets, period]);

  const filteredBudgets = useMemo(() => {
    if (!searchValue.trim()) return budgets;

    return budgets.filter((b) => b.label.toLowerCase().includes(searchValue.toLowerCase()));
  }, [budgets, searchValue]);

  const handleChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handlePeriodChange = useCallback((value: string) => {
    setPeriod(value);
  }, []);

  const display = () => {
    if (loading) {
      return (
        <div className="flex h-64 items-center justify-center">
          <div className="animate-spin">
            <SpinnerIcon size={32} />
          </div>
        </div>
      );
    }

    if (filteredBudgets.length === 0) {
      return <StatusMessage variant={"default"}>Aucun budget à afficher pour le moment</StatusMessage>;
    }

    return (
      <div className="mt-4 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {filteredBudgets.map((budget) => (
          <div key={budget.id} className="mx-auto w-full flex-1">
            <BudgetCard budget={budget} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-neutral text-3xl font-bold">Budgets</h1>
      <div className="flex justify-end gap-4">
        <BudgetModal />
      </div>
      <div className="mt-8 flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:gap-y-0">
        <div className="sm:w-1/3">
          <InputField
            id="search-budget"
            label=""
            name="search-budget"
            placeholder="Rechercher..."
            value={searchValue}
            onChange={handleChange}
          />
        </div>
        <InputField
          id="from-date"
          label="Période"
          type="month"
          name="period-date"
          value={period}
          placeholder="Période"
          onChange={handlePeriodChange}
        />
      </div>
      {display()}
    </div>
  );
}
