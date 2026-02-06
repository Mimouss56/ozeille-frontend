import { ScalesIcon, TrendDownIcon, TrendUpIcon } from "@phosphor-icons/react";
import { type VariantProps, cva } from "class-variance-authority";

import { useBalanceCard } from "./useBalanceCard";

export const BalanceCardStatus = {
  Neutral: "neutral",
  Success: "success",
  Error: "error",
} as const;

export type BalanceCardStatus = (typeof BalanceCardStatus)[keyof typeof BalanceCardStatus];

const balanceCardStyle = cva(
  "card bg-base-100 border flex flex-col gap-4 rounded-2xl p-5 shadow-sm transition-all hover:shadow-md",
  {
    variants: {
      status: {
        [BalanceCardStatus.Neutral]: "border-base-200",
        [BalanceCardStatus.Success]: "border-success",
        [BalanceCardStatus.Error]: "border-error",
      },
    },
    defaultVariants: {
      status: BalanceCardStatus.Neutral,
    },
  },
);

export type BalanceCardVariants = VariantProps<typeof balanceCardStyle>;

interface BalanceCardProps extends BalanceCardVariants {
  totalIncome: number;
  totalExpenses: number;
}

export const BalanceCard = ({ totalIncome, totalExpenses, status: propStatus }: BalanceCardProps) => {
  const { data } = useBalanceCard({ totalIncome, totalExpenses });

  // 3. Calcul automatique du statut si non fourni
  const computedStatus = propStatus || (data.isPositive ? BalanceCardStatus.Success : BalanceCardStatus.Error);

  const Icon = data.isPositive ? TrendUpIcon : TrendDownIcon;
  const colorClass = data.isPositive ? "text-success" : "text-error";
  const bgClass = data.isPositive ? "bg-success/10" : "bg-error/10";
  const barColor = data.isPositive ? "bg-success" : "bg-error";

  return (
    // Application du style CVA avec le statut calculé
    <div className={balanceCardStyle({ status: computedStatus })}>
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-neutral/60 flex items-center gap-2 text-sm font-medium">
            <span className={`${bgClass} ${colorClass} flex h-6 w-6 items-center justify-center rounded-full`}>
              <ScalesIcon size={14} weight="bold" />
            </span>{" "}
            Reste à vivre
          </span>

          {/* Montant + Indicateur de tendance */}
          <div className="mt-1 flex items-center gap-2">
            <Icon size={28} weight="duotone" className={colorClass} />
            <h2 className={`text-3xl font-bold tracking-tight ${colorClass}`}>
              {data.isPositive ? "+" : ""}
              {data.balanceFormatted}
            </h2>
          </div>
        </div>
      </div>

      <hr className="border-base-200" />

      <div className="flex flex-col gap-3">
        {/* Barre de progression */}
        <div className="bg-base-200 h-2 w-full overflow-hidden rounded-full">
          <div
            className={`h-full rounded-full transition-all duration-500 ${barColor}`}
            style={{ width: `${Math.min(data.usagePercentage, 100)}%` }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <div className="flex flex-col">
            <span className="text-neutral/50 text-xs">Entrées</span>
            <span className="text-neutral font-semibold">{data.incomeFormatted}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-neutral/50 text-xs">Sorties Prévues</span>
            <span className="text-neutral font-semibold">{data.expensesFormatted}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
