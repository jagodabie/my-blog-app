"use client";

import { FiltersSection } from "../FiltersSection/FiltersSection";

import "./index.css";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import { Article } from "@/interfaces";
import { useFilters } from "@/providers/FiltersContext";
import { useArticles } from "@/hooks/useArticles";

export const ArticlesSection = () => {
  const { category, favorite } = useFilters();
  const {
    data: articles,
    loading,
    error,
  } = useArticles({ category, favorite });

  return (
    <div className="articles-section">
      <FiltersSection />

      <div className="articles-container">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {articles && articles.length ? (
          articles?.map((article: Article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <div>No articles found</div>
        )}
      </div>
    </div>
  );
};
