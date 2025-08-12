import React from "react";
import "../styles/subCategoryGrid.css";

const SubCategoryGrid = ({ selectedCategory, subCategories, onSelectSubCategory }) => {
  if (!selectedCategory || !subCategories[selectedCategory]) return null;

  return (
    <div className="subcategory-grid-container">
      <div className="subcategory-grid">
        {subCategories[selectedCategory].map((sub, index) => (
          <div
            key={sub.id}
            className="subcategory-card"
            style={{ animationDelay: `${index * 0.15}s` }}
            onClick={() => onSelectSubCategory(sub.id)} // ✅ When clicked, set subcategory
          >
            <div className="subcategory-icon">
              <img src={sub.icon} alt={sub.name} />
            </div>
            <h3>{sub.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryGrid;
