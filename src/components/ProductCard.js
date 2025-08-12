import React from "react";
import "../styles/productCard.css";

const ProductCard = ({ selectedCategory, selectedSubCategory, products }) => {
  // Decide which products to show
  let displayProducts = [];

  if (selectedSubCategory) {
    // If subcategory selected → only those products
    displayProducts = products[selectedSubCategory] || [];
  } else if (selectedCategory === "all") {
    // If 'All Products' selected → merge all products
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
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-content">
              <h2 className="product-title">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              {product.enquire && (
                <button className="enquire-button">Enquire Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
