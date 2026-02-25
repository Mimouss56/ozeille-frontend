/**
 * Filtre de pagination généralisé
 */
export type PaginationFilter = {
  limit?: number;
  page?: number;
};

/**
 * Type générique pour les filtres
 * Permet de combiner facilement différents types de filtres
 */
export type Filter<T extends Record<string, unknown> = Record<string, unknown>> = {
  pagination?: PaginationFilter;
  filters?: T;
};
