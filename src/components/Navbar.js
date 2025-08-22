import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const closeMenu = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="OM Exports Logo" />
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              {t('navbar.home')}
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
          {/* <li className="nav-item">
            <Link to="/inquiry" className="nav-cta-btn" onClick={closeMenu}>
              {t('navbar.inquiry')}
            </Link>
          </li> */}

          <li className="nav-item language-dropdown">
            <button className="nav-cta-btn language-btn">
              {language === "en" ? "English" : language === "hi" ? "हिंदी" : "ગુજરાતી"}
            </button>
            <ul className="language-menu">
              <li onClick={() => changeLanguage("en")}>English</li>
              <li onClick={() => changeLanguage("hi")}>हिंदी</li>
              <li onClick={() => changeLanguage("gu")}>ગુજરાતી</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;