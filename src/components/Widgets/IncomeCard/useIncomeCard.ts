import { useMemo } from "react";

import type { Category } from "../../../api/categories";

export function useIncomeCard(categories: Category[]) {
  const formatter = useMemo(() => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });
  }, []);

  const data = useMemo(() => {
    const incomeCategories = categories.filter((c) => c.type === "INCOME");

    const items = incomeCategories.map((cat) => {
      const total = (cat.transactions ?? []).reduce((sum, t) => sum + Number(t.amount), 0);

      return {
        id: cat.id,
        label: cat.label,
        color: cat.color,
        amount: total,
        formattedAmount: formatter.format(total),
      };
    });

    // 3. Calcul du Grand Total
    const totalIncome = items.reduce((sum, item) => sum + item.amount, 0);

    return {
      totalRaw: totalIncome,
      totalFormatted: formatter.format(totalIncome),
      items,
    };
  }, [categories, formatter]);

  return { data };
}
