// src/components/ProductCard.js
import React from "react";
import "../styles/productCard.css";
import { useLanguage } from "../LanguageContext"; // Import useLanguage

const ProductCard = ({ selectedCategory, selectedSubCategory, products }) => {
  const { t } = useLanguage(); // Get the translation function

  // Decide which products to show
  let displayProducts = [];

  if (selectedSubCategory) {
    // If subcategory selected → only those products
    displayProducts = products[selectedSubCategory] || [];
  } else if (selectedCategory === "all") {
    // If 'All Products' selected → merge all products from all subcategories
    displayProducts = Object.values(products).flat();
  }

  // If no products to display
  if (displayProducts.length === 0) return null;

  return (
    <div className="product-card-container">
      <div className="product-card-grid">
        {displayProducts.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="product-image">
              {/* Use t() for alt text based on nameKey */}
              <img src={product.image} alt={t(product.nameKey)} />
            </div>
            <div className="product-content">
              {/* Use t() to translate the product name based on nameKey */}
              <h2 className="product-title">{t(product.nameKey)}</h2>
              {/* Use t() to translate the product description based on descriptionKey */}
              <p className="product-description">{t(product.descriptionKey)}</p>
              {product.enquire && (
                <button className="enquire-button">{t('products.enquireNow')}</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;