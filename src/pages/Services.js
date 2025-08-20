// src/pages/Services.js
import React, { useEffect } from "react";
import "../styles/services.css";
// import backgroundImage from "../assets/images/shiping.jpg";
import backgroundImage from "../assets/optimized/images/shiping.webp";
import {
  FaBoxes,
  FaCheckCircle,
  FaBoxOpen,
  FaFileInvoice,
  FaTruckMoving,
  FaTags,
} from "react-icons/fa";
// Import the useLanguage hook
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';


const Services = () => {

  const { t } = useLanguage();

  const rawServicesData = [
    {
      icon: <FaBoxes />,
      titleKey: "services.card1.title",
      descriptionKey: "services.card1.description",
    },
    {
      icon: <FaCheckCircle />,
      titleKey: "services.card2.title",
      descriptionKey: "services.card2.description",
    },
    {
      icon: <FaBoxOpen />,
      titleKey: "services.card3.title",
      descriptionKey: "services.card3.description",
    },
    {
      icon: <FaFileInvoice />,
      titleKey: "services.card4.title",
      descriptionKey: "services.card4.description",
    },
    {
      icon: <FaTruckMoving />,
      titleKey: "services.card5.title",
      descriptionKey: "services.card5.description",
    },
    {
      icon: <FaTags />,
      titleKey: "services.card6.title",
      descriptionKey: "services.card6.description",
    },
  ];

  // Map the raw data to include translated titles and descriptions
  const servicesData = rawServicesData.map(item => ({
    icon: item.icon,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
  }));

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const revealOnScroll = () => {
      const triggerPoint = window.innerHeight * 0.85;
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerPoint) {
          card.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section
        className="services-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="overlay">
          <h1 className="services-heading">{t('services.heroHeading')}</h1>
          <p className="services-subheading">
            {t('services.heroSubheading')}
          </p>
        </div>
      </section>

      {/* Our Services Grid */}
      <section className="our-services">
        <h2 className="section-title">{t('services.sectionTitle')}</h2>
        <div className="services-bg-shape">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">{t('services.ctaTitle')}</h2>
        <p className="cta-text">
          {t('services.ctaText')}
        </p>
        {/* <button className="cta-button">{t('services.ctaButton')}</button> */}
        <Link to="/inquiry" className="cta-button">
          {t('services.ctaButton')}
        </Link>
      </section>
    </div>
  );
};

export default Services;