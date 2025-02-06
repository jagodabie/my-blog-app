"use client";

import { useState, useEffect } from "react";

export const useFavorite = (articleId: number) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(articleId));
  }, [articleId]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (favorites.includes(articleId)) {
      favorites = favorites.filter((id: number) => id !== articleId);
    } else {
      favorites.push(articleId);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, toggleFavorite };
};
