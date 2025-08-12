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

import lentilsImg from "../assets/images/products/lentils.jpg";
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
  ]
};