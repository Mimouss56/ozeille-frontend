import { PiggyBankIcon } from "@phosphor-icons/react";
import { PencilSimple, Trash } from "phosphor-react";

import { ActionMenu, type MenuAction } from "../ActionMenu/ActionMenu";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export type BudgetCardProps = {
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

export type CategoryItem = {
  id: string;
  label: string;
  currentAmount: number;
  limitAmount: number;
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
  const menuActions: MenuAction[] = [
    {
      label: "Ajouter transaction",
      icon: <PiggyBankIcon size={16} />,
      onClick: () => onEdit?.(id),
    },
    {
      label: "Éditer budget",
      icon: <PencilSimple size={16} />,
      onClick: () => onEditBudget?.(id),
    },
    {
      label: "Supprimer",
      icon: <Trash size={16} />,
      variant: "danger",
      onClick: () => onDelete?.(id),
    },
  ];

  type StatusColor = "neutral" | "success" | "warning" | "error";

  const getStatusColor = (current: number, max: number): StatusColor => {
    if (current === 0) return "neutral"; // 0/max
    if (current > max) return "error"; // Dépassé
    if (current === max) return "warning"; // À la limite
    return "success"; // En dessous de la limite
  };

  const globalStatus = getStatusColor(currentAmount, limitAmount);

  const formatCompact = (current: number, limit: number): string => {
    const currentStr = new Intl.NumberFormat("fr-FR", {
      notation: "compact",
      compactDisplay: "short",
    }).format(current);

    const limitStr = new Intl.NumberFormat("fr-FR", {
      notation: "compact",
      compactDisplay: "short",
    }).format(limit);

    return `${currentStr} / ${limitStr}`;
  };

  return (
    <div className="card bg-base-100 min-h-[282.5px] w-full rounded-md border sm:min-h-82.5 lg:mx-auto">
      <div className="card-body">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full shadow-sm" style={{ backgroundColor: color }} />
            <h2 className="card-title text-neutral text-xl font-extrabold">{label}</h2>
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

        <div className="bg-base-300 mb-5 h-px w-full"></div>

        <div className="flex flex-col gap-4">
          {categories.map((category) => {
            const catStatus = getStatusColor(category.currentAmount, category.limitAmount);

            return (
              <div key={category.id} className="grid grid-cols-[100px_1fr_min-content] items-center gap-4 px-1 text-sm">
                <span className="text-neutral truncate text-base font-medium" title={category.label}>
                  {category.label}
                </span>

                <ProgressBar
                  value={category.currentAmount}
                  max={category.limitAmount}
                  color={catStatus}
                  className="h-2"
                />

                <span className="text-neutral text-right font-medium whitespace-nowrap">
                  {formatCompact(category.currentAmount, category.limitAmount)}
                </span>
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
