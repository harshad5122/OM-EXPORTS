
// src/pages/Products.js
import React, { useState } from "react";
import "../styles/products.css";
// Ensure you have an appropriate image for your hero section background
import backgroundImage from "../assets/images/shiping.jpg"; 

import CategorySlider from "../components/CategorySlider";
import SubCategoryGrid from "../components/SubCategoryGrid";
import ProductCard from "../components/ProductCard";

// Importing data
import { categories, subCategories, products } from "../data/productsData";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // Handler for category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Reset subcategory when a new main category is selected
    setSelectedSubCategory(null);
  };

  // Handler for subcategory selection
  const handleSubCategorySelect = (subcategoryId) => {
    setSelectedSubCategory(subcategoryId);
  };

  return (
    <div className="products-container">
      {/* Hero Section */}
      <section
        className="products-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="overlay">
          <h1 className="products-heading">Products</h1>
          <p className="products-subheading">
            
 Supplying quality products to customers across the globe.
          </p>
        </div>
      </section>

      {/* Category Slider */}
      <CategorySlider
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* SubCategory Grid - Conditionally rendered based on selectedCategory */}
      {selectedCategory !== "all" && (
        <SubCategoryGrid
          selectedCategory={selectedCategory}
          subCategories={subCategories}
          onSelectSubCategory={handleSubCategorySelect}
        />
      )}

      {/* Product Cards - Always rendered, but content changes based on selections */}
      {/* Show products if a subcategory is selected OR if "All Products" is selected */}
      {(selectedSubCategory || selectedCategory === "all") && (
        <ProductCard
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          products={products}
        />
      )}
    </div>
  );
};

export default Products;