import { useScreenSize } from "@/hooks/useScreenSize";
import "./index.css";
import { useFilters } from "@/providers/FiltersContext";
import { FavoriteFilter } from "../FiltersSection/components/FavoriteFilter";
import { CloseIcon } from "@/assets/CloseIcon";

export const FiltersSectionRefac = () => {
  const { isSmallDesktop, isSmallScreen } = useScreenSize();
  const { category, setCategory, favorite, setFavorite } = useFilters();

  return (
    <div className="filters">
      <div className="filters__desktop">
        <div className="filters__left">
          <h2 className="filters__header">Wpisy</h2>
          {category && !isSmallScreen && (
            <>
              <div className="filters__category--active">Kategoria</div>
              <div className="filters__clear" onClick={() => setCategory("")}>
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
            <div className="filters__sort-text">Najnowsze Wpisy</div>
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
