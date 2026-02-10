import { PencilIcon, SpinnerIcon } from "@phosphor-icons/react";

import { BudgetModal } from "../../components/BudgetModal/BudgetModal";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import { StatusMessage } from "../../components/StatusMessage/StatusMessage";
import { BudgetCard } from "../../components/Widgets/BudgetCard/BudgetCard";
import { IncomeCard } from "../../components/Widgets/IncomeCard/IncomeCard";
import { useBudgetPage } from "./useBudgetPage";

export function BudgetPage() {
  const {
    searchValue,
    period,
    filteredBudgets,
    incomeCategories,
    loading,
    handleChange,
    handlePeriodChange,
    handleCreate,
    handleEdit,
    isEditModalOpen,
    closeModal,
    selectedBudget,
  } = useBudgetPage();

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="animate-spin">
          <SpinnerIcon size={32} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-neutral text-2xl font-bold">Budgets</h1>
      <div className="flex justify-end gap-4">
        <Button onClick={handleCreate} icon={PencilIcon}>
          Nouveau Budget
        </Button>
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

      {/* --- SECTION 1 : REVENUS (INCOME) --- */}
      <section className="mt-4 flex w-full flex-col gap-4 lg:justify-center">
        <IncomeCard categories={incomeCategories} />
      </section>

      {/* --- SECTION 2 : BUDGETS (DÉPENSES) --- */}
      <section className="flex flex-col gap-4">
        {filteredBudgets.length === 0 ? (
          <StatusMessage variant="default">Aucun budget à afficher pour le moment</StatusMessage>
        ) : (
          <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {filteredBudgets.map((budget) => (
              <div key={budget.id} className="mx-auto w-full flex-1">
                <BudgetCard budget={budget} onEditBudget={handleEdit} />
              </div>
            ))}
          </div>
        )}
      </section>
      {isEditModalOpen && <BudgetModal budget={selectedBudget} onClose={closeModal} />}
    </div>
  );
}
