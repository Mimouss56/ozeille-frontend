import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { useMemo } from "react";

import type { MonthlySummary } from "../../../../api/budgets";

// Enregistrement des composants ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface UseFinanceChartProps {
  monthlySummaries: MonthlySummary[];
  loading?: boolean;
}

export function useFinanceChart({ monthlySummaries, loading = false }: UseFinanceChartProps) {
  dayjs.locale("fr");

  // --- TRANSFORMATION DES DONNÉES ---
  const chartData = useMemo(() => {
    // Trier les monthlySummaries par mois (ordre chronologique)
    const sortedData = [...monthlySummaries].sort((a, b) => a.month.localeCompare(b.month));

    const months: string[] = [];
    const incomes: number[] = [];
    const expenses: number[] = [];

    sortedData.forEach((summary) => {
      // Format YYYY-MM -> "Jan 26", "Fév 26"
      const monthLabel = dayjs(summary.month, "YYYY-MM").format("MMM YY");
      months.push(monthLabel);
      incomes.push(summary.totalIncome);
      expenses.push(summary.totalExpenses);
    });

    return {
      labels: months,
      datasets: [
        {
          label: "Revenus",
          data: incomes,
          borderColor: "#10B981", // Success (Vert)
          backgroundColor: "#10B981",
          tension: 0.3, // Courbe lissée
        },
        {
          label: "Dépenses",
          data: expenses,
          borderColor: "#EF4444", // Error (Rouge)
          backgroundColor: "#EF4444",
          tension: 0.3,
        },
      ],
    };
  }, [monthlySummaries]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "#f3f4f6", // gray-100
        },
        ticks: {
          font: { size: 10 },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return { chartData, options, loading };
}
