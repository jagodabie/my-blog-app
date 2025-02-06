"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  category: string;
  setCategory: (category: string) => void;
  favorite: boolean;
  setFavorite: (favorite: boolean) => void;
  sort: string;
  setSort: (sort: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(false);
  const [sort, setSort] = useState<string>("najnowsze");

  return (
    <FilterContext.Provider
      value={{ category, setCategory, favorite, setFavorite, sort, setSort }}
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
