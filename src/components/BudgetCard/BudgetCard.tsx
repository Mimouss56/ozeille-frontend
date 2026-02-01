import { type VariantProps, cva } from "class-variance-authority";

import type { Budget } from "../../api/budgets";
import { ActionMenu } from "../ActionMenu/ActionMenu";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { BudgetCardStatus, formatCompact, transformBudget } from "./BudgetCard.utils";
import { BudgetDot } from "./BudgetDot";
import { useBudgetCard } from "./useBudgetCard";
import { useBudgetCardStatus } from "./useBudgetSatus";

// Définition des variantes de style avec cva
const budgetCardStyle = cva(["card bg-base-100 w-full rounded-md border lg:mx-auto"], {
  variants: {
    status: {
      [BudgetCardStatus.Neutral]: "border-neutral",
      [BudgetCardStatus.Success]: "border-success",
      [BudgetCardStatus.Warning]: "border-warning",
      [BudgetCardStatus.Error]: "border-error",
    },
  },
  defaultVariants: {
    status: BudgetCardStatus.Neutral,
  },
});

export type BudgetCardVariants = VariantProps<typeof budgetCardStyle>;

export type CategoryItem = {
  id: string;
  label: string;
  currentAmount: number;
  limitAmount: number;
};

// Le statut est calculé, on l'exclut donc des props à fournir
export type BudgetCardProps = Omit<BudgetCardVariants, "status"> & {
  budget: Budget;
};

export const BudgetCard: React.FC<BudgetCardProps> = ({ budget }) => {
  const transformedBudget = transformBudget(budget);
  // const { id, categories, color, label } = budget;
  const { globalStatus, categoriesStatus } = useBudgetCardStatus(
    transformedBudget.currentAmount,
    transformedBudget.limitAmount,
    transformedBudget.categories,
  );
  const { menuActions } = useBudgetCard({
    id: budget.id,
    budget,
    onEditTransaction(id: string) {
      console.log("(ouverture modal) Ajout transaction pour le budget avec id :", id);
    },
  });

  return (
    <div className={budgetCardStyle({ status: globalStatus })}>
      <div className="card-body p-4! shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-3">
            <BudgetDot color={transformedBudget.color} />
            <h2
              className="card-title text-neutral text-md truncate font-extrabold sm:text-xl"
              title={transformedBudget.label}>
              {transformedBudget.label}
            </h2>
          </div>

          <ActionMenu actions={menuActions} />
        </div>

        <div className="mb-5 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex-1">
            <ProgressBar
              value={transformedBudget.currentAmount}
              max={transformedBudget.limitAmount}
              color={globalStatus}
              className="h-2.5"
            />
          </div>
          <div className="text-neutral w-fit text-right text-sm font-semibold">
            {formatCompact(transformedBudget.currentAmount, transformedBudget.limitAmount)}
          </div>
        </div>

        <hr className="bg-base-300 mb-5 h-px w-full border-none" />

        <div className="flex flex-col gap-4">
          {transformedBudget.categories.map((category) => {
            const catStatus = categoriesStatus.find((c) => c.id === category.id)?.status ?? globalStatus;

            return (
              <div key={category.id} className="flex items-center justify-between gap-x-4 gap-y-1 text-sm">
                <span className="text-neutral w-2/3 truncate text-base font-medium" title={category.label}>
                  {category.label}
                </span>

                <ProgressBar
                  value={category.currentAmount}
                  max={category.limitAmount}
                  color={catStatus}
                  className="h-2"
                />

                <span className="text-neutral w-1/3 text-right font-medium whitespace-nowrap">
                  {formatCompact(category.currentAmount, category.limitAmount)}
                </span>
              </div>
            );
          })}

          {transformedBudget.categories.length === 0 && (
            <p className="text-neutral/40 py-2 text-center text-sm italic">Aucune catégorie</p>
          )}
        </div>
      </div>
    </div>
  );
};
