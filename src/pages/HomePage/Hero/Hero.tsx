import { ArrowRightIcon } from "@phosphor-icons/react";

import type { Category } from "../../../api/categories";
import { Button } from "../../../components/Button/Button";
import { BalanceCard, BalanceCardStatus } from "../../../components/Widgets/BalanceCard/BalanceCard";
import { IncomeCard } from "../../../components/Widgets/IncomeCard/IncomeCard";

export const Hero = () => {
  // Données fictives pour les composants du Hero
  const mockCategories: Category[] = [
    {
      id: "1",
      label: "Salaire",
      limitAmount: 1500,
      color: "#10b981",
      type: "INCOME",
      budgetId: "mockBudgetId1",
      userId: "mockUserId1",
      transactions: [
        {
          id: "1",
          amount: 1500,
          label: "Salaire de juin",
          dueAt: "2024-06-30T00:00:00.000Z",
          pointedAt: null,
          createdAt: "2024-06-01T12:00:00.000Z",
          updatedAt: "2024-06-01T12:00:00.000Z",
          frequencyId: "mockFrequencyId1",
          categoryId: "1",
          category: {
            id: "1",
            label: "Salaire",
            limitAmount: 1500,
            color: "#10b981",
            type: "INCOME",
            budgetId: "mockBudgetId1",
            userId: "mockUserId1",
          },
        },
      ],
    },
    {
      id: "2",
      label: "Ventes",
      limitAmount: 150,
      color: "#3b82f6",
      type: "INCOME",
      budgetId: "mockBudgetId2",
      userId: "mockUserId2",
      transactions: [
        {
          id: "2",
          amount: 150,
          label: "Vente de juin",
          dueAt: "2024-06-15T00:00:00.000Z",
          pointedAt: null,
          createdAt: "2024-06-01T12:00:00.000Z",
          updatedAt: "2024-06-01T12:00:00.000Z",
          frequencyId: "mockFrequencyId2",
          categoryId: "2",
          category: {
            id: "2",
            label: "Ventes",
            limitAmount: 75,
            color: "#3b82f6",
            type: "INCOME",
            budgetId: "mockBudgetId2",
            userId: "mockUserId2",
          },
        },
      ],
    },
  ];
  const totalItems = mockCategories.reduce(
    (sum, category) => sum + (category.transactions ? category.transactions.length : 0),
    0,
  );

  return (
    <section id="hero" className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-neutral mb-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            Maîtrisez vos finances en toute sérénité
          </h1>
          <p className="text-neutral/80 mb-8 text-xl font-normal">
            Une application moderne pour suivre, analyser et optimiser votre budget au quotidien. Simple, élégante et
            conçue pour vous.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {/* Utilisation de TON composant Button */}
            <Button size="lg" style="primary">
              Essayer gratuitement
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" style="outline">
              Voir la démo
            </Button>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="bg-base-200/50 border-base-200 relative rounded-2xl border p-8 shadow-xl">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="transform transition-transform hover:-translate-y-1">
                <BalanceCard totalIncome={totalItems} totalExpenses={1243} status={BalanceCardStatus.Success} />
              </div>

              <div className="hidden transform transition-transform hover:-translate-y-1 md:block">
                <IncomeCard categories={mockCategories} />
              </div>

              {/* Une 3ème carte fictive pour l'exemple (tu pourrais utiliser BudgetCard si tu as les mock datas) */}
              <div className="hidden transform transition-transform hover:-translate-y-1 lg:block">
                <BalanceCard totalIncome={4500} totalExpenses={4200} status={BalanceCardStatus.Error} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
