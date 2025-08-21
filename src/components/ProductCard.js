// src/components/ProductCard.js
import React from "react";
import "../styles/productCard.css";
import { useLanguage } from "../LanguageContext"; 

const ProductCard = ({ selectedCategory, selectedSubCategory, products }) => {
  const { t } = useLanguage(); 
  let displayProducts = [];

  if (selectedSubCategory) {
    displayProducts = products[selectedSubCategory] || [];
  } else if (selectedCategory === "all") {
    displayProducts = Object.values(products).flat();
  }

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
              <img src={product.image} alt={t(product.nameKey)} />
            </div>
            <div className="product-content">
              <h2 className="product-title">{t(product.nameKey)}</h2>
              <p className="product-description">{t(product.descriptionKey)}</p>
                 </div>
              {product.enquire && (
                <div className="product-footer">
                <button className="enquire-button">{t('products.enquireNow')}</button>
                </div>
              )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;