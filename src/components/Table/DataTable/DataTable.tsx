import type { PaginationState, ColumnDef as TankStackColumnDef } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { type Dispatch, type ReactNode, type SetStateAction, useCallback, useEffect, useMemo, useState } from "react";

import type { CurrencyOptions } from "../../../utils/currency";
import { InputField } from "../../Form/InputField/InputField";
import { Select } from "../../Form/Select/Select";
import { Pagination } from "../../Pagination/Pagination";
import type { FilterableColumnMeta } from "../Filters/FilterInput";

/**
 * Extension du type ColumnDef pour ajouter les métadonnées de filtrage
 */
export type ColumnDef<T> = Omit<TankStackColumnDef<T, unknown>, "accessorKey"> & {
  accessorKey?: keyof T;
  enableFiltering?: boolean;
  options?: FilterableColumnMeta<T>;
  currency?: boolean | CurrencyOptions;
};

export const DataTable = <T,>({
  data,
  columns, // Accepte votre nouveau type ColumnDef<T>
  paginated,
  pageSize = 10,
  totalPage,
  currentPage,
  setCurrentPage,
  isFiltering,
  filterElement,
  resetFiltersSignal,
}: {
  data: T[];
  columns: ColumnDef<T>[];
  paginated?: boolean;
  pageSize?: number;
  totalPage?: number;
  currentPage?: PaginationState;
  setCurrentPage?: Dispatch<SetStateAction<PaginationState>>;
  isFiltering?: boolean | { placeholder?: string };
  filterElement?: ReactNode;
  resetFiltersSignal?: number;
}) => {
  const [page, setPage] = useState<PaginationState>({ pageIndex: 0, pageSize });
  const [filters, setFilters] = useState<Record<string, string>>({});

  const resetAllFilters = useCallback(() => {
    setFilters({});

    columns.forEach((column) => {
      if (column.enableFiltering && column.options?.isServerSide && column.options.onChange) {
        column.options.onChange("");
      }
    });
  }, [columns]);

  useEffect(() => {
    if (resetFiltersSignal === undefined) return;
    resetAllFilters();
  }, [resetFiltersSignal, resetAllFilters]);

  const handleFilterChange = (columnId: string, value: string) => {
    setFilters((prev) => ({ ...prev, [columnId]: value }));
  };

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return Object.entries(filters).every(([columnId, filterValue]) => {
        if (!filterValue) return true;

        const column = columns.find(
          (col) => col.id === columnId || ("accessorKey" in col && col.accessorKey === columnId),
        );
        if (!column) return true;

        // On ignore le filtrage local si c'est géré par l'API
        if (column.options?.isServerSide) return true;

        const cellValue = (row as Record<string, unknown>)[columnId];
        if (cellValue === undefined || cellValue === null) return false;

        return String(cellValue).toLowerCase().includes(filterValue.toLowerCase());
      });
    });
  }, [data, filters, columns]);

  const enrichedColumns = useMemo(() => {
    return columns.map((column) => {
      if (!column.enableFiltering) return column;

      const columnId = column.id || ("accessorKey" in column && String(column.accessorKey)) || "";
      const filterOptions = column.options?.filterOptions;
      const filterPlaceholder = column.options?.filterPlaceholder || "Rechercher...";
      const filterEmptyLabel = column.options?.filterEmptyLabel || "Toutes";

      const customOnChange = column.options?.onChange;
      const originalHeader = column.header;
      const headerLabel = typeof originalHeader === "string" ? originalHeader : columnId;

      return {
        ...column,
        header: () => {
          if (filterOptions && filterOptions.length > 0) {
            return (
              <Select
                id={`filter-select-${headerLabel.toLowerCase().replace(/\s+/g, "-")}`}
                label={headerLabel}
                value={filters[columnId] || ""}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  // On vérifie si 'e' est un événement React (e.target.value) ou directement une string
                  const stringValue = e?.target !== undefined ? e.target.value : String(e);

                  handleFilterChange(columnId, stringValue);
                  if (customOnChange) customOnChange(stringValue);
                }}
                options={filterOptions.map((opt) => ({
                  label: opt.label,
                  value: opt.value,
                }))}
                placeholder={filterEmptyLabel}
                size="xs"
                style="neutral"
              />
            );
          }

          return (
            <InputField
              id={`filter-input-${headerLabel.toLowerCase().replace(/\s+/g, "-")}`}
              name={`filter-${headerLabel}`}
              label={headerLabel}
              value={filters[columnId] || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const stringValue = e?.target !== undefined ? e.target.value : String(e);
                handleFilterChange(columnId, stringValue);
                if (customOnChange) customOnChange(stringValue);
              }}
              placeholder={filterPlaceholder}
              size="md"
              style="neutral"
            />
          );
        },
      };
    });
  }, [columns, filters]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: filteredData,
    columns: enrichedColumns as TankStackColumnDef<T, unknown>[], // On recaste pour TanStack en interne
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setCurrentPage ?? setPage,
    state: { pagination: paginated ? (currentPage ?? page) : undefined },
    ...(totalPage
      ? { manualPagination: true, pageCount: totalPage }
      : { getPaginationRowModel: getPaginationRowModel() }),
  });

  if (data.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Aucune donnée</p>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4">
      {(isFiltering || filterElement) && (
        <div className="flex items-end gap-3">
          {filterElement ? (
            filterElement
          ) : isFiltering ? (
            <InputField
              id="global-table-filter"
              name="global-filter"
              label="Recherche"
              type="text"
              placeholder={
                typeof isFiltering === "object" && isFiltering.placeholder ? isFiltering.placeholder : "Rechercher..."
              }
              size="sm"
              disabled
            />
          ) : null}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-accent">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const columnDef = header.column.columnDef as ColumnDef<T>;
                  const alignRight = columnDef.currency ? "text-right" : "";
                  return (
                    <th key={header.id} colSpan={header.colSpan} className={`border-neutral/20 ${alignRight}`}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const columnDef = cell.column.columnDef as ColumnDef<T>;
                  const alignRight = columnDef.currency ? "text-right" : "";
                  return (
                    <td key={cell.id} className={`border-neutral/10 ${alignRight}`}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {paginated && (
        <div className="flex justify-center">
          <Pagination table={table} currentPage={currentPage ? currentPage.pageIndex : page.pageIndex} />
        </div>
      )}
    </div>
  );
};
