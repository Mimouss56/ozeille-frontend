import { PiggyBankIcon, TrendUpIcon } from "@phosphor-icons/react";
import { type VariantProps, cva } from "class-variance-authority";

import type { Category } from "../../api/categories";
import { EmptyBudget } from "../EmptyBudget/EmptyBudget";
import { Dot } from "../Pastille/Dot";
import { useIncomeCard } from "./useIncomeCard";

// 1. Définition des status possibles (comme pour BudgetCard)
export const IncomeCardStatus = {
  Neutral: "neutral",
  Success: "success",
} as const;

export type IncomeCardStatus = (typeof IncomeCardStatus)[keyof typeof IncomeCardStatus];

// 2. Définition des styles avec CVA
const incomeCardStyle = cva(
  // Base classes : card structure, background, border base, shadow
  "card bg-base-100 border flex flex-col gap-4 rounded-2xl p-5 shadow-sm transition-all hover:shadow-md",
  {
    variants: {
      status: {
        // Neutral : Bordure standard du thème (gris clair / gris foncé selon le mode)
        [IncomeCardStatus.Neutral]: "border-base-200",
        // Success : Bordure verte (optionnel, si on veut mettre en avant le card)
        [IncomeCardStatus.Success]: "border-success",
      },
    },
    defaultVariants: {
      status: IncomeCardStatus.Neutral,
    },
  },
);

// 3. Types pour les props
export type IncomeCardVariants = VariantProps<typeof incomeCardStyle>;

interface IncomeCardProps extends IncomeCardVariants {
  categories: Category[];
}

export const IncomeCard = ({ categories, status: propStatus }: IncomeCardProps) => {
  const { data } = useIncomeCard(categories);

  // Si aucun revenu, on affiche le composant vide
  if (data.items.length === 0) {
    return <EmptyBudget icon={PiggyBankIcon} label="Aucun revenu" subtitle="Ajoutez votre salaire ou vos primes." />;
  }

  // Calcul du status dynamique :
  // Si on a des revenus (> 0), on peut passer en mode "Success" ou rester "Neutral".
  // Ici, je force 'Neutral' par défaut pour ne pas être trop agressif visuellement,
  // mais vous pouvez mettre `data.totalRaw > 0 ? IncomeCardStatus.Success : ...`
  const computedStatus = propStatus || IncomeCardStatus.Neutral;

  return (
    <div className={incomeCardStyle({ status: computedStatus })}>
      {/* HEADER : Total */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-neutral/60 flex items-center gap-2 text-sm font-medium">
            <span className="bg-success/10 text-success flex h-6 w-6 items-center justify-center rounded-full">
              <TrendUpIcon size={14} weight="bold" />
            </span>
            Revenus du mois
          </span>
          <h2 className="text-neutral mt-1 text-3xl font-bold tracking-tight">{data.totalFormatted}</h2>
        </div>
      </div>

      <hr className="border-base-200" />

      {/* LISTE : Détails */}
      <div className="flex flex-col gap-3">
        {data.items.map((item) => (
          <div key={item.id} className="group flex cursor-default items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Pastille couleur */}
              <Dot
                color={item.color || "var(--color-success)"}
                className="ring-base-100 h-2 w-2 rounded-full shadow-sm ring-2"
              />
              <span className="text-neutral/70 group-hover:text-neutral text-sm font-medium transition-colors">
                {item.label}
              </span>
            </div>
            {/* Badge montant */}
            <span className="bg-success/10 text-success rounded-md px-2 py-0.5 text-sm font-semibold">
              +{item.formattedAmount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
