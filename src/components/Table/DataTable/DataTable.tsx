import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { type Dispatch, type ReactNode, type SetStateAction, useMemo, useState } from "react";

import type { CurrencyOptions } from "../../../utils/currency";
import { InputField } from "../../Form/InputField/InputField";
import { Pagination } from "../../Pagination/Pagination";
import { FilterInput, FilterSelect } from "../Filters";
import type { FilterableColumnMeta } from "../Filters/FilterInput";

/**
 * Extension du type ColumnDef pour ajouter les métadonnées de filtrage
 *
 * @example
 * Filtrage avec input texte (par défaut)
 * {
 *   accessorKey: "label",
 *   header: "Libellé",
 *   enableFiltering: true,
 *   options: {
 *     filterPlaceholder: "Rechercher...",
 *   },
 * }
 *
 * @example
 * Filtrage avec select (si filterOptions est fourni)
 * {
 *   accessorKey: "category",
 *   header: "Catégorie",
 *   enableFiltering: true,
 *   options: {
 *     filterOptions: categories.map(c => ({ id: c.id, label: c.label })),
 *     filterEmptyLabel: "Toutes",
 *   },
 * }
 *
 * @example
 * Colonne avec alignement à droite et options par défaut
 * {
 *   accessorKey: "amount",
 *   header: "Montant",
 *   currency: true,
 * }
 *
 * @example
 * Colonne avec options de devise personnalisées
 * {
 *   accessorKey: "price",
 *   header: "Prix",
 *   currency: {
 *     currency: "$",
 *     decimals: 2,
 *     currencyPosition: "before",
 *   },
 * }
 */
export type FilterableColumnDef<T> = ColumnDef<T, unknown> & {
  /** Active le filtrage automatique pour cette colonne */
  enableFiltering?: boolean;
  /** Options de filtrage */
  options?: FilterableColumnMeta;
  /** Aligne le contenu a droite. true = options par defaut (EUR) */
  currency?: boolean | CurrencyOptions;
};

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
  data: T[];
  columns: FilterableColumnDef<T>[];
  paginated?: boolean;
  pageSize?: number;
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

  // État des filtres par colonne (clé = accessorKey, valeur = valeur du filtre)
  const [filters, setFilters] = useState<Record<string, string>>({});

  const handleFilterChange = (columnId: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [columnId]: value,
    }));
  };

  // Filtrer les données en fonction des filtres actifs
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return Object.entries(filters).every(([columnId, filterValue]) => {
        if (!filterValue) return true; // Pas de filtre actif pour cette colonne

        const column = columns.find(
          (col) => col.id === columnId || ("accessorKey" in col && col.accessorKey === columnId),
        );
        if (!column) return true;

        // Récupérer la valeur de la cellule
        const cellValue = (row as Record<string, unknown>)[columnId];
        if (cellValue === undefined || cellValue === null) return false;

        // Comparaison insensible à la casse
        return String(cellValue).toLowerCase().includes(filterValue.toLowerCase());
      });
    });
  }, [data, filters, columns]);

  // Enrichir les colonnes avec les composants de filtrage automatiques
  const enrichedColumns = useMemo(() => {
    return columns.map((column) => {
      const enableFiltering = column.enableFiltering;
      if (!enableFiltering) return column;

      const columnId = column.id || ("accessorKey" in column && String(column.accessorKey)) || "";
      const filterOptions = column.options?.filterOptions;
      const filterPlaceholder = column.options?.filterPlaceholder || "Rechercher...";
      const filterEmptyLabel = column.options?.filterEmptyLabel || "Toutes";

      // Si header existe déjà et n'est pas une fonction, on le garde
      const originalHeader = column.header;
      const headerLabel = typeof originalHeader === "string" ? originalHeader : columnId;

      return {
        ...column,
        header: () => {
          // Si des options sont fournies, utiliser FilterSelect
          if (filterOptions && filterOptions.length > 0) {
            return (
              <FilterSelect
                value={filters[columnId] || ""}
                onChange={(value) => handleFilterChange(columnId, value)}
                options={filterOptions}
                label={headerLabel}
                emptyLabel={filterEmptyLabel}
              />
            );
          }

          // Sinon, utiliser FilterInput par défaut
          return (
            <FilterInput
              value={filters[columnId] || ""}
              onChange={(value) => handleFilterChange(columnId, value)}
              label={headerLabel}
              placeholder={filterPlaceholder}
            />
          );
        },
      };
    });
  }, [columns, filters]);

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
    data: filteredData,
    columns: enrichedColumns as FilterableColumnDef<T>[],
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setCurrentPage ?? setPage,
    state: {
      pagination: pagination(),
    },
    ...tableOptions(),
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
      {/* Filtres optionnels */}
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

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-accent">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const columnDef = header.column.columnDef as FilterableColumnDef<T>;
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
                  const columnDef = cell.column.columnDef as FilterableColumnDef<T>;
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

      {/* Pagination */}
      {paginated && (
        <div className="flex justify-center">
          <Pagination table={table} currentPage={currentPage ? currentPage.pageIndex : page.pageIndex} />
        </div>
      )}
    </div>
  );
};
