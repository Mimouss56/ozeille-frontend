import { PencilIcon } from "@phosphor-icons/react";

import { Button } from "../../components/Button/Button";
import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { DataTable } from "../../components/Table/DataTable";
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
