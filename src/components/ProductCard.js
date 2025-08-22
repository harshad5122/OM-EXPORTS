// src/components/ProductCard.js
import React, { useState } from "react";
import "../styles/productCard.css";
import { useLanguage } from "../LanguageContext"; 
import Inquire from "./Inquire";

const ProductCard = ({ selectedCategory, selectedSubCategory, products }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const { t } = useLanguage(); 
  let displayProducts = [];

  if (selectedSubCategory) {
    displayProducts = products[selectedSubCategory] || [];
  } else if (selectedCategory === "all") {
    displayProducts = Object.values(products).flat();
  }

  if (displayProducts.length === 0) return null;

  return (
    <>
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
                <button className="enquire-button" onClick={() => setIsPopupOpen(true)}>{t('products.enquireNow')}</button>
                </div>
              )}
            
          </div>
        ))}
      </div>
    </div>
    <Inquire isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default ProductCard;