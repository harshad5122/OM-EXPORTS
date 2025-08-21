// src/components/CategorySlider.js
import React, { useRef } from "react";
import "../styles/categorySlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../LanguageContext"; // Import useLanguage

const CategorySlider = ({ categories, selectedCategory, onSelectCategory }) => {
    const sliderRef = useRef(null);
    const { t } = useLanguage(); // Get the translation function

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
       <div className="category-slider-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft}>
        <FaChevronLeft />
      </button>
    <div className="category-slider-container" ref={sliderRef}>
      <div className="category-slider">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${
              selectedCategory === cat.id ? "active" : ""
            }`}
            // onClick={() => onSelectCategory(cat.id)}
            onClick={(e) => {
        onSelectCategory(cat.id);
        // Auto scroll selected button into view
        e.target.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }}
          >
            {t(cat.nameKey)}
            {selectedCategory === cat.id && <span className="underline"></span>}
          </button>
        ))}
      </div>
    </div>
    <button className="scroll-btn right" onClick={scrollRight}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CategorySlider;