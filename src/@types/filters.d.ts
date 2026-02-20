/**
 * Filtre de pagination généralisé
 */
export type PaginationFilter = {
  limit?: number;
  page?: number;
};

/**
 * Filtre de transaction complètement aligné avec le backend
 * Voir: backend/src/transactions/dto/transaction-filter.dto.ts
 */
export type TransactionFilters = PaginationFilter & {
  label?: string;
  categoryId?: string;
  "order[dueAt]"?: "asc" | "desc";
  "exists[pointedAt]"?: boolean;
};

/**
 * Type générique pour les filtres
 * Permet de combiner facilement différents types de filtres
 */
export type Filter<T extends Record<string, unknown> = Record<string, unknown>> = {
  pagination?: PaginationFilter;
  filters?: T;
};
