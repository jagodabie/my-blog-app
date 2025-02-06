"use client";

import { FilterProvider } from "@/providers/FiltersContext";
import { ArticlesCategories } from "../ArticlesCategoriesSection/ArticlesCategories";
import { ArticlesSection } from "../ArticlesSection/ArticlesSection";
import "./index.css";

export const AppMain = () => {
  return (
    <FilterProvider>
      <ArticlesCategories />
      <ArticlesSection />
    </FilterProvider>
  );
};
