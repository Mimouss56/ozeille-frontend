import type { Category } from "../../../api/categories";

// La carte de catégorie (le "Master")
export const CategoryCard = ({ category, onClick }: { category: Category; onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-2xl border border-transparent bg-white p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-100 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gray-50 p-2.5">{category.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800">{category.label}</h3>
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-900">{category.amount}</p>
        <p className="text-sm text-gray-400">Monthly Total</p>
      </div>

      {/* Faux graphique sparkline pour l'exemple "Food" */}
      {category.hasChart && (
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
    </div>
  );
};
