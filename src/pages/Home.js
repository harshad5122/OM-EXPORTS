import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import '../styles/home.css';
import { useLanguage } from '../LanguageContext'; 
import { Link } from 'react-router-dom';

// import heroImage from '../assets/images/slide1.jpg';
// import serviceImage1 from '../assets/images/product-sourcing.jpg';
// import serviceImage2 from '../assets/images/quality-control.jpg';
// import serviceImage3 from '../assets/images/slide3.jpg';
// import bgImage2 from '../assets/images/business.jpg';
// import bgImage1 from '../assets/images/shipping.jpg';
// import worldMap from '../assets/images/map3.jpg';

import heroImage from '../assets/optimized/images/slide1.webp';
import serviceImage1 from '../assets/optimized/images/product-sourcing.webp';
import serviceImage2 from '../assets/optimized/images/quality-control.webp';
import serviceImage3 from '../assets/optimized/images/slide3.webp';
import bgImage2 from '../assets/optimized/images/business.webp';
import bgImage1 from '../assets/optimized/images/shipping.webp';
import worldMap from '../assets/optimized/images/map3.webp';


import packageIcon from '../assets/optimized/icons/package.webp';
import logisticsIcon from '../assets/optimized/icons/logistics.webp';
import qualityIcon from '../assets/optimized/icons/quality.webp';

const Home = () => {
  const { t } = useLanguage(); // Get translation function
  const serviceRefs = useRef([]);
  serviceRefs.current = [];

  const addToRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1>{t('home.heroTitle')}</h1>
              <p>{t('home.heroSubtitle')}</p>
              <div className="hero-buttons">
                <button className="btn-primary">{t('home.getStarted')}</button>
                <button className="btn-secondary">{t('home.learnMore')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container text-center"> 
          <h2 className="about-headings">
            {t('home.aboutHeading')}
          </h2>
          <p className="about-subtext">
            {t('home.aboutDescription')}
          </p>
          {/* <button className="about-btn">{t('home.aboutButton')} ➞</button> */}
          <Link to="/about" className="about-btn">{t('home.aboutButton')} ➞</Link>

          <div className="about-services">
            <div className="about-card">
              <div className="about-icon">
                <img src={packageIcon} alt={t('home.packageAlt')} />
              </div>
              <h3>{t('home.packageTitle')}</h3>
              <p>{t('home.packageDescription')}</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <img src={logisticsIcon} alt={t('home.logisticsAlt')} />
              </div>
              <h3>{t('home.logisticsTitle')}</h3>
              <p>{t('home.logisticsDescription')}</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <img src={qualityIcon} alt={t('home.qualityAlt')} />
              </div>
              <h3>{t('home.qualityTitle')}</h3>
              <p>{t('home.qualityDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-content">
            <div className="impact-images">
              <div className="impact-image-1">
                <img src={bgImage1} alt={t('home.impactImage1Alt')} />
              </div>
              <div className="impact-image-2">
                <img src={bgImage2} alt={t('home.impactImage2Alt')} />
              </div>
            </div>
            <div className="impact-text">
              <h2>{t('home.impactTitle')}</h2>
              <p>{t('home.impactDescription')}</p>
              <button className="impact-btn">{t('home.impactButton')} →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Excellence Section */}
      <section className="export-excellence">
        <div className="export-container">
          <div className="export-left">
            <h2>{t('home.exportTitle')}</h2>
            <p>{t('home.exportDescription')}</p>

            <div className="export-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src={packageIcon} alt={t('home.exportPackageAlt')} />
                </div>
                <span>{t('home.exportPackageTitle')}</span>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <img src={logisticsIcon} alt={t('home.exportLogisticsAlt')} />
                </div>
                <span>{t('home.exportLogisticsTitle')}</span>
              </div>
            </div>

            <button className="export-btn">{t('home.exportButton')} →</button>
          </div>

          <div className="export-right">
            <div className="export-image">
              <img src={worldMap} alt={t('home.exportImageAlt')} />
              <div className="export-overlay-card">
                <h4>{t('home.exportOverlayTitle')}</h4>
                <p>{t('home.exportOverlayDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.servicesBadge')}</span>
            <h2>{t('home.servicesTitle')}</h2>
            <p>{t('home.servicesSubtitle')}</p>
          </div>

          <div className="services-grid">
            <div ref={addToRefs} className="service-card fade-in">
              <div className="service-image">
                <img
                  src={serviceImage1}
                  alt={t('home.service1Alt')}
                  loading="lazy"
                  width="400"
                  height="250"
                />
              </div>
              <div className="service-content">
                <h3>{t('home.service1Title')}</h3>
                <p>{t('home.service1Description')}</p>
                <button className="service-btn">{t('home.serviceButton')} →</button>
              </div>
            </div>

            <div ref={addToRefs} className="service-card fade-in">
              <div className="service-image">
                <img
                  src={serviceImage2}
                  alt={t('home.service2Alt')}
                  loading="lazy"
                  width="400"
                  height="250"
                />
              </div>
              <div className="service-content">
                <h3>{t('home.service2Title')}</h3>
                <p>{t('home.service2Description')}</p>
                <button className="service-btn">{t('home.serviceButton')} →</button>
              </div>
            </div>

            <div ref={addToRefs} className="service-card fade-in">
              <div className="service-image">
                <img
                  src={serviceImage3}
                  alt={t('home.service3Alt')}
                  loading="lazy"
                  width="400"
                  height="250"
                />
              </div>
              <div className="service-content">
                <h3>{t('home.service3Title')}</h3>
                <p>{t('home.service3Description')}</p>
                <button className="service-btn">{t('home.serviceButton')} →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.ctaTitle')}</h2>
            <p>{t('home.ctaDescription')}</p>
            <div className="cta-buttons">
              {/* <button className="btn-primary">{t('home.ctaButton1')}</button>
              <button className="btn-secondary">{t('home.ctaButton2')}</button> */}
              <Link to="/inquiry" className="btn-primary">{t('home.ctaButton1')}</Link>
              {/* Contact Us Button */}
              <Link to="/contact" className="btn-secondary">{t('home.ctaButton2')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;