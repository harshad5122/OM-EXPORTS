// src/components/SubCategoryGrid.js
import React from "react";
import "../styles/subCategoryGrid.css";
import { useLanguage } from "../LanguageContext"; // Import useLanguage

const SubCategoryGrid = ({ selectedCategory, subCategories, onSelectSubCategory }) => {
  const { t } = useLanguage(); // Get the translation function

  if (!selectedCategory || !subCategories[selectedCategory]) return null;

  return (
    <div className="subcategory-grid-container">
      <div className="subcategory-grid">
        {subCategories[selectedCategory].map((sub, index) => (
          <div
            key={sub.id}
            className="subcategory-card"
            style={{ animationDelay: `${index * 0.15}s` }}
            onClick={() => onSelectSubCategory(sub.id)}
          >
            <div className="subcategory-icon">
              {/* Use t() for alt text based on nameKey */}
              <img src={sub.icon} alt={t(sub.nameKey)} />
            </div>
            {/* Use t() to translate the subcategory name based on nameKey */}
            <h3>{t(sub.nameKey)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryGrid;