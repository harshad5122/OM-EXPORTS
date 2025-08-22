import '../styles/about.css';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import the useLanguage hook
import { useLanguage } from '../LanguageContext'; 
import HeroSection from '../components/HeroSection';

// import backgroundImage from '../assets/images/shiping.jpg';
// import product1 from '../assets/images/product-sourcing.jpg';
// import exportImage1 from '../assets/images/maps.jpg';

// import apedaLogo from '../assets/certificates/apeda.png';
// import isoLogo from '../assets/certificates/iso.png';
// import fssaiLogo from '../assets/certificates/fssai.png';
// import usdaLogo from '../assets/certificates/usda.png';
// import halalLogo from '../assets/certificates/halal.png';
// import iecLogo from '../assets/certificates/iec.png';
// import gstLogo from '../assets/certificates/gst.png';


import backgroundImage from '../assets/optimized/images/shiping.webp';
import product1 from '../assets/optimized/images/product-sourcing.webp';
import exportImage1 from '../assets/optimized/images/maps.webp';

import apedaLogo from '../assets/optimized/certificates/apeda.webp';
import isoLogo from '../assets/optimized/certificates/iso.webp';
import fssaiLogo from '../assets/optimized/certificates/fssai.webp';
import usdaLogo from '../assets/optimized/certificates/usda.webp';
import halalLogo from '../assets/optimized/certificates/halal.webp';
import iecLogo from '../assets/optimized/certificates/iec.webp';
import gstLogo from '../assets/optimized/certificates/gst.webp';


const About = () => {
  // Use the useLanguage hook to get the translation function
  const { t } = useLanguage();

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
      {/* <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      >
        <div className="overlay">
          <h1 className="about-heading">{t('about.heroHeading')}</h1>
          <p className="about-subheading">
            {t('about.heroSubheading')}
          </p>
        </div>
      </section> */}
      <HeroSection backgroundImage={backgroundImage} pageName="about" />


      {/* Premium Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content" data-aos="fade-right">
              <h2>{t('about.whoWeAreHeading')}</h2>
              <p className="lead-text">
                {t('about.whoWeAreLeadText')}
              </p>
              <div className="features-list">
                <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>{t('about.globalPresenceTitle')}</h4>
                    <p>{t('about.globalPresenceDescription')}</p>
                  </div>
                </div>
                <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>{t('about.qualityAssuranceTitle')}</h4>
                    <p>{t('about.qualityAssuranceDescription')}</p>
                  </div>
                </div>
                <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>{t('about.sustainablePracticesTitle')}</h4>
                    <p>{t('about.sustainablePracticesDescription')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-content" data-aos="fade-left">
              <div className="main-image">
                <img src={product1} alt={t('about.globalOperationsAlt')} />
              </div>
              <div className="floating-card" data-aos="fade-up" data-aos-delay="400">
                <div className="card-content">
                  <h3>{t('about.drivenByExcellenceTitle')}</h3>
                  <p>{t('about.drivenByExcellenceDescription')}</p>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number">100%</div>
                      <div className="stat-label">{t('about.commitmentLabel')}</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">10+</div>
                      <div className="stat-label">{t('about.productCategoriesLabel')}</div>
                    </div>
                  </div>
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
            <img src={exportImage1} alt={t('about.globalExportNetworkAlt')} />
          </div>
          <div className="text-section">
            <h2>{t('about.exportServicesHeading')}</h2>
            <p>
              {t('about.exportServicesDescription')}
            </p>
            <ul className="export-services-list">
              <li>{t('about.logisticsCoordination')}</li>
              <li>{t('about.customsAssistance')}</li>
              <li>{t('about.qualityInspection')}</li>
              <li>{t('about.documentationManagement')}</li>
              <li>{t('about.marketAnalysis')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates-section">
        <div className="container">
          <h2 data-aos="fade-up">{t('about.certificationsHeading')}</h2>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
            {t('about.certificationsSubtitle')}
          </p>

          <div className="certificates-grid">
            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="certificate-logo">
                <img src={apedaLogo} alt={t('about.apedaCertifiedAlt')} />
              </div>
              <h3>{t('about.apedaTitle')}</h3>
              <p>{t('about.apedaDescription')}</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="certificate-logo">
                <img src={isoLogo} alt={t('about.isoCertifiedAlt')} />
              </div>
              <h3>{t('about.isoTitle')}</h3>
              <p>{t('about.isoDescription')}</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="certificate-logo">
                <img src={fssaiLogo} alt={t('about.fssaiCertifiedAlt')} />
              </div>
              <h3>{t('about.fssaiTitle')}</h3>
              <p>{t('about.fssaiDescription')}</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="500">
              <div className="certificate-logo">
                <img src={usdaLogo} alt={t('about.usdaCertifiedAlt')} />
              </div>
              <h3>{t('about.usdaTitle')}</h3>
              <p>{t('about.usdaDescription')}</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="600">
              <div className="certificate-logo">
                <img src={halalLogo} alt={t('about.halalCertifiedAlt')} />
              </div>
              <h3>{t('about.halalTitle')}</h3>
              <p>{t('about.halalDescription')}</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="700">
              <div className="certificate-logo">
                <img src={iecLogo} alt={t('about.iecCertifiedAlt')} />
              </div>
              <h3>{t('about.iecTitle')}</h3>
              <p>{t('about.iecDescription')}</p>
            </div>

            <div className="certificate-card" data-aos="zoom-in" data-aos-delay="800">
              <div className="certificate-logo">
                <img src={gstLogo} alt={t('about.gstCertifiedAlt')} />
              </div>
              <h3>{t('about.gstTitle')}</h3>
              <p>{t('about.gstDescription')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default About;