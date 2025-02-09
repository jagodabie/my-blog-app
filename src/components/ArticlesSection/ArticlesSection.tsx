"use client";
import "./index.css";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import { Article } from "@/interfaces";
import { useFilters } from "@/providers/FiltersContext";
import { useArticles } from "@/hooks/useArticles";
import { FiltersSection } from "../FilterSection/FiltersSection";
import { ElementsNotFound } from "../ElementsNotFound/ElementsNotFound";
import { Loading } from "../Loading/Loading";

export const ArticlesSection = () => {
  const { category, favorite, sortOrder } = useFilters();
  const { data, loading, error } = useArticles({
    category,
    favorite,
    sortOrder,
  });

  const articles: Article[] = Array.isArray(data) ? data : [];

  return (
    <div className="articles-section">
      <FiltersSection />
      <div className="articles-container">
        {loading && <Loading />}
        {error && (
          <ElementsNotFound
            message={
              typeof error === "string" ? error : "Wystąpił nieoczekiwany błąd."
            }
          />
        )}
        {articles.length ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <ElementsNotFound message="Nie znaleziono artykułów spełniających kryteria wyszukiwania." />
        )}
      </div>
    </div>
  );
};
