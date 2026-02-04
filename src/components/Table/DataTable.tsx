import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { type Dispatch, type SetStateAction, useState } from "react";

import { Pagination } from "../Pagination/Pagination";

export const DataTable = <T,>({
  data,
  columns,
  paginated,
  pageSize = 10,
  placeholder = "Aucune donnée disponible",
  totalPage,
  currentPage,
  setCurrentPage,
}: {
  /**
   * The data to display in the table
   */
  data: T[];
  /**
   * The columns to display in the table
   */
  columns: ColumnDef<T>[];
  paginated?: boolean;
  pageSize?: number;
  /**
   * Placeholder text to display when there is no data
   */
  placeholder?: string;
  totalPage?: number;
  currentPage?: PaginationState;
  setCurrentPage?: Dispatch<SetStateAction<PaginationState>>;
}) => {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });

  const pagination = () => {
    if (paginated) {
      return currentPage ?? page;
    }

    return undefined;
  };

  const tableOptions = () => {
    if (totalPage) {
      return {
        manualPagination: true,
        pageCount: totalPage,
      };
    }

    return {
      getPaginationRowModel: getPaginationRowModel(),
    };
  };

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setCurrentPage ?? setPage,
    state: {
      pagination: pagination(),
    },
    ...tableOptions(),
  });

  if (data.length == 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>{placeholder}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[1fr_auto] gap-4">
      <table className="table">
        <thead className="text-accent">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan} className="border-neutral/20">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-neutral/10">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {paginated && <Pagination table={table} currentPage={currentPage ? currentPage.pageIndex : page.pageIndex} />}
    </div>
  );
};
