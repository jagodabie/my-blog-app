import { useRef, useState } from "react";
import { Category } from "@/lib";

import "./index.css";
import { ArrowRight } from "@/assets/ArrowRight";
import { ArrowLeft } from "@/assets/ArrowLeft";
import { ArticleCategory } from "../ArticlesCategories/ArticleCategory/ArticleCategory";

type CarouselProps = {
  categories: Category[];
};

export const Carousel = ({ categories }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setActiveIndex((prev) =>
      direction === "left"
        ? Math.max(0, prev - 1)
        : Math.min(prev + 1, categories.length - 1)
    );
  };

  const goToSlide = (index: number) => {
    if (!carouselRef.current) return;

    const scrollAmount = index * carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });

    setActiveIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-dots">
        {categories.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="carousel">
        <button
          className="carousel__button left"
          onClick={() => scroll("left")}
          disabled={activeIndex === 0}
        >
          <ArrowLeft />
        </button>
        <div className="carousel__track" ref={carouselRef}>
          {categories.map((category) => (
            <ArticleCategory key={category.id} {...category} />
          ))}
        </div>
        <button
          className="carousel__button right"
          onClick={() => scroll("right")}
          disabled={activeIndex === categories.length - 1}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
