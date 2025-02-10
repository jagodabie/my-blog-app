"use client";

import { useFetchArticles } from "./useFetchArticles ";
import { FilterOptions, useFilteredArticles } from "./useFilteredArticles";

export const useArticles = (filters: FilterOptions = {}) => {
  const { data, loading, error } = useFetchArticles(filters?.id || "");
  const { data: filteredData } = useFilteredArticles(data, filters);

  return { data: filteredData, loading, error };
};
