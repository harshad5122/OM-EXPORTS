// src/pages/Products.js
import React, { useState } from "react";
import "../styles/products.css";
import backgroundImage from "../assets/images/shiping.jpg"; 

import CategorySlider from "../components/CategorySlider";
import SubCategoryGrid from "../components/SubCategoryGrid";
import ProductCard from "../components/ProductCard";


import { categories, subCategories, products } from "../data/productsData";

// Import useLanguage hook
import { useLanguage } from '../LanguageContext'; // Assuming LanguageContext.js is in the parent directory of 'pages'

const Products = () => {
  // Get the translation function from the LanguageContext
  const { t } = useLanguage();

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
          {/* Translated static text */}
          <h1 className="products-heading">{t('products.heroHeading')}</h1>
          <p className="products-subheading">
            {t('products.heroSubheading')}
          </p>
        </div>
      </section>

   
      <CategorySlider
        categories={categories} 
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      {selectedCategory !== "all" && (
        <SubCategoryGrid
          selectedCategory={selectedCategory}
          subCategories={subCategories}
          onSelectSubCategory={handleSubCategorySelect}
        />
      )}

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