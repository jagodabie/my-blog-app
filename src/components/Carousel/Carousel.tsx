import { useState, useRef } from "react";
import { ArticleCategory } from "../ArticlesCategoriesSection/articleCategory/ArticleCategory/ArticleCategory";
import { Category } from "@/lib";

import "./index.css";
type CarouselProps = {
  categories: Category[];
};

export const Carousel = ({ categories }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth;
    if (direction === "left") {
      carouselRef.current.scrollLeft -= scrollAmount;
    } else {
      carouselRef.current.scrollLeft += scrollAmount;
    }

    const newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    setActiveIndex(Math.max(0, Math.min(newIndex, categories.length - 1)));
  };

  const goToSlide = (index: number) => {
    if (!carouselRef.current) return;

    const scrollAmount = index * carouselRef.current.offsetWidth;
    carouselRef.current.scrollLeft = scrollAmount;
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
        >
          ❮
        </button>
        <div className="carousel__track" ref={carouselRef}>
          {categories.map((category, index) => (
            <ArticleCategory key={index} {...category} />
          ))}
        </div>
        <button
          className="carousel__button right"
          onClick={() => scroll("right")}
        >
          ❯
        </button>
      </div>
    </div>
  );
};
