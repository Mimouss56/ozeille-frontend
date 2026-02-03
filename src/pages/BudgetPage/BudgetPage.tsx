import { SpinnerIcon } from "@phosphor-icons/react";

import { BudgetCard } from "../../components/BudgetCard/BudgetCard";
import { BudgetModal } from "../../components/BudgetModal/BudgetModal";
import { InputField } from "../../components/InputField/InputField";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { useBudgetPage } from "./useBudgetPage";

export function BudgetPage() {
  const { searchValue, period, filteredBudgets, loading, handleChange, handlePeriodChange } = useBudgetPage();

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
      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="animate-spin">
            <SpinnerIcon size={32} />
          </div>
        </div>
      ) : filteredBudgets.length === 0 ? (
        <StatusMessage variant="default">Aucun budget à afficher pour le moment</StatusMessage>
      ) : (
        <div className="mt-4 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {filteredBudgets.map((budget) => (
            <div key={budget.id} className="mx-auto w-full flex-1">
              <BudgetCard budget={budget} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
