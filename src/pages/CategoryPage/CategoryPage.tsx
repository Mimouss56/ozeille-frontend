import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { DataTable } from "../../components/Table/DataTable";
import { useCategory } from "./useCategory";

export const CategoryPage = () => {
  const { columns, categories, limit, page, setPage, meta } = useCategory();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des catégories</h1>
        <CategoryModal />
      </div>

      <div className="overflow-visible rounded-xl border border-gray-200 bg-white shadow-sm">
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
