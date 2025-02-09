"use client";

import { FilledStarIcon } from "@/assets/FilledStarIcon";
import { StartIcon } from "@/assets/StartIcon";
import { useFavorite } from "@/hooks/useFavorite";

import "./index.css";

type FavoriteProps = {
  articleId: string;
};

export const Favorite = ({ articleId }: FavoriteProps) => {
  const { isFavorite, toggleFavorite } = useFavorite(articleId);

  return (
    <div className="favorite" onClick={toggleFavorite}>
      <div className="favorite__icon">
        {isFavorite ? <FilledStarIcon /> : <StartIcon />}
      </div>
      <div className="favorite__text">
        {isFavorite ? "usuń z ulubionych" : "dodaj do ulubionych"}
      </div>
    </div>
  );
};
