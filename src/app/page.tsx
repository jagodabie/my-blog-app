"use client";
import { FilterProvider } from "@/providers/FiltersContext";
import { ArticlesSection } from "@/components/ArticlesSection/ArticlesSection";
import { ArticlesCategories } from "@/components/ArticlesCategories/ArticlesCategories";
import { useArticles } from "@/hooks/useArticles";
import { Loading } from "@/components/Loading/Loading";
import { ErrorMessage } from "@/components/Error/Error";

export default function Home() {
  const { loading, error } = useArticles();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <FilterProvider>
      <ArticlesCategories />
      <ArticlesSection />
    </FilterProvider>
  );
}
