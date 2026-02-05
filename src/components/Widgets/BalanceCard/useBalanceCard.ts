import { useMemo } from "react";

interface UseBalanceCardProps {
  totalIncome: number;
  totalExpenses: number;
}

export function useBalanceCard({ totalIncome, totalExpenses }: UseBalanceCardProps) {
  const formatter = useMemo(() => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 2,
    });
  }, []);

  const data = useMemo(() => {
    const balance = totalIncome - totalExpenses;
    const isPositive = balance >= 0;

    // Calcul du pourcentage d'utilisation (Dépenses / Revenus)
    // Si revenus = 0, on évite la division par zéro
    const usagePercentage = totalIncome > 0 ? Math.round((totalExpenses / totalIncome) * 100) : 0;

    return {
      balanceRaw: balance,
      balanceFormatted: formatter.format(balance),
      expensesFormatted: formatter.format(totalExpenses),
      incomeFormatted: formatter.format(totalIncome),
      isPositive,
      usagePercentage,
      status: isPositive ? "success" : "error",
    };
  }, [totalIncome, totalExpenses, formatter]);

  return { data };
}
