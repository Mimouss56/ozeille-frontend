import { PencilIcon, TagIcon } from "@phosphor-icons/react";

import { Button } from "../../components/Button/Button";
import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { InputField } from "../../components/Form/InputField/InputField";
import { CategoryCard } from "../../components/Widgets/CategoryCard/CategoryCard";
import { EmptyCard } from "../../components/Widgets/EmptyCard/EmptyCard";
import { useCategory } from "./useCategory";

export const CategoryPage = () => {
  const { categories, handleCreate, isEditModalOpen, closeModal, selectedCategory, handlePeriodChange, period } =
    useCategory();

  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-neutral text-2xl font-bold">Gestion des catégories</h1>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <div className="flex justify-end gap-4">
          <Button onClick={handleCreate} icon={PencilIcon}>
            Nouvelle Catégorie
          </Button>
        </div>
        <div className="sm:w-1/3">
          <InputField
            id="from-date"
            label="Période"
            type="month"
            name="period-date"
            value={period}
            placeholder="Période"
            onChange={handlePeriodChange}
          />
        </div>
      </div>

      {categories.length === 0 && (
        <EmptyCard icon={TagIcon} label="Aucune catégorie" subtitle="Ajouter une nouvelle catégorie" />
      )}
      {/* --- SECTION 2 : BUDGETS (DÉPENSES) --- */}
      <section className="flex flex-col gap-4">
        <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="mx-auto w-full flex-1">
              <CategoryCard key={cat.id} category={cat} />
            </div>
          ))}
        </div>
      </section>

      {isEditModalOpen && <CategoryModal category={selectedCategory} onClose={closeModal} />}
    </div>
  );
};
