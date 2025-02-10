import { useScreenSize } from "@/hooks/useScreenSize";
import "./index.css";
import { useFilters } from "@/providers/FiltersContext";
import { FavoriteFilter } from "./FavoriteFilter/FavoriteFilter";
import CategoryFilter from "./CategoryFilter/CategoryFilter";

export const FiltersSection = () => {
  const { isSmallDesktop, isSmallScreen } = useScreenSize();
  const { toggleSort, sortOrder } = useFilters();
  const { category, setCategory, favorite, setFavorite } = useFilters();

  return (
    <div className="filters">
      <div className="filters__desktop">
        <div className="filters__left">
          <h2 className="filters__header">Wpisy</h2>
          {category && !isSmallScreen && (
            <CategoryFilter
              category={category}
              setCategory={setCategory}
              setFavorite={setFavorite}
            />
          )}
        </div>
        <div className="filters__right">
          {!isSmallDesktop && (
            <FavoriteFilter
              category={category}
              favorite={favorite}
              setFavorite={setFavorite}
            />
          )}
          <div className="filters__sort">
            {!isSmallDesktop && (
              <div className="filters__sort-title">pokaż od: </div>
            )}
            <>
              {sortOrder === "desc" ? (
                <div
                  className="filters__sort-text"
                  onClick={() => toggleSort()}
                >
                  Najnowsze Wpisy
                </div>
              ) : (
                <div
                  className="filters__sort-text"
                  onClick={() => toggleSort()}
                >
                  Najstarsze Wpisy
                </div>
              )}
            </>
          </div>
        </div>
      </div>

      {isSmallDesktop && (
        <div className="favorite-filter-wrapper">
          <FavoriteFilter
            category={category}
            favorite={favorite}
            setFavorite={setFavorite}
          />
        </div>
      )}
      {category && isSmallScreen && (
        <div className="filters__category--mobile">
          <CategoryFilter
            category={category}
            setCategory={setCategory}
            setFavorite={setFavorite}
          />
        </div>
      )}
    </div>
  );
};
