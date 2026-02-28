import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { type VariantProps, cva } from "class-variance-authority";
import { Doughnut } from "react-chartjs-2";

import type { Category } from "../../../api/categories";
import { Dot } from "../../Pastille/Dot";

Chart.register(ArcElement, Tooltip, Legend);

// Définition du style de la carte catégorie avec cva
const categoryCardStyle = cva([
  "relative cursor-pointer overflow-hidden rounded-2xl border border-transparent bg-white p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-100 hover:shadow-md",
  "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl min-w-[220px]",
]);

export type CategoryCardVariants = VariantProps<typeof categoryCardStyle>;

// La carte de catégorie (le "Master")
export const CategoryCard = ({
  category,
  onClick,
  className,
}: {
  category: Category;
  onClick?: () => void;
  className?: string;
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  // Préparation des données pour le doughnut si transactions présentes
  const hasTransactions = Array.isArray(category.transactions) && category.transactions.length > 0;
  let doughnutData, doughnutOptions;
  if (hasTransactions) {
    const transactions = category.transactions;
    doughnutData = {
      labels: transactions?.map((t) => t.label),
      datasets: [
        {
          data: transactions?.map((t) => Math.abs(Number(t.amount ?? 0))),
          backgroundColor: transactions?.map(
            (_t, i: number) => ["#60a5fa", "#f87171", "#fbbf24", "#34d399", "#a78bfa", "#f472b6"][i % 6],
          ),
          borderWidth: 1,
        },
      ],
    };
    doughnutOptions = {
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      cutout: "70%",
      responsive: true,
      maintainAspectRatio: false,
    };
  }

  return (
    <button onClick={onClick} onKeyDown={handleKeyDown} className={categoryCardStyle({ className })}>
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {category.color && <Dot color={category.color} />}
          <h3 className="text-lg font-semibold text-gray-800">{category.label}</h3>
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-900">{category.limitAmount}</p>
        <p className="text-sm text-gray-400">Monthly Total</p>
      </div>

      {/* Doughnut chart si transactions présentes */}
      {hasTransactions && doughnutData && doughnutOptions && (
        <div className="my-4 flex items-center justify-center" style={{ height: 120, width: 120, margin: "0 auto" }}>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      )}

      {/* Faux graphique sparkline pour l'exemple "Food" */}
      {!hasTransactions && (
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-12 opacity-50">
          <svg viewBox="0 0 200 40" className="h-full w-full" preserveAspectRatio="none">
            <path
              d="M0,30 C20,10 40,35 60,25 C80,15 100,30 120,20 C140,10 160,25 200,5 L200,40 L0,40 Z"
              fill="#ebf0ff"
            />
            <path
              d="M0,30 C20,10 40,35 60,25 C80,15 100,30 120,20 C140,10 160,25 200,5"
              fill="none"
              stroke="#a8c0ff"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </button>
  );
};
