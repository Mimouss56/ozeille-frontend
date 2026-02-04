import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ColumnDef } from "@tanstack/react-table";
import { getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

import { Pagination } from "./Pagination";

// Type de données pour la démo
type DemoData = {
  id: number;
  name: string;
};

// Génération de données factices
const generateData = (count: number): DemoData[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

const columns: ColumnDef<DemoData>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nom" },
];

// Wrapper pour utiliser le hook useReactTable
const PaginationWrapper = ({
  dataCount = 50,
  pageSize = 10,
  initialPage = 0,
}: {
  dataCount?: number;
  pageSize?: number;
  initialPage?: number;
}) => {
  const [pagination, setPagination] = useState({
    pageIndex: initialPage,
    pageSize,
  });

  const data = generateData(dataCount);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="text-base-content text-center text-sm">
        Page {pagination.pageIndex + 1} sur {table.getPageCount()}
      </div>
      <Pagination table={table} currentPage={pagination.pageIndex} />
    </div>
  );
};

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Composant de pagination utilisé avec TanStack Table. Affiche les boutons de navigation et les numéros de page avec une logique d'ellipsis pour les grandes quantités de pages.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => <PaginationWrapper />,
};

export const FewPages: Story = {
  render: () => <PaginationWrapper dataCount={30} pageSize={10} />,
  parameters: {
    docs: {
      description: {
        story: "Pagination avec peu de pages (3 pages)",
      },
    },
  },
};

export const ManyPages: Story = {
  render: () => <PaginationWrapper dataCount={200} pageSize={10} />,
  parameters: {
    docs: {
      description: {
        story: "Pagination avec beaucoup de pages (20 pages) - affiche les ellipsis",
      },
    },
  },
};

export const StartAtMiddle: Story = {
  render: () => <PaginationWrapper dataCount={100} pageSize={10} initialPage={4} />,
  parameters: {
    docs: {
      description: {
        story: "Pagination démarrée au milieu pour voir les ellipsis des deux côtés",
      },
    },
  },
};

export const SmallPageSize: Story = {
  render: () => <PaginationWrapper dataCount={50} pageSize={5} />,
  parameters: {
    docs: {
      description: {
        story: "Pagination avec une petite taille de page (5 éléments par page)",
      },
    },
  },
};

export const SinglePage: Story = {
  render: () => <PaginationWrapper dataCount={5} pageSize={10} />,
  parameters: {
    docs: {
      description: {
        story: "Cas limite : une seule page de données",
      },
    },
  },
};

export const LightMode: Story = {
  decorators: [
    (Story) => (
      <div data-theme="light" className="bg-base-100 p-4">
        <Story />
      </div>
    ),
  ],
  render: () => <PaginationWrapper />,
};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-base-100 p-4">
        <Story />
      </div>
    ),
  ],
  render: () => <PaginationWrapper />,
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div data-theme="light" className="bg-base-100 rounded-lg p-4">
        <p className="text-base-content mb-4 text-center text-sm font-semibold">Light Mode</p>
        <PaginationWrapper dataCount={100} initialPage={5} />
      </div>
      <div data-theme="dark" className="bg-base-100 rounded-lg p-4">
        <p className="text-base-content mb-4 text-center text-sm font-semibold">Dark Mode</p>
        <PaginationWrapper dataCount={100} initialPage={5} />
      </div>
    </div>
  ),
};
