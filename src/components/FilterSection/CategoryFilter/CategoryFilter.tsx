import { CloseIcon } from "@/assets/CloseIcon";

const CategoryFilter = ({
  category,
  setCategory,
  setFavorite,
}: {
  category: string;
  setCategory: (value: string) => void;
  setFavorite: (value: boolean) => void;
}) => {
  const handleClear = () => {
    setCategory("");
    setFavorite(false);
  };

  return (
    <>
      <div className="filters__category--active">{category}</div>
      <div className="filters__clear" onClick={handleClear}>
        <CloseIcon />
      </div>
    </>
  );
};

export default CategoryFilter;
