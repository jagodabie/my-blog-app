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
      <span
        className={`filter__text ${!favorite ? "active" : ""}`}
        onClick={() => {
          if (category) setFavorite(false);
        }}
        style={{ cursor: category ? "pointer" : "not-allowed" }}
      >
        Wszystkie
      </span>

      <span className="filter-divider">/</span>

      <span
        className={`filter__text ${favorite ? "active" : ""}`}
        onClick={() => {
          if (category) setFavorite(true);
        }}
        style={{ cursor: category ? "pointer" : "not-allowed" }}
      >
        Ulubione
      </span>
    </div>
  );
};
