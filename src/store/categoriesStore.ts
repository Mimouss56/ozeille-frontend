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

interface CategoriesState {
  categories: Category[];
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

export const useCategories = create<CategoriesState>((set, get) => ({
  categories: [],
  currentCategory: null,
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const categories = await getCategories();
      set({ categories, loading: false });
    } catch (error) {
      set({ error: "Erreur lors du chargement des catégories", loading: false });
    }
  },

  fetchCategoryById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const category = await getCategoryById(id);
      set({ currentCategory: category, loading: false });
    } catch (error) {
      set({ error: "Erreur lors du chargement de la catégorie", loading: false });
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
      set({ error: "Erreur lors de la création", loading: false });
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
      set({ error: "Erreur lors de la mise à jour", loading: false });
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
      set({ error: "Erreur lors de la suppression", loading: false });
    }
  },

  clearError: () => set({ error: null }),
}));
