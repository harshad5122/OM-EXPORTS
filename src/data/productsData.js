// src/data/productsData.js
import spicesIcon from "../assets/images/icons/spices.png";
import fruitsIcon from "../assets/images/icons/fruits.png";
import vegetablesIcon from "../assets/images/icons/Vegetables.png";
import pulsesIcon from "../assets/images/icons/pulses.png";
import cottonIcon from "../assets/images/icons/cotton.jpg";
import silkIcon from "../assets/images/icons/silk.jpg";
import garmentsIcon from "../assets/images/icons/garments.jpg";
import decorIcon from "../assets/images/icons/decor.jpg";
import furnitureIcon from "../assets/images/icons/furniture.jpg";
import machineryIcon from "../assets/images/icons/machinery.jpg";
import toolsIcon from "../assets/images/icons/tools.jpg";
import herbalIcon from "../assets/images/icons/herbal.jpg";
import supplementsIcon from "../assets/images/icons/supplements.jpg";


import turmericImg from "../assets/images/products/turmeric.jpg";
import cinnamonImg from "../assets/images/products/cinnamon.jpg";
import cuminImg from "../assets/images/products/cumin.jpg"; 
import corianderImg from "../assets/images/products/coriander.jpg"; 
import redChilliImg from "../assets/images/products/red_chilli.jpg"; 
import blackPepperImg from "../assets/images/products/black_pepper.jpg"; 
import cardamomImg from "../assets/images/products/cardamom.jpg"; 

import basmatiRiceImg from "../assets/images/products/basmati_rice.jpg"; 
import nonBasmatiRiceImg from "../assets/images/products/non_basmati_rice.jpg"; 
import chickpeasImg from "../assets/images/products/chickpeas.jpg";
import lentilsImg from "../assets/images/products/lentils.jpg";

import mangoesImg from "../assets/images/products/mangoes.jpg"; 
import bananasImg from "../assets/images/products/bananas.jpg"; 
import grapesImg from "../assets/images/products/grapes.jpg"; 
import pomegranatesImg from "../assets/images/products/pomegranates.jpg"; 

import onionsImg from "../assets/images/products/onions.jpg"; 
import potatoesImg from "../assets/images/products/potatoes.jpg"; 
import tomatoesImg from "../assets/images/products/tomatoes.jpg"; 
import okraImg from "../assets/images/products/okra.jpg"; 

import tShirtImg from "../assets/images/products/t_shirt.jpg"; 
import kurtiImg from "../assets/images/products/kurti.jpg"; 
import sareeImg from "../assets/images/products/saree.jpg"; 
import scarfImg from "../assets/images/products/scarf.jpg"; 
import shawlImg from "../assets/images/products/shawl.jpg"; 

import cotton_fabricImg from "../assets/images/products/cotton_fabric.jpg";

export const categories = [
  { id: "all", name: "All Products" },
  { id: "agriculture", name: "Agriculture & Food Products" },
  { id: "textiles", name: "Textiles & Garments" },
  { id: "handicrafts", name: "Handicrafts & Home Decor" },
  { id: "industrial", name: "Industrial & Engineering Goods" },
  { id: "health", name: "Health & Wellness" }
];


export const subCategories = {
  agriculture: [
    { id: "spices", name: "Spices & Herbs", icon: spicesIcon },
    { id: "pulses", name: "Pulses & Grains", icon: pulsesIcon },
    { id: "fruits", name: "Fresh Fruits", icon: fruitsIcon },
    { id: "vegetables", name: "Vegetables", icon: vegetablesIcon }
  ],
  textiles: [
    { id: "cotton", name: "Cotton Fabrics", icon: cottonIcon},
    { id: "silk", name: "Silk & Blends", icon: silkIcon },
    { id: "garments", name: "Ready Garments", icon: garmentsIcon }
  ],
  handicrafts: [
    { id: "decor", name: "Home Decor", icon: decorIcon },
    { id: "furniture", name: "Handcrafted Furniture", icon: furnitureIcon }
  ],
  industrial: [
    { id: "machinery", name: "Machinery", icon: machineryIcon },
    { id: "tools", name: "Industrial Tools", icon: toolsIcon }
  ],
  health: [
    { id: "herbal", name: "Herbal Products", icon: herbalIcon },
    { id: "supplements", name: "Supplements", icon: supplementsIcon }
  ]
};

