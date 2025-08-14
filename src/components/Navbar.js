
import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext"; // Add this import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage, t } = useLanguage(); // Use the context

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    changeLanguage(selectedLang); // Use context's changeLanguage instead
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="OM Exports Logo" />
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              {t('navbar.home')} {/* Use translation function */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              {t('navbar.about')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={closeMenu}>
              {t('navbar.services')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={closeMenu}>
              {t('navbar.products')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              {t('navbar.contact')}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/inquiry" className="nav-cta-btn" onClick={closeMenu}>
              {t('navbar.inquiry')}
            </Link>
          </li>

          {/* Language Selector */}
          <li className="nav-item">
            <select value={language} onChange={handleLanguageChange} className="language-select-btn">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="gu">ગુજરાતી</option>
            </select>
          </li>
        </ul>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;