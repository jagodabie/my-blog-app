"use client";
import { FilterProvider } from "@/providers/FiltersContext";
import { ArticlesSection } from "@/components/ArticlesSection/ArticlesSection";
import { ArticlesCategories } from "@/components/ArticlesCategoriesSection/ArticlesCategories";

export default function Home() {
  return (
    <FilterProvider>
      <ArticlesCategories />
      <ArticlesSection />
    </FilterProvider>
  );
}
