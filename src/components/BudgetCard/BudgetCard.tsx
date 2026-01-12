import { DotsThreeOutline, PencilSimple, Trash } from "phosphor-react";
import type { BudgetCardProps } from "../../cores/props/BudgetCardProps";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ActionMenu, type MenuAction } from "../ActionMenu/ActionMenu";

type StatusColor = "neutral" | "success" | "warning" | "error";

const getStatusColor = (current: number, max: number): StatusColor => {
  if (current === 0) return "neutral"; // 0/max 
  if (current > max) return "error"; // Dépassé
  if (current === max) return "warning"; // À la limite
  return "success"; // En dessous de la limite
};

export const BudgetCard: React.FC<BudgetCardProps> = ({
  id,
  label,
  color,
  currentAmount,
  limitAmount,
  categories,
  onEdit,
  onDelete
}) => {
  const globalStatus = getStatusColor(currentAmount, limitAmount);

  const menuActions: MenuAction[] = [
    {
      label: "Modifier",
      icon: <PencilSimple size={16} />,
      onClick: () => onEdit?.(id),
    },
    {
      label: "Supprimer",
      icon: <Trash size={16} />,
      variant: "danger",
      onClick: () => onDelete?.(id),
    },
  ];

  return (
    <div className="card w-[500px] bg-base-100 border border-base-300 shadow-sm rounded-lg">
      <div className="card-body p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="h-5 w-5 rounded-full shadow-sm"
              style={{ backgroundColor: color }}
            />
            <h2 className="card-title text-xl font-extrabold text-neutral">{label}</h2>
          </div>
          
          <ActionMenu actions={menuActions} />
        </div>

        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex-1">
            <ProgressBar
              value={currentAmount}
              max={limitAmount}
              color={globalStatus}
              className="h-2.5"
            />
          </div>
          <div className="text-right text-sm font-semibold text-neutral w-20">
            {currentAmount} / {limitAmount}
          </div>
        </div>

        <div className="h-px bg-base-300 w-full mb-5"></div>

        <div className="flex flex-col gap-4">
          {categories.map((category) => {
            const catStatus = getStatusColor(category.currentAmount, category.limitAmount);
            
            return (
              <div key={category.id} className="grid grid-cols-[100px_1fr_60px] items-center gap-4 text-sm">
                <span className="truncate font-medium text-neutral text-base" title={category.label}>
                  {category.label}
                </span>

                <ProgressBar
                  value={category.currentAmount}
                  max={category.limitAmount}
                  color={catStatus}
                  className="h-2" 
                />

                <span className="text-right font-medium text-neutral">
                  {category.currentAmount} / {category.limitAmount}
                </span>
              </div>
            );
          })}
          
          {categories.length === 0 && (
            <p className="text-center text-sm text-neutral/40 italic py-2">Aucune catégorie</p>
          )}
        </div>
      </div>
    </div>
  );
};