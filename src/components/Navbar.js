import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* <div className="nav-logo"> */}
        <div className="logo">
          <img src={logo} alt="OM Exports Logo" />
          {/* <h2>OM Exports</h2> */}
          {/* <span className="logo-tagline">🇮🇳</span> */}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link" onClick={closeMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link" onClick={closeMenu}>Products</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>
          <li className="nav-item">
            {/* <button className="nav-cta-btn">Inquiry Now</button> */}
            <Link to="/inquiry" className="nav-cta-btn" onClick={closeMenu}>
    Inquiry Now
  </Link>
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


