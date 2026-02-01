import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "./DataTable.tsx";

type SampleData = {
  id: number;
  name: string;
  age: number;
};

const defaultData: SampleData[] = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 24 },
  { id: 3, name: "Susan", age: 20 },
  { id: 4, name: "Chris", age: 30 },
  { id: 5, name: "Dan", age: 40 },
  { id: 6, name: "Kevin", age: 36 },
  { id: 7, name: "Jessie", age: 28 },
  { id: 8, name: "Sarah", age: 29 },
  { id: 9, name: "Mary", age: 32 },
  { id: 10, name: "Patrick", age: 35 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
  { id: 11, name: "Robert", age: 38 },
];

const columns: ColumnDef<SampleData>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
];

const meta = {
  title: "UI/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: () => (
    <div className="w-2xl">
      <DataTable data={defaultData} columns={columns} paginated />
    </div>
  ),
};

export const EmptyTable: Story = {
  render: () => (
    <div className="w-2xl">
      <DataTable data={[]} columns={columns} paginated />
    </div>
  ),
};
