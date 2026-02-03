import type { PaginationState } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { DataTable } from "../../components/Table/DataTable";
import { useStoreCategories } from "../../store";
import { useCategory } from "./useCategory";

export const CategoryPage = () => {
  const { categories, fetchCategories, meta } = useStoreCategories();
  const limit = 10;
  // const [limit, _setLimit] = useState(10);
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit,
  });

  const { columns } = useCategory();

  useEffect(() => {
    fetchCategories({ limit, page: page.pageIndex + 1 });
  }, [fetchCategories, page.pageIndex]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des catégories</h1>

        <CategoryModal />
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
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
