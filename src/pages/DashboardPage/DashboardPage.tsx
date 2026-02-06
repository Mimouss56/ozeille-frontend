import { InputField } from "../../components/InputField/InputField";
import { OzeilleLoader } from "../../components/Loader/OzeilleLoader";
import { BalanceCard } from "../../components/Widgets/BalanceCard/BalanceCard";
import { FinanceChart } from "../../components/Widgets/Charts/FinanceCharts/FinanceChart";
import { IncomeCard } from "../../components/Widgets/IncomeCard/IncomeCard";
import { UpcomingBillsCard } from "../../components/Widgets/UpcomingBills/UpcomingBillsCard";
import { useDashboardPage } from "./useDashboardPage";

export const DashboardPage = () => {
  const {
    period,
    loading,
    handlePeriodChange,
    incomeCategories,
    expenseBudgets,
    totalIncome,
    totalExpenses,
    monthlySummaries,
  } = useDashboardPage();

  if (loading) return <OzeilleLoader />;

  return (
    <div className="flex h-full flex-col gap-8 pb-10">
      {/* HEADER */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-neutral text-2xl font-bold">Vue d&apos;ensemble</h1>
          <p className="text-neutral/50 text-sm">Bienvenue sur O&apos;Zeille. Voici votre situation financière.</p>
        </div>

        <div className="w-40">
          <InputField
            id="dashboard-period"
            label="Période"
            name="period"
            type="month"
            value={period}
            onChange={handlePeriodChange}
            size="sm"
            placeholder=""
          />
        </div>
      </header>

      <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <IncomeCard categories={incomeCategories} />
        <UpcomingBillsCard budgets={expenseBudgets} />
        <BalanceCard totalIncome={totalIncome} totalExpenses={totalExpenses} />
      </section>

      {/* SECTION 2 : ANALYSE (Graphique) */}
      <section className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Le graphique prend 2 colonnes sur grand écran */}
        <div className="lg:col-span-2">
          <FinanceChart monthlySummaries={monthlySummaries} loading={loading} />
        </div>
      </section>
    </div>
  );
};
