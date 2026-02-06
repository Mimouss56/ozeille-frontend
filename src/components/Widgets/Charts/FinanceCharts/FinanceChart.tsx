import { ChartLineUpIcon } from "@phosphor-icons/react";
import { cva } from "class-variance-authority";
import { Line } from "react-chartjs-2";

import type { MonthlySummary } from "../../../../api/budgets";
import { useFinanceChart } from "./useFinanceChart";

// Style cohérent avec les autres cartes
const chartCardStyle = cva(
  "card bg-base-100 border-base-200 flex flex-col gap-4 rounded-2xl border p-5 shadow-sm transition-all hover:shadow-md h-full",
);

interface FinanceChartProps {
  monthlySummaries?: MonthlySummary[];
  loading?: boolean;
}

export const FinanceChart = ({ monthlySummaries = [], loading = false }: FinanceChartProps) => {
  const { chartData, options } = useFinanceChart({ monthlySummaries, loading });

  return (
    <div className={chartCardStyle()}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-neutral/60 flex items-center gap-2 text-sm font-medium">
            <span className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full">
              <ChartLineUpIcon size={14} weight="bold" />
            </span>{" "}
            Évolution
          </span>
          <h2 className="text-neutral mt-1 text-lg font-bold">6 derniers mois</h2>
        </div>
      </div>

      <hr className="border-base-200" />

      {/* Graphique */}
      <div className="relative h-64 w-full">
        {loading ? (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">Chargement...</div>
        ) : (
          <Line options={options} data={chartData} />
        )}
      </div>
    </div>
  );
};
