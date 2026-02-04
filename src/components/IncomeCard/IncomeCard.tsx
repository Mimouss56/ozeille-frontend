import { TrendUpIcon, WalletIcon } from "@phosphor-icons/react";

import type { Category } from "../../api/categories";
import { useIncomeCard } from "./useIncomeCard";

interface IncomeCardProps {
  categories: Category[];
}

export const IncomeCard = ({ categories }: IncomeCardProps) => {
  const { data } = useIncomeCard(categories);

  // Si aucun revenu n'est configuré, on affiche un état vide incitatif
  if (data.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 text-center">
        <div className="rounded-full bg-green-100 p-3 text-green-600">
          <WalletIcon size={32} weight="duotone" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Aucun revenu</h3>
          <p className="text-xs text-gray-500">Ajoutez votre salaire ou vos primes.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      {/* HEADER : Total */}
      <div className="flex items-start justify-between">
        <div>
          <span className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
              <TrendUpIcon size={14} weight="bold" />
            </span>
            Revenus du mois
          </span>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">{data.totalFormatted}</h2>
        </div>

        {/* Bouton d'action rapide (optionnel) */}
        {/* {onAddIncome && <Button style="ghost" size="sm" icon={TrendUpIcon} onClick={onAddIncome} />} */}
      </div>

      <hr className="border-gray-100" />

      {/* LISTE : Détails */}
      <div className="flex flex-col gap-3">
        {data.items.map((item) => (
          <div key={item.id} className="group flex cursor-default items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Pastille couleur */}
              <div
                className="h-2 w-2 rounded-full shadow-sm ring-2 ring-white"
                style={{ backgroundColor: item.color || "#10B981" }}
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
            </div>
            <span className="rounded-md bg-green-50 px-2 py-0.5 text-sm font-semibold text-green-600">
              +{item.formattedAmount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
