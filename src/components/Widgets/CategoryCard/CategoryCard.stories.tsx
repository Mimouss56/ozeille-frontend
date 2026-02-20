import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Transaction } from "../../../api/transactions";
import { CategoryCard } from "./CategoryCard";

const meta = {
  title: "Widgets/CategoryCard",
  component: CategoryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockAlimentation = {
  id: "cat-1",
  label: "Alimentation",
  color: "#FF6B6B",
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
};

const mockTransport = {
  id: "cat-2",
  label: "Transport",
  color: "#4ECDC4",
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
};

const mockLoisirs = {
  id: "cat-3",
  label: "Loisirs",
  color: "#FFE66D",
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
};

const mockAllTransactions: Transaction[] = [
  // Alimentation
  {
    id: "1",
    amount: 45.5,
    label: "Epicerie CARREFOUR",
    dueAt: "2025-01-15",
    pointedAt: null,
    createdAt: "2025-01-10",
    updatedAt: "2025-01-10",
    frequencyId: "1",
    category: mockAlimentation,
    categoryId: "cat-1",
  },
  {
    id: "2",
    amount: 32.9,
    label: "MONOPRIX",
    dueAt: "2025-01-18",
    pointedAt: null,
    createdAt: "2025-01-10",
    updatedAt: "2025-01-10",
    frequencyId: "1",
    category: mockAlimentation,
    categoryId: "cat-1",
  },
  {
    id: "3",
    amount: 28.5,
    label: "Boulangerie Pain",
    dueAt: "2025-01-20",
    pointedAt: null,
    createdAt: "2025-01-10",
    updatedAt: "2025-01-10",
    frequencyId: "1",
    category: mockAlimentation,
    categoryId: "cat-1",
  },
  // Transport
  {
    id: "4",
    amount: 120.0,
    label: "Essence Shell",
    dueAt: "2025-01-15",
    pointedAt: null,
    createdAt: "2025-01-10",
    updatedAt: "2025-01-10",
    frequencyId: "1",
    category: mockTransport,
    categoryId: "cat-2",
  },
  {
    id: "5",
    amount: 50.0,
    label: "Parkings",
    dueAt: "2025-01-18",
    pointedAt: null,
    createdAt: "2025-01-10",
    updatedAt: "2025-01-10",
    frequencyId: "1",
    category: mockTransport,
    categoryId: "cat-2",
  },
  // Loisirs
  {
    id: "6",
    amount: 35.0,
    label: "Cinéma UGC",
    dueAt: "2025-01-20",
    pointedAt: null,
    createdAt: "2025-01-10",
    updatedAt: "2025-01-10",
    frequencyId: "1",
    category: mockLoisirs,
    categoryId: "cat-3",
  },
];

// Mode: Une catégorie spécifique
export const SpecificCategoryWithTransactions: Story = {
  args: {
    category: mockAlimentation,
    transactions: mockAllTransactions,
    loading: false,
  },
};

// Mode: Répartition globale (toutes les catégories)
export const AllCategoriesDistribution: Story = {
  args: {
    transactions: mockAllTransactions,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    transactions: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    transactions: [],
    loading: false,
  },
};

export const SingleTransaction: Story = {
  args: {
    category: mockAlimentation,
    transactions: [mockAllTransactions[0]],
    loading: false,
  },
};
