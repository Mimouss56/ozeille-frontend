import { useMemo } from "react";

import type { Budget } from "../../../api/budgets";

export function useUpcomingBills(budgets: Budget[]) {
  const formatter = useMemo(() => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });
  }, []);

  const data = useMemo(() => {
    if (!budgets) return { bills: [], totalPending: 0, totalFormatted: "0 €" };

    // 1. On récupère toutes les catégories de dépenses de tous les budgets
    const allCategories = budgets
      .flatMap((budget) => budget.categories ?? [])
      .filter((categories) => categories.type !== "INCOME");

    // 2. On filtre celles qui sont des "Charges Fixes non payées"
    // Critère : Plafond > 0 ET Dépensé quasi nul (< 1€)
    const pending = allCategories.filter((cat) => {
      const spent = (cat.transactions ?? []).reduce((sum, t) => sum + Math.abs(Number(t.amount)), 0);
      const limit = Number(cat.limitAmount) || 0;

      // C'est une facture à venir si on a un budget prévu mais qu'on a rien payé
      return limit > 0 && spent < 1;
    });

    // 3. Calculs totaux
    const totalPending = pending.reduce((sum, c) => sum + Number(c.limitAmount), 0);

    // 4. Formatage pour l'affichage
    const bills = pending.map((cat) => ({
      id: cat.id,
      label: cat.label,
      amount: Number(cat.limitAmount),
      formattedAmount: formatter.format(Number(cat.limitAmount)),
      color: cat.color,
      budgetName: budgets.find((b) => b.id === cat.budgetId)?.label,
    }));

    return {
      bills,
      totalPending,
      totalFormatted: formatter.format(totalPending),
    };
  }, [budgets, formatter]);

  return { data };
}
