import type { Category } from "../../api/categories";
import { CategoryModal } from "./CategoryModal";

export default {
  title: "UI/CategoryModal",
  component: CategoryModal,
  argTypes: {
    category: {
      control: "object",
      description: "Catégorie à éditer (undefined pour création)",
    },
  },
};

const exampleCategory: Category = {
  id: "cat-1",
  label: "Courses",
  budgetId: "budg-1",
  color: "#FF5733",
  limitAmount: 150,
  userId: "user-1",
};

export const Default = {
  args: {
    category: undefined,
  },
};

export const EditMode = {
  args: {
    category: exampleCategory,
  },
};
