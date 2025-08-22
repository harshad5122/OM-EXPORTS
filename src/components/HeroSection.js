import React from 'react';
import { useLanguage } from '../LanguageContext';
import "../styles/HeroSection.css";

const HeroSection = ({ backgroundImage, pageName }) => {
  const { t } = useLanguage();
  
  return (
    <section 
      className="common-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="overlay">
        <h1 className="hero-heading">OM EXPORTS | {t(`${pageName}.heroHeading`)}</h1>
        {/* <p className="hero-subheading">
          {t(`${pageName}.heroSubheading`)}
        </p> */}
      </div>
    </section>
  );
};

export default HeroSection;