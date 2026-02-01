import { useEffect } from "react";

import { CategoryModal } from "../../components/CategoryModal/CategoryModal";
import { DataTable } from "../../components/Table/DataTable";
import { useCategoriesStore } from "../../store/categoriesStore";
import { useCategory } from "./useCategory";

export const CategoryPage = () => {
  const { categories, fetchCategories } = useCategoriesStore();
  // You may need to fetch or define budgets, onEdit, and onDelete appropriately
  const onEdit = (id: string) => {
    console.log("Edit category:", id);
  };
  const onDelete = (categoryId: string) => {
    console.log("Delete category with id:", categoryId);
  };

  const { columns } = useCategory({
    onEdit,
    onDelete,
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des catégories</h1>

        <CategoryModal />
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <DataTable columns={columns} data={categories} />
      </div>
    </div>
  );
};
