// BudgetCard.tsx
import { type VariantProps, cva } from "class-variance-authority";

import { ActionMenu } from "../ActionMenu/ActionMenu";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { BudgetCardStatus } from "./BudgetCard.utils";
import { useBudgetCardStatus } from "./hook";

// Définition des variantes de style avec cva
const budgetCardStyle = cva(["card bg-base-100 min-h-[282.5px] w-full rounded-md border sm:min-h-82.5 lg:mx-auto"], {
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
  id: string;
  label: string;
  color: string;
  currentAmount: number;
  limitAmount: number;
  categories: CategoryItem[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onEditBudget?: (id: string) => void;
};

// Optimisation : création de l'instance Intl.NumberFormat une seule fois
const compactNumberFormatter = new Intl.NumberFormat("fr-FR", {
  notation: "compact",
  compactDisplay: "short",
});

const formatCompact = (current: number, limit: number): string => {
  const currentStr = compactNumberFormatter.format(current);
  const limitStr = compactNumberFormatter.format(limit);
  return `${currentStr} / ${limitStr}`;
};

export const BudgetCard: React.FC<BudgetCardProps> = ({
  id,
  label,
  color,
  currentAmount,
  limitAmount,
  categories,
  onEdit,
  onDelete,
  onEditBudget,
}) => {
  const { globalStatus, menuActions, categoriesStatus } = useBudgetCardStatus(currentAmount, limitAmount, categories, {
    id,
    onEdit,
    onDelete,
    onEditBudget,
  });

  return (
    <div className={budgetCardStyle({ status: globalStatus })}>
      <div className="card-body">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full shadow-sm" style={{ backgroundColor: color }} />
            <h2 className="card-title text-neutral truncate text-xl font-extrabold" title={label}>
              {label}
            </h2>
          </div>

          <ActionMenu actions={menuActions} />
        </div>

        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex-1">
            <ProgressBar value={currentAmount} max={limitAmount} color={globalStatus} className="h-2.5" />
          </div>
          <div className="text-neutral w-fit text-right text-sm font-semibold">
            {formatCompact(currentAmount, limitAmount)}
          </div>
        </div>

        <hr className="bg-base-300 mb-5 h-px w-full border-none" />

        <div className="flex flex-col gap-4">
          {categories.map((category) => {
            const catStatus = categoriesStatus.find((c) => c.id === category.id)?.status ?? globalStatus;

            return (
              <div key={category.id} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm">
                <span className="text-neutral truncate text-base font-medium" title={category.label}>
                  {category.label}
                </span>

                <span className="text-neutral text-right font-medium whitespace-nowrap">
                  {formatCompact(category.currentAmount, category.limitAmount)}
                </span>

                <div className="col-span-2">
                  <ProgressBar
                    value={category.currentAmount}
                    max={category.limitAmount}
                    color={catStatus}
                    className="h-2"
                  />
                </div>
              </div>
            );
          })}

          {categories.length === 0 && (
            <p className="text-neutral/40 py-2 text-center text-sm italic">Aucune catégorie</p>
          )}
        </div>
      </div>
    </div>
  );
};
