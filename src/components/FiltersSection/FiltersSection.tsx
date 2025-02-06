"use client";
import { CloseIcon } from "@/assets/CloseIcon";
import "./index.css";
import { useFilters } from "@/providers/FiltersContext";
import { useIsMobile } from "@/hooks/useScreenSize";
import { FavoriteFilter } from "./components/FavoriteFilter";

export const FiltersSection = () => {
  const { category, setCategory, favorite, setFavorite } = useFilters();
  const { isMobile } = useIsMobile();

  return (
    <>
      <div className="filters">
        <h2 className="articles-categories-header">Wpisy</h2>
        {!isMobile && (
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
        )}
        {!isMobile && (
          <FavoriteFilter
            category={category}
            favorite={favorite}
            setFavorite={setFavorite}
          />
        )}
        <div className="sort-filter">
          {!isMobile && <span className="sort">pokaż od:</span>}
          <span className="sort__text"> Najnowsze wpisy</span>
        </div>
      </div>
      {isMobile && (
        <div className="filters__mobile">
          <FavoriteFilter
            category={category}
            favorite={favorite}
            setFavorite={setFavorite}
          />
        </div>
      )}
    </>
  );
};
