import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { type Dispatch, type ReactNode, type SetStateAction, useState } from "react";

import { Pagination } from "../Pagination/Pagination";

export const DataTable = <T,>({
  data,
  columns,
  paginated,
  pageSize = 10,
  totalPage,
  currentPage,
  setCurrentPage,
  isFiltering,
  filterElement,
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
  /**
   * Enable filtering UI above the table (boolean or custom placeholder)
   */
  isFiltering?: boolean | { placeholder?: string };
  /**
   * Custom filter element/component to display above the table
   */
  filterElement?: ReactNode;
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
    return;
  }
  // if (data.length == 0) {
  //   return (
  //     <div className="flex h-full items-center justify-center">
  //       <p>{placeholder}</p>
  //     </div>
  //   );
  // }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4">
      {/* Filtres optionnels */}
      {(isFiltering || filterElement) && (
        <div className="flex items-end gap-3">
          {filterElement ? (
            filterElement
          ) : isFiltering ? (
            <input
              type="text"
              placeholder={typeof isFiltering === "object" ? isFiltering.placeholder : "Rechercher..."}
              className="input input-bordered input-sm w-full"
              disabled
            />
          ) : null}
        </div>
      )}

      {/* Table */}
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

      {/* Pagination */}
      {paginated && (
        <div className="flex justify-center">
          <Pagination table={table} currentPage={currentPage ? currentPage.pageIndex : page.pageIndex} />
        </div>
      )}
    </div>
  );
};
