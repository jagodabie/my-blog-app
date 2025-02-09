import { useScreenSize } from "@/hooks/useScreenSize";
import "./index.css";
import { useFilters } from "@/providers/FiltersContext";
import { CloseIcon } from "@/assets/CloseIcon";
import { FavoriteFilter } from "@/components/FilterSection/FavoriteFilter/FavoriteFilter";

export const FiltersSection = () => {
  const { isSmallDesktop, isSmallScreen } = useScreenSize();
  const { toggleSort, sortOrder } = useFilters();
  const { category, setCategory, favorite, setFavorite } = useFilters();

  console.log("FiltersSection -> category", sortOrder);
  return (
    <div className="filters">
      <div className="filters__desktop">
        <div className="filters__left">
          <h2 className="filters__header">Wpisy</h2>
          {category && !isSmallScreen && (
            <>
              <div className="filters__category--active">Kategoria</div>
              <div
                className="filters__clear"
                onClick={() => {
                  setCategory("");
                  setFavorite(false);
                }}
              >
                <CloseIcon />
              </div>
            </>
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
    </div>
  );
};
