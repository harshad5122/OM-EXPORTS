import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import '../styles/home.css';

import heroImage from '../assets/images/slide1.jpg';
import serviceImage1 from '../assets/images/product-sourcing.jpg';
import serviceImage2 from '../assets/images/quality-control.jpg';
import serviceImage3 from '../assets/images/slide3.jpg';
import bgImage2 from '../assets/images/business.jpg';
import bgImage1 from '../assets/images/shipping.jpg';
import worldMap from '../assets/images/map3.jpg';


import packageIcon from '../assets/icons/package.png';
import logisticsIcon from '../assets/icons/logistics.png';
import qualityIcon from '../assets/icons/quality.png';


const Home = () => {
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
          observer.unobserve(entry.target); // Stop observing once visible
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
              <h1>Global Export Solutions</h1>
              <p>Connecting India to the world with premium quality products and reliable logistics services</p>
              <div className="hero-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container text-center">
          <h2 className="about-headings">
            {"Empowering Global Trade"}<br />{"With Indian Excellence"}
          </h2>
          <p className="about-subtext">
            OM Exports is your trusted gateway to premium Indian products across the globe. With a focus on quality, reliability, and timely delivery, we simplify international trade and ensure satisfaction with every shipment.
          </p>
          <button className="about-btn">About Us ➞</button>

          <div className="about-services">
            <div className="about-card">
              <div className="about-icon">
                <img src={packageIcon} alt="Export Packaging Icon" />
                </div>
              <h3>Export-Ready Packaging</h3>
              <p>Our products are securely packed to meet global compliance and withstand international transit.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <img src={logisticsIcon} alt="Worldwide Shipping Icon" />
                </div>
              <h3>Worldwide Shipping</h3>
              <p>We export to over 30 countries with reliable logistics partnerships ensuring timely delivery.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <img src={qualityIcon} alt="Quality Assured Icon" />
                </div>
              <h3>Quality Assured Products</h3>
              <p>Every item is hand-checked and certified to meet the standards expected by international buyers.</p>
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
          <img src={bgImage1} alt="Export Office" />
        </div>
        <div className="impact-image-2">
          <img src={bgImage2} alt="Business Meeting" />
        </div>
      </div>
      <div className="impact-text">
        <h2>Empowering Global Trade<br />with Excellence</h2>
        <p>At OM Exports, we specialize in delivering high-quality Indian goods to clients worldwide. From textiles to handicrafts, we ensure timely delivery, reliable service, and unmatched value.</p>
        <button className="impact-btn">Get Your Place →</button>
      </div>
    </div>
  </div>
</section>

{/* Export Excellence Section */}
<section className="export-excellence">
  <div className="export-container">
    
    {/* Left Content */}
    <div className="export-left">
      <h2>
        Delivering Excellence in <br />
        Global Trade Solutions
      </h2>
      <p>
        At OM Exports, we provide secure, efficient, and quality-driven export 
        solutions that meet international standards. From custom packaging to 
        reliable global shipping, we ensure your products arrive safely and on time.
      </p>

      <div className="export-features">
        <div className="feature-item">
          <div className="feature-icon">
            <img src={packageIcon} alt="Packaging" />
          </div>
          <span>Export-Ready Packaging</span>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <img src={logisticsIcon} alt="Logistics" />
          </div>
          <span>Worldwide Shipping</span>
        </div>
      </div>

      <button className="export-btn">Learn More →</button>
    </div>

    {/* Right Image */}
    <div className="export-right">
      <div className="export-image">
        <img src={worldMap} alt="Global Trade" />
        <div className="export-overlay-card">
          <h4>Quality You Can Trust</h4>
          <p>
            Certified products, inspected and packed to withstand 
            international transit without compromise.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


     {/* Services Section */}
<section className="services-section">
  <div className="container">
    <div className="section-header">
      <span className="section-badge">Our Services</span>
      <h2>Complete Export Solutions</h2>
      <p>From sourcing to delivery, we handle every aspect of your export requirements</p>
    </div>

    <div className="services-grid">
      <div ref={addToRefs} className="service-card fade-in">
        <div className="service-image">
          <img
            src={serviceImage1}
            alt="Product Sourcing"
            loading="lazy"
            width="400"
            height="250"
          />
        </div>
        <div className="service-content">
          <h3>Product Sourcing</h3>
          <p>We source the finest quality products from trusted manufacturers across India</p>
          <button className="service-btn">Learn More →</button>
        </div>
      </div>

      <div ref={addToRefs} className="service-card fade-in">
        <div className="service-image">
          <img
            src={serviceImage2}
            alt="Quality Control"
            loading="lazy"
            width="400"
            height="250"
          />
        </div>
        <div className="service-content">
          <h3>Quality Control</h3>
          <p>Rigorous quality checks ensure only the best products reach our international clients</p>
          <button className="service-btn">Learn More →</button>
        </div>
      </div>

      <div ref={addToRefs} className="service-card fade-in">
        <div className="service-image">
          <img
            src={serviceImage3}
            alt="Logistics"
            loading="lazy"
            width="400"
            height="250"
          />
        </div>
        <div className="service-content">
          <h3>Global Logistics</h3>
          <p>Efficient shipping and logistics solutions for timely delivery worldwide</p>
          <button className="service-btn">Learn More →</button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Looking for a Trusted Export Partner from India?</h2>
            <p>Join hands with OM Exports – your reliable source for quality products, timely delivery, and personalized export solutions tailored for global businesses.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Quote</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
{/* 
      <Footer /> */}
    </div>
  );
};

export default Home;