import { type VariantProps, cva } from "class-variance-authority";

import type { Budget } from "../../api/budgets";
import { ActionMenu } from "../ActionMenu/ActionMenu";
import { Dot } from "../Pastille/Dot";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useBudgetCard } from "./useBudgetCard";

export const BudgetCardStatus = {
  Neutral: "neutral",
  Success: "success",
  Warning: "warning",
  Error: "error",
} as const;

export type BudgetCardStatus = (typeof BudgetCardStatus)[keyof typeof BudgetCardStatus];
// Définition des variantes de style avec cva
const budgetCardStyle = cva(["card bg-base-100 w-full rounded-md border lg:mx-auto transition-all"], {
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
  onEditBudget?: (budget: Budget) => void;
};

export const BudgetCard: React.FC<BudgetCardProps> = ({ budget, onEditBudget }) => {
  // eslint-disable-next-line prettier/prettier
  const {
    menuActions,
    globalStatus,
    categoriesStatus,
    formattedBudget
  } = useBudgetCard({ budget, onEditBudget });

  return (
    <div className={budgetCardStyle({ status: formattedBudget.globalStatus })}>
      <div className="card-body p-4! shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Dot color={formattedBudget.color} />
            <h2
              className="card-title text-neutral text-md truncate font-extrabold sm:text-xl"
              title={formattedBudget.label}>
              {formattedBudget.label}
            </h2>
          </div>
          <ActionMenu actions={menuActions} />
        </div>

        <div className="mb-5 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex-1">
            <ProgressBar
              value={formattedBudget.currentAmount}
              max={formattedBudget.limitAmount}
              color={formattedBudget.globalStatus}
              className="h-2.5"
            />
          </div>
          <div className="text-neutral w-fit text-right text-sm font-semibold">{formattedBudget.ratio}</div>
        </div>

        <hr className="bg-base-300 mb-5 h-px w-full border-none" />

        <div className="flex flex-col gap-4">
          {formattedBudget.categories.map((category) => {
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

                <span className="text-neutral w-1/3 text-right font-medium whitespace-nowrap">{category.ratio}</span>
              </div>
            );
          })}

          {formattedBudget.categories.length === 0 && (
            <p className="text-neutral/40 py-2 text-center text-sm italic">Aucune catégorie</p>
          )}
        </div>
      </div>
    </div>
  );
};
