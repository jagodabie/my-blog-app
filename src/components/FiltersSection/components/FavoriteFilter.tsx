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
  );
};
