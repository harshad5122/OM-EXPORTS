import '../styles/about.css';
import backgroundImage from '../assets/images/shiping.jpg';
// import Footer from '../components/Footer';
import product1 from '../assets/images/product-sourcing.jpg';
// import product2 from '../assets/images/slide2.jpg';
import exportImage1 from '../assets/images/maps.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import apedaLogo from '../assets/certificates/apeda.png';
import isoLogo from '../assets/certificates/iso.png';
import fssaiLogo from '../assets/certificates/fssai.png';
import usdaLogo from '../assets/certificates/usda.png';
import halalLogo from '../assets/certificates/halal.png';
import iecLogo from '../assets/certificates/iec.png';
import gstLogo from '../assets/certificates/gst.png';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="about-page">

      {/* Hero section */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="overlay">
          <h1 className="about-heading">About Us</h1>
          <p className="about-subheading">
            At Om Exports, we specialize in bridging markets and forging reliable global trade connections. With decades of combined experience in the import-export industry.
          </p>
        </div>
      </section>


      {/* Premium Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content" data-aos="fade-right">
              <h2>Who We Are</h2>
              <p className="lead-text">
                OM EXPORTS is a premium exporter of high-quality agricultural products with a legacy of excellence.
              </p>
              <div className="features-list">
                <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Global Presence</h4>
                    <p>Exporting to 25+ countries with trusted partnerships</p>
                  </div>
                </div>
                <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Quality Assurance</h4>
                    <p>Stringent quality control at every production stage</p>
                  </div>
                </div>
                <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Sustainable Practices</h4>
                    <p>Ethical sourcing and eco-friendly packaging</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-content" data-aos="fade-left">
              <div className="main-image">
                <img src={product1} alt="Our Global Operations" />
              </div>
              <div className="floating-card" data-aos="fade-up" data-aos-delay="400">
                <div className="card-content">
                  <h3>Driven by Excellence</h3>
                  <p>Delivering quality products and building lasting global partnerships.</p>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number">100%</div>
                      <div className="stat-label">Commitment</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">10+</div>
                      <div className="stat-label">Product Categories</div>
                    </div>
                  </div>
                  {/* <h3>Since 2005</h3>
                  <p>18+ years of trusted global exports</p>
                  <div className="stats-grid"> */}
                  {/* <div className="stat-item">
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Clients</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">25+</div>
                      <div className="stat-label">Countries</div>
                    </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* New Export Services Section */}
      <section className="about-content">
        <div className="content-wrapper">
          <div className="image-section">
            <img src={exportImage1} alt="Global Export Network" />
          </div>
          <div className="text-section">
            <h2>Our Export Services</h2>
            <p>
              OM EXPORTS provides comprehensive export solutions for agricultural commodities.
              Our services include:
            </p>
            <ul className="export-services-list">
              <li>International logistics coordination</li>
              <li>Customs clearance assistance</li>
              <li>Quality inspection & certification</li>
              <li>Documentation & compliance management</li>
              <li>Market analysis & trade consulting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates-section">
        <div className="container">
          <h2 data-aos="fade-up">Our Certifications & Accreditations</h2>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
            Quality assurance through internationally recognized certifications
          </p>

          <div className="certificates-grid">
            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="certificate-logo">
                <img src={apedaLogo} alt="APEDA Certified" />
              </div>
              <h3>APEDA Registered</h3>
              <p>Agricultural and Processed Food Products Export Development Authority</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="certificate-logo">
                <img src={isoLogo} alt="ISO Certified" />
              </div>
              <h3>ISO 9001:2015</h3>
              <p>International Quality Management System Certification</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="certificate-logo">
                <img src={fssaiLogo} alt="FSSAI Certified" />
              </div>
              <h3>FSSAI Certified</h3>
              <p>Food Safety and Standards Authority of India</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="500">
              <div className="certificate-logo">
                <img src={usdaLogo} alt="USDA Certified" />
              </div>
              <h3>USDA Approved</h3>
              <p>United States Department of Agriculture</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="600">
              <div className="certificate-logo">
                <img src={halalLogo} alt="Halal Certified" />
              </div>
              <h3>Halal Certified</h3>
              <p>Internationally Recognized Halal Certification</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="700">
              <div className="certificate-logo">
                <img src={iecLogo} alt="IEC Certified" />
              </div>
              <h3>IEC Certified</h3>
              <p>Import Export Code Certification</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="800">
              <div className="certificate-logo">
                <img src={gstLogo} alt="GST Certified" />
              </div>
              <h3>GST Certified</h3>
              <p>Goods & Services Tax Certification</p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
