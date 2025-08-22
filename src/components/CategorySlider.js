import React, { useRef, useState, useEffect } from "react";
import "../styles/categorySlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

const CategorySlider = ({ categories, selectedCategory, onSelectCategory }) => {
  const sliderRef = useRef(null);
  const { t } = useLanguage();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll positions
  const updateArrows = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    const slider = sliderRef.current;
    slider.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      slider.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="category-slider-wrapper">
      {/* Left Arrow */}
      <button
        className={`scroll-btn left ${!canScrollLeft ? "disabled" : ""}`}
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        <FaChevronLeft />
      </button>

      <div className="category-slider-container" ref={sliderRef}>
        <div className="category-slider">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={(e) => {
                onSelectCategory(cat.id);
                e.target.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
            >
              {t(cat.nameKey)}
              {selectedCategory === cat.id && <span className="underline"></span>}
            </button>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className={`scroll-btn right ${!canScrollRight ? "disabled" : ""}`}
        onClick={scrollRight}
        disabled={!canScrollRight}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CategorySlider;
