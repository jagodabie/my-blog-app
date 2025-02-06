"use client";

import { FilledStarIcon } from "@/assets/FilledStarIcon";
import { StartIcon } from "@/assets/StartIcon";
import { useFavorite } from "@/hooks/useFavorite";

import "./index.css";

type FavoriteProps = {
  articleId: number;
};

export const Favorite = ({ articleId }: FavoriteProps) => {
  const { isFavorite, toggleFavorite } = useFavorite(articleId);

  return (
    <div className="favorite" onClick={toggleFavorite}>
      <span className="favorite__icon">
        {isFavorite ? <FilledStarIcon /> : <StartIcon />}
      </span>
      <span className="favorite__text">
        {isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
      </span>
    </div>
  );
};
