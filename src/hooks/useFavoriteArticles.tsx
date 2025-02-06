"use client";
import { useMemo } from "react";
export const useFavoriteArticles = () => {
  const favoriteIds = useMemo(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }, []);

  return { favoriteIds };
};
