import { PencilIcon } from "@phosphor-icons/react";
import { TagIcon } from "@phosphor-icons/react";

import { Button } from "../../components/Button/Button";
import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { DataTable } from "../../components/Table/DataTable/DataTable";
import { CategoryCard } from "../../components/Widgets/CategoryCard/CategoryCard";
import { EmptyCard } from "../../components/Widgets/EmptyCard/EmptyCard";
import { useCategory } from "./useCategory";

export const CategoryPage = () => {
  const {
    columns,
    categories,
    limit,
    page,
    setPage,
    meta,
    handleCreate,
    isEditModalOpen,
    closeModal,
    selectedCategory,
  } = useCategory();

  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-neutral text-2xl font-bold">Gestion des catégories</h1>
      <div className="flex justify-end gap-4">
        <Button onClick={handleCreate} icon={PencilIcon}>
          Nouvelle Category
        </Button>
      </div>

      {categories.length === 0 && (
        <EmptyCard icon={TagIcon} label="Aucune catégorie" subtitle={"Ajouter une nouvelle catégorie"} />
      )}

      {categories.length > 0 && <CategoryCard category={categories[0]}  />}

      <div className="overflow-x-auto md:overflow-visible">
        <DataTable
          columns={columns}
          data={categories}
          pageSize={limit}
          currentPage={page}
          setCurrentPage={setPage}
          totalPage={meta.totalPages}
          paginated
        />
      </div>
      {isEditModalOpen && <CategoryModal category={selectedCategory} onClose={closeModal} />}
    </div>
  );
};
