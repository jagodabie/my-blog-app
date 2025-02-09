"use client";

import { FiltersSection } from "../FiltersSection/FiltersSection";

import "./index.css";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import { Article } from "@/interfaces";
import { useFilters } from "@/providers/FiltersContext";
import { useArticles } from "@/hooks/useArticles";
import { FiltersSectionRefac } from "../FilterRefactor/FiltersSectionRefac";

export const ArticlesSection = () => {
  const { category, favorite } = useFilters();
  const { data, loading, error } = useArticles({ category, favorite });

  const articles = data as Article[];

  return (
    <div className="articles-section">
      {/* <FiltersSection /> */}
      <FiltersSectionRefac />
      <div className="articles-container">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {articles && articles.length ? (
          articles?.map((article: Article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
    </div>
  );
};
