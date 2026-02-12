import { createElement } from "react";

/**
 * Options de formatage pour les colonnes monétaires
 */
export interface CurrencyOptions {
  /** Symbole de devise (défaut: "€") */
  currency?: string;
  /** Nombre de décimales (défaut: 2) */
  decimals?: number;
  /** Position de la devise: "after" | "before" (défaut: "after") */
  currencyPosition?: "after" | "before";
}

export const DEFAULT_CURRENCY_OPTIONS = {
  currency: "€",
  decimals: 2,
  currencyPosition: "after",
} as const;

export function formatAmountWithColor(amount: number, options: CurrencyOptions = {}) {
  const { currency, decimals, currencyPosition } = { ...DEFAULT_CURRENCY_OPTIONS, ...options };

  const formattedValue = amount.toFixed(decimals);

  const text = currencyPosition === "after" ? `${formattedValue} ${currency}` : `${currency} ${formattedValue}`;

  const colorClass = amount > 0 ? "text-green-600" : "text-red-600";
  const className = `${colorClass} font-medium`;

  return createElement("span", { className }, text);
}
