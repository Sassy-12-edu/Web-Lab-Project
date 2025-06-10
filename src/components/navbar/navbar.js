import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Camera className="navbar-icon" />
          <span>LensCraft</span>
        </div>

        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/login">Login</a>
          <a href="/cart">Cart</a>
        </div>

        <button 
          className="navbar-mobile-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/login">Login</a>
          <a href="/cart">Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;