"use client";
import { JSX } from "react";
import { useFilters } from "@/providers/FiltersContext";

import "./index.css";
import { Picture } from "@/components/Picture/Picture";

export type ArticleCategoryProps = {
  title: string;
  color: string;
  backgroundColor: string;
  src: string;
  icon: JSX.Element;
};

export const ArticleCategory = ({
  title,
  color,
  backgroundColor,
  src,
  icon,
}: ArticleCategoryProps) => {
  const { setCategory } = useFilters();

  const handleClick = () => {
    setCategory(title);
  };

  return (
    <div
      className="article-category"
      onTouchStart={handleClick}
      onClick={handleClick}
    >
      <div className="article-category__image">
        <Picture src={src} priority alt={title} />
      </div>

      <div className="article-category__bottom " style={{ backgroundColor }}>
        <div className="article-category__title" style={{ color }}>
          {title.toUpperCase()}
        </div>
        <div className="article-category__icon">{icon}</div>
      </div>
    </div>
  );
};
