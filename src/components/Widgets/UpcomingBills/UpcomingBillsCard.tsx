import { BellRingingIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { type VariantProps, cva } from "class-variance-authority";

import type { Budget } from "../../../api/budgets";
import { Dot } from "../../Pastille/Dot";
import { useUpcomingBills } from "./useUpcomingBills";

// 1. Variantes de style (Cohérence Dashboard)
const upcomingCardStyle = cva(
  "card bg-base-100 border flex flex-col gap-4 rounded-2xl p-5 shadow-sm transition-all hover:shadow-md",
  {
    variants: {
      status: {
        neutral: "border-base-200",
        warning: "border-warning", // Orange car "Attention, c'est à payer"
        success: "border-success", // Vert quand tout est payé
      },
    },
    defaultVariants: {
      status: "neutral",
    },
  },
);

export type UpcomingCardVariants = VariantProps<typeof upcomingCardStyle>;

interface UpcomingBillsCardProps extends UpcomingCardVariants {
  budgets: Budget[];
}

export const UpcomingBillsCard = ({ budgets, status }: UpcomingBillsCardProps) => {
  const { data } = useUpcomingBills(budgets);

  // Si aucune facture en attente : État "Tout est ok"
  if (data.bills.length === 0) {
    return (
      <div className={upcomingCardStyle({ status: "success" })}>
        <div className="flex h-full flex-col items-center justify-center gap-3 py-6 text-center">
          <div className="bg-success/10 text-success rounded-full p-3">
            <CheckCircleIcon size={32} weight="duotone" />
          </div>
          <div>
            <h3 className="text-neutral text-sm font-semibold">À jour !</h3>
            <p className="text-neutral/50 text-xs">Aucune charge en attente.</p>
          </div>
        </div>
      </div>
    );
  }

  // Sinon : Liste des factures
  // On force le status 'warning' (orange) s'il n'est pas fourni, pour attirer l'attention
  const computedStatus = status || "warning";

  return (
    <div className={upcomingCardStyle({ status: computedStatus })}>
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-neutral/60 flex items-center gap-2 text-sm font-medium">
            <span className="bg-warning/10 text-warning flex h-6 w-6 items-center justify-center rounded-full">
              <BellRingingIcon size={14} weight="bold" />
            </span>{" "}
            Reste à payer
          </span>
          <h2 className="text-neutral mt-1 text-3xl font-bold tracking-tight">-{data.totalFormatted}</h2>
        </div>
      </div>

      <hr className="border-base-200" />

      {/* LISTE SCROLLABLE (max 3-4 items) */}
      <div className="flex flex-col gap-3 overflow-y-auto pr-1" style={{ maxHeight: "160px" }}>
        {data.bills.map((bill) => (
          <div key={bill.id} className="group flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Dot color={bill.color || "var(--color-warning)"} className="h-2 w-2 rounded-full" />
              <div className="flex flex-col">
                <span className="text-neutral/80 text-sm font-medium">{bill.label}</span>
                <span className="text-neutral/40 text-[10px] uppercase">{bill.budgetName}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-neutral block text-sm font-bold">{bill.formattedAmount}</span>
              <span className="text-neutral/40 text-[10px] font-medium">ESTIMÉ</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
