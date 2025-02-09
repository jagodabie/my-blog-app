import "./index.css";

type FavoriteFilterProps = {
  category: string;
  favorite: boolean;
  setFavorite: (value: boolean) => void;
};

export const FavoriteFilter = ({
  category,
  favorite,
  setFavorite,
}: FavoriteFilterProps) => {
  return (
    <div
      className="favorite-filter"
      style={{ cursor: category ? "pointer" : "not-allowed" }}
    >
      <div
        className={`filter__text${!favorite ? "--active" : ""}`}
        onClick={() => {
          if (category) setFavorite(false);
        }}
        style={{ cursor: category ? "pointer" : "not-allowed" }}
      >
        Wszystkie
      </div>

      <div className="filter-divider">/</div>

      <div
        className={`filter__text${favorite ? "--active" : ""}`}
        onClick={() => {
          if (category) setFavorite(true);
        }}
        style={{ cursor: category ? "pointer" : "not-allowed" }}
      >
        Ulubione
      </div>
    </div>
  );
};