export const products = {
  spices: [
    {
      id: "sp01",
      name: "Premium Organic Turmeric",
      description: "Rich in flavor and color, sourced from the finest farms.",
      image: turmericImg,
      enquire: true
    },
    {
      id: "sp02",
      name: "Pure Ceylon Cinnamon",
      description: "Aromatic and flavorful, perfect for culinary excellence.",
      image: cinnamonImg,
      enquire: true
    },
    {
      id: "sp03",
      name: "Natural Cumin Seeds",
      description: "Highly aromatic cumin seeds, essential for Indian and Middle Eastern cuisine. Available in whole and ground forms.",
      image: cuminImg,
      enquire: true
    },
    {
      id: "sp04",
      name: "Organic Coriander Powder",
      description: "Finely ground coriander, offering a fresh, citrusy, and earthy flavor. Ideal for curries and spice blends.",
      image: corianderImg,
      enquire: true
    },
    {
      id: "sp05",
      name: "Fiery Red Chilli Powder",
      description: "Premium quality red chilli powder, known for its vibrant color and intense heat. Adds a kick to any dish.",
      image: redChilliImg,
      enquire: true
    },
    {
      id: "sp06",
      name: "Bold Black Pepper Corns",
      description: "Whole black peppercorns, delivering a pungent and spicy flavor. Freshly ground for maximum aroma.",
      image: blackPepperImg,
      enquire: true
    },
    {
      id: "sp07",
      name: "Fragrant Cardamom Pods",
      description: "Green cardamom pods, prized for their intense, sweet-spicy aroma. Essential for desserts and savory dishes.",
      image: cardamomImg,
      enquire: true
    }
  ],
  pulses: [
    {
      id: "pu01",
      name: "Golden Lentils",
      description: "High-protein lentils with a golden hue, premium quality.",
      image: lentilsImg,
      enquire: true
    },
    {
      id: "pu02",
      name: "Premium Basmati Rice",
      description: "Long-grain, aromatic Basmati rice, known for its delicate texture and fragrance. Perfect for biryanis and pilafs.",
      image: basmatiRiceImg,
      enquire: true
    },
    {
      id: "pu03",
      name: "Nutritious Non-Basmati Rice",
      description: "Versatile and wholesome non-Basmati rice varieties, suitable for everyday meals. Available in various types.",
      image: nonBasmatiRiceImg,
      enquire: true
    },
    {
      id: "pu04",
      name: "Healthy Chickpeas (Chana)",
      description: "High-fiber and protein-rich chickpeas, perfect for curries, salads, and hummus. Sourced responsibly.",
      image: chickpeasImg,
      enquire: true
    }
  ],
  fruits: [
    {
      id: "fr01",
      name: "Farm Fresh Mangoes",
      description: "Juicy, sweet, and aromatic mangoes, directly from our farms. Seasonal availability.",
      image: mangoesImg,
      enquire: true
    },
    {
      id: "fr02",
      name: "Organic Bananas",
      description: "Naturally sweet and energy-rich bananas. Perfect for healthy snacking and culinary use.",
      image: bananasImg,
      enquire: true
    },
    {
      id: "fr03",
      name: "Sweet Grapes",
      description: "Crisp and juicy grapes, ideal for fresh consumption or winemaking.",
      image: grapesImg,
      enquire: true
    },
    {
      id: "fr04",
      name: "Delicious Pomegranates",
      description: "Ruby red pomegranates, bursting with flavor and antioxidants. Great for juices and salads.",
      image: pomegranatesImg,
      enquire: true
    }
  ],
  vegetables: [
    {
      id: "ve01",
      name: "Fresh Onions",
      description: "High-quality onions, known for their sharp flavor and crisp texture. Essential for various cuisines.",
      image: onionsImg,
      enquire: true
    },
    {
      id: "ve02",
      name: "Quality Potatoes",
      description: "Versatile potatoes, suitable for frying, boiling, or baking. Farm-fresh and nutritious.",
      image: potatoesImg,
      enquire: true
    },
    {
      id: "ve03",
      name: "Red Tomatoes",
      description: "Ripe, juicy tomatoes, perfect for sauces, salads, and cooking. Rich in vitamins.",
      image: tomatoesImg,
      enquire: true
    },
    {
      id: "ve04",
      name: "Tender Okra (Ladyfinger)",
      description: "Fresh and tender okra, ideal for stir-fries and curries. Known for its unique texture.",
      image: okraImg,
      enquire: true
    }
  ],
  cotton: [
    {
      id: "ct01",
      name: "Luxury Cotton Fabric",
      description: "Soft, durable, and ethically sourced premium cotton.",
      image: cotton_fabricImg,
      enquire: true
    }
  ],

  garments: [
    {
      id: "rg01",
      name: "Stylish T-Shirts",
      description: "Comfortable and trendy T-shirts for all ages, made from high-quality cotton blends.",
      image: tShirtImg,
      enquire: true
    },
    {
      id: "rg02",
      name: "Elegant Kurtis",
      description: "Traditional yet modern Kurtis, featuring intricate designs and comfortable fabrics.",
      image: kurtiImg,
      enquire: true
    },
    {
      id: "rg03",
      name: "Exquisite Sarees",
      description: "Handcrafted sarees, showcasing rich Indian textile heritage with various patterns and fabrics.",
      image: sareeImg,
      enquire: true
    },
    {
      id: "rg04",
      name: "Fashionable Scarves",
      description: "Versatile scarves in various materials and prints, perfect for adding a touch of style.",
      image: scarfImg,
      enquire: true
    },
    {
      id: "rg05",
      name: "Warm Shawls",
      description: "Soft and warm shawls, ideal for colder climates or as a stylish accessory.",
      image: shawlImg,
      enquire: true
    }
  ],
};