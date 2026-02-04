import { TagIcon } from "@phosphor-icons/react";

import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { EmptyCard } from "../../components/EmptyCard/EmptyCard";
import { DataTable } from "../../components/Table/DataTable";
import { useCategory } from "./useCategory";

export const CategoryPage = () => {
  const { columns, categories, limit, page, setPage, meta } = useCategory();

  return (
    <div className="flex h-full flex-col gap-4">
      <h1 className="text-neutral text-2xl font-bold">Gestion des catégories</h1>
      <div className="flex justify-end gap-4">
        <CategoryModal />
      </div>

      {categories.length === 0 && (
        <EmptyCard icon={TagIcon} label="Aucune catégorie" subtitle={"Ajouter une nouvelle catégorie"} />
      )}

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
    </div>
  );
};
