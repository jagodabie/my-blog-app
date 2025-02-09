"use client";
import { useMemo } from "react";
import { useFavoriteArticles } from "./useFavoriteArticles";
import { Article } from "@/interfaces";

export type FilterOptions = {
  category?: string;
  favorite?: boolean;
  id?: string | number;
  sortOrder?: "asc" | "desc";
};

export const useFilteredArticles = (
  data: Article[] | null,
  { category, favorite, id, sortOrder = "asc" }: FilterOptions = {}
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

    filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return filtered;
  }, [data, favorite, category, favoriteIds, id, sortOrder]);

  return {
    data: filteredData,
  };
};
