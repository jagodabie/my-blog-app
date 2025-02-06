"use client";
import { CloseIcon } from "@/assets/CloseIcon";
import "./index.css";
import { useFilters } from "@/providers/FiltersContext";
import { useIsMobile } from "@/hooks/useScreenSize";

export const FiltersSection = () => {
  const { category, setCategory, favorite, setFavorite } = useFilters();
  const { isMobile } = useIsMobile();

  return (
    <div className="filters">
      <h2 className="articles-categories-header">Wpisy</h2>
      <div className="category-filter">
        {category && (
          <>
            <span className="filter__text active">{category || ""}</span>
            <div className="filter__clear" onClick={() => setCategory("")}>
              <CloseIcon />
            </div>
          </>
        )}
      </div>
      <div
        style={
          category
            ? { cursor: "pointer" }
            : {
                cursor: "not-allowed",
              }
        }
        className="favorite-filter"
      >
        <span
          className={`filter__text ${!favorite ? "active" : ""}`}
          onClick={() => setFavorite(false)}
        >
          Wszystkie
        </span>
        <span className="filter-divider">/</span>
        <span
          className={`filter__text ${favorite ? "active" : ""}`}
          onClick={() => {
            setFavorite(true);
          }}
        >
          Ulubione
        </span>
      </div>
      <div className="sort-filter">
        <span className="sort">pokaż od:</span>
        <span className="sort__text"> Najnowsze wpisy</span>
      </div>
    </div>
  );
};
