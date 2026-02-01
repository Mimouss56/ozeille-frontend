import { create } from "zustand";

import {
  type Category,
  type CreateCategoryDto,
  type UpdateCategoryDto,
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../api/categories";
import type { SelectOption } from "../components/Select/Select";
import { extractAxiosErrorMsg } from "../utils/axiosClient";

interface CategoriesState {
  categories: Category[];
  categoriesOptions: SelectOption[];
  currentCategory: Category | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchCategories: () => Promise<void>;
  fetchCategoryById: (id: string) => Promise<void>;
  createNewCategory: (payload: CreateCategoryDto) => Promise<Category | null>;
  updateCurrentCategory: (id: string, payload: UpdateCategoryDto) => Promise<Category | null>;
  deleteCategoryById: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useStoreCategories = create<CategoriesState>((set) => ({
  categories: [],
  categoriesOptions: [],
  currentCategory: null,
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const categories = await getCategories();
      set({
        categories,
        categoriesOptions: categories.map((category) => ({
          id: category.id,
          value: category.id,
          label: category.label,
        })),
        loading: false,
      });
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
    }
  },

  fetchCategoryById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const category = await getCategoryById(id);
      set({ currentCategory: category, loading: false });
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
    }
  },

  createNewCategory: async (payload: CreateCategoryDto) => {
    set({ loading: true, error: null });
    try {
      const newCategory = await createCategory(payload);
      set((state) => ({
        categories: [...state.categories, newCategory],
        loading: false,
      }));
      return newCategory;
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
      return null;
    }
  },

  updateCurrentCategory: async (id: string, payload: UpdateCategoryDto) => {
    set({ loading: true, error: null });
    try {
      const updated = await updateCategory(id, payload);
      set((state) => ({
        categories: state.categories.map((cat) => (cat.id === id ? updated : cat)),
        currentCategory: updated,
        loading: false,
      }));
      return updated;
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
      return null;
    }
  },

  deleteCategoryById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      await deleteCategory(id);
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== id),
        loading: false,
      }));
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false });
    }
  },

  clearError: () => set({ error: null }),
}));
