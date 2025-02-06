"use client";

import { useMemo } from "react";
import { useFavoriteArticles } from "./useFavoriteArticles";
import { Article } from "@/interfaces";

export type FilterOptions = {
  category?: string;
  favorite?: boolean;
  id?: string | number;
};

export const useFilteredArticles = (
  data: Article[] | null,
  { category, favorite, id }: FilterOptions = {}
) => {
  const { favoriteIds } = useFavoriteArticles();

  const filteredData = useMemo(() => {
    if (!data) return null;

    let filtered = [...data];

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (favorite) {
      filtered = filtered.filter((item) => favoriteIds.includes(item.id));
    }

    if (id) {
      return (
        filtered.find((item) => item.id.toString() === id.toString()) || null
      );
    }

    return filtered;
  }, [data, favorite, category, favoriteIds, id]);

  return {
    data: filteredData,
  };
};
