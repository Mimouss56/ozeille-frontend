import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import type { ColumnDef, PaginationState, Table } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { type Dispatch, type ReactNode, type SetStateAction, useState } from "react";

import { Button } from "../Button/Button.tsx";

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
                <td key={cell.id} className="border-neutral/10">{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {paginated && <Pagination table={table} currentPage={currentPage ? currentPage.pageIndex : page.pageIndex} />}
    </div>
  );
};

const PaginateButton = ({
  label,
  active,
  ...props
}: {
  label: string | ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
}) => (
  <Button size="sm" join style={active ? "primary" : "outline"} {...props}>
    {label}
  </Button>
);

const Pagination = <T,>({ table, currentPage }: { table: Table<T>; currentPage: number }) => {
  const step = 3;

  const buttons = Array.from(
    {
      length: table.getPageCount(),
    },
    (_, index) => {
      // The first and the last page are always displayed
      const isMandatory = index == 0 || index == table.getPageCount() - 1;

      const isMinShowed = currentPage - step < index;
      const isMaxShowed = index < currentPage + step;
      const isShowed = isMinShowed && isMaxShowed;

      // Check if all conditions are met
      const isDisplayed = isMandatory || isShowed;

      if (isDisplayed) {
        return (
          <PaginateButton
            key={index}
            label={index + 1}
            active={index == currentPage}
            onClick={() => table.setPageIndex(index)}
          />
        );
      }

      const isSkipped = currentPage - step == index || currentPage + step == index;
      if (isSkipped) {
        return <PaginateButton key={index} disabled label="..." />;
      }

      return null;
    },
  );

  return (
    <div className="join justify-self-center">
      <PaginateButton
        label={<ArrowLeftIcon size={16} />}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      />
      {buttons}
      <PaginateButton
        label={<ArrowRightIcon size={16} />}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      />
    </div>
  );
};
