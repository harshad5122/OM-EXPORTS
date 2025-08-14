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
  { id: "all", nameKey: "products.data.category.all" },
  { id: "agriculture", nameKey: "products.data.category.agriculture" },
  { id: "textiles", nameKey: "products.data.category.textiles" },
  { id: "handicrafts", nameKey: "products.data.category.handicrafts" },
  { id: "industrial", nameKey: "products.data.category.industrial" },
  { id: "health", nameKey: "products.data.category.health" }
];


export const subCategories = {
  agriculture: [
    { id: "spices", nameKey: "products.data.subCategory.spices", icon: spicesIcon },
    { id: "pulses", nameKey: "products.data.subCategory.pulses", icon: pulsesIcon },
    { id: "fruits", nameKey: "products.data.subCategory.fruits", icon: fruitsIcon },
    { id: "vegetables", nameKey: "products.data.subCategory.vegetables", icon: vegetablesIcon }
  ],
  textiles: [
    { id: "cotton", nameKey: "products.data.subCategory.cotton", icon: cottonIcon},
    { id: "silk", nameKey: "products.data.subCategory.silk", icon: silkIcon },
    { id: "garments", nameKey: "products.data.subCategory.garments", icon: garmentsIcon }
  ],
  handicrafts: [
    { id: "decor", nameKey: "products.data.subCategory.decor", icon: decorIcon },
    { id: "furniture", nameKey: "products.data.subCategory.furniture", icon: furnitureIcon }
  ],
  industrial: [
    { id: "machinery", nameKey: "products.data.subCategory.machinery", icon: machineryIcon },
    { id: "tools", nameKey: "products.data.subCategory.tools", icon: toolsIcon }
  ],
  health: [
    { id: "herbal", nameKey: "products.data.subCategory.herbal", icon: herbalIcon },
    { id: "supplements", nameKey: "products.data.subCategory.supplements", icon: supplementsIcon }
  ]
};

export const products = {
  spices: [
    {
      id: "sp01",
      nameKey: "products.data.product.sp01.name",
      descriptionKey: "products.data.product.sp01.description",
      image: turmericImg,
      enquire: true
    },
    {
      id: "sp02",
      nameKey: "products.data.product.sp02.name",
      descriptionKey: "products.data.product.sp02.description",
      image: cinnamonImg,
      enquire: true
    },
    {
      id: "sp03",
      nameKey: "products.data.product.sp03.name",
      descriptionKey: "products.data.product.sp03.description",
      image: cuminImg,
      enquire: true
    },
    {
      id: "sp04",
      nameKey: "products.data.product.sp04.name",
      descriptionKey: "products.data.product.sp04.description",
      image: corianderImg,
      enquire: true
    },
    {
      id: "sp05",
      nameKey: "products.data.product.sp05.name",
      descriptionKey: "products.data.product.sp05.description",
      image: redChilliImg,
      enquire: true
    },
    {
      id: "sp06",
      nameKey: "products.data.product.sp06.name",
      descriptionKey: "products.data.product.sp06.description",
      image: blackPepperImg,
      enquire: true
    },
    {
      id: "sp07",
      nameKey: "products.data.product.sp07.name",
      descriptionKey: "products.data.product.sp07.description",
      image: cardamomImg,
      enquire: true
    }
  ],
  pulses: [
    {
      id: "pu01",
      nameKey: "products.data.product.pu01.name",
      descriptionKey: "products.data.product.pu01.description",
      image: lentilsImg,
      enquire: true
    },
    {
      id: "pu02",
      nameKey: "products.data.product.pu02.name",
      descriptionKey: "products.data.product.pu02.description",
      image: basmatiRiceImg,
      enquire: true
    },
    {
      id: "pu03",
      nameKey: "products.data.product.pu03.name",
      descriptionKey: "products.data.product.pu03.description",
      image: nonBasmatiRiceImg,
      enquire: true
    },
    {
      id: "pu04",
      nameKey: "products.data.product.pu04.name",
      descriptionKey: "products.data.product.pu04.description",
      image: chickpeasImg,
      enquire: true
    }
  ],
  fruits: [
    {
      id: "fr01",
      nameKey: "products.data.product.fr01.name",
      descriptionKey: "products.data.product.fr01.description",
      image: mangoesImg,
      enquire: true
    },
    {
      id: "fr02",
      nameKey: "products.data.product.fr02.name",
      descriptionKey: "products.data.product.fr02.description",
      image: bananasImg,
      enquire: true
    },
    {
      id: "fr03",
      nameKey: "products.data.product.fr03.name",
      descriptionKey: "products.data.product.fr03.description",
      image: grapesImg,
      enquire: true
    },
    {
      id: "fr04",
      nameKey: "products.data.product.fr04.name",
      descriptionKey: "products.data.product.fr04.description",
      image: pomegranatesImg,
      enquire: true
    }
  ],
  vegetables: [
    {
      id: "ve01",
      nameKey: "products.data.product.ve01.name",
      descriptionKey: "products.data.product.ve01.description",
      image: onionsImg,
      enquire: true
    },
    {
      id: "ve02",
      nameKey: "products.data.product.ve02.name",
      descriptionKey: "products.data.product.ve02.description",
      image: potatoesImg,
      enquire: true
    },
    {
      id: "ve03",
      nameKey: "products.data.product.ve03.name",
      descriptionKey: "products.data.product.ve03.description",
      image: tomatoesImg,
      enquire: true
    },
    {
      id: "ve04",
      nameKey: "products.data.product.ve04.name",
      descriptionKey: "products.data.product.ve04.description",
      image: okraImg,
      enquire: true
    }
  ],
  cotton: [
    {
      id: "ct01",
      nameKey: "products.data.product.ct01.name",
      descriptionKey: "products.data.product.ct01.description",
      image: cotton_fabricImg,
      enquire: true
    }
  ],

  garments: [
    {
      id: "rg01",
      nameKey: "products.data.product.rg01.name",
      descriptionKey: "products.data.product.rg01.description",
      image: tShirtImg,
      enquire: true
    },
    {
      id: "rg02",
      nameKey: "products.data.product.rg02.name",
      descriptionKey: "products.data.product.rg02.description",
      image: kurtiImg,
      enquire: true
    },
    {
      id: "rg03",
      nameKey: "products.data.product.rg03.name",
      descriptionKey: "products.data.product.rg03.description",
      image: sareeImg,
      enquire: true
    },
    {
      id: "rg04",
      nameKey: "products.data.product.rg04.name",
      descriptionKey: "products.data.product.rg04.description",
      image: scarfImg,
      enquire: true
    },
    {
      id: "rg05",
      nameKey: "products.data.product.rg05.name",
      descriptionKey: "products.data.product.rg05.description",
      image: shawlImg,
      enquire: true
    }
  ],
};