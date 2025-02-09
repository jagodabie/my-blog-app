"use client";

import { useState, useEffect } from "react";

export const useFavorite = (articleId: string) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined" && window.localStorage) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.includes(articleId));
    }
  }, [articleId]);

  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== "undefined" && window.localStorage) {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.includes(articleId));
      }
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [articleId]);

  const toggleFavorite = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

      if (favorites.includes(articleId)) {
        favorites = favorites.filter((id: string) => id !== articleId);
      } else {
        favorites.push(articleId);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(!isFavorite);
    }
  };

  return { isFavorite, toggleFavorite };
};
