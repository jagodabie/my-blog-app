import { BookIcon } from "@/assets/BookIcon";
import { GlassesIcon } from "@/assets/GlassesIcon";
import { InspirationIcon } from "@/assets/InspirationIcon";
import { InterpretationIcon } from "@/assets/InterpretationIcon";
import { ArticleCategoryProps } from "@/components/ArticlesCategoriesSection/articleCategory/ArticleCategory/ArticleCategory";

export const categoriesName = [
  "Wiedza",
  "Inspiracje",
  "Interpretacje",
  "Dostępne",
] as const;

export type Category = ArticleCategoryProps & {
  id: number;
};

export const categories: Category[] = [
  {
    id: 1,
    title: categoriesName[0],
    backgroundColor: "var(--color-dark-blue)",
    color: "var( --color-bg)",
    src: "/picture/knowledge.png",
    icon: <BookIcon />,
  },
  {
    id: 2,
    title: categoriesName[1],
    color: "var(--color-dark-gray)",
    backgroundColor: "var(--color-accent-yellow)",
    src: "/picture/inspiration.png",
    icon: <InspirationIcon />,
  },
  {
    id: 3,
    title: categoriesName[2],
    backgroundColor: "var(--color-text-error)",
    color: "var(--color-bg)",
    src: "/picture/interpretation.png",
    icon: <InterpretationIcon />,
  },
  {
    id: 4,
    title: categoriesName[3],
    backgroundColor: "var(--color-green)",
    color: "var(--color-dark-gray)",
    src: "/picture/availability.png",
    icon: <GlassesIcon />,
  },
];

export const categoryColorMap: Record<string, string> = {
  Wiedza: "var(--color-dark-blue)",
  Inspiracje: "var(--color-accent-yellow)",
  Interpretacje: "var(--color-text-error)",
  Dostępne: "var(--color-green)",
};
