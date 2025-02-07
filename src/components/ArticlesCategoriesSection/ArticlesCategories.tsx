import "./index.css";
import {
  ArticleCategory,
  ArticleCategoryProps,
} from "./articleCategory/ArticleCategory/ArticleCategory";
import { categories } from "@/lib";
import { useScreenSize } from "@/hooks/useScreenSize";
import { Carousel } from "../Carousel/Carousel";

export const ArticlesCategories = () => {
  const { isSmallDesktop } = useScreenSize();

  return (
    <div className="articles-categories">
      {!isSmallDesktop && (
        <h2 className="articles-categories-header">Kategorie</h2>
      )}
      <div className="articles-categories-container">
        {isSmallDesktop ? (
          <Carousel categories={categories} />
        ) : (
          <div className="articles-categories-container">
            {categories.map(
              ({
                id,
                title,
                color,
                src,
                backgroundColor,
                icon,
              }: ArticleCategoryProps & { id: number }) => (
                <ArticleCategory
                  key={id}
                  title={title}
                  backgroundColor={backgroundColor}
                  color={color}
                  src={src}
                  icon={icon}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
