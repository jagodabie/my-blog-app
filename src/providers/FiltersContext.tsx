"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  category: string;
  setCategory: (category: string) => void;
  favorite: boolean;
  setFavorite: (favorite: boolean) => void;
  sortOrder: "asc" | "desc";
  toggleSort: () => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(false);
  const [sortOrder, setSort] = useState<"asc" | "desc">("desc");

  const toggleSort = () => {
    setSort((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  return (
    <FilterContext.Provider
      value={{
        category,
        setCategory,
        favorite,
        setFavorite,
        sortOrder,
        toggleSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
