import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ currentPage, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`photographer-nav ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="nav-container">
        <div className="nav-logo-container">
          <Camera className="nav-logo-icon" />
          <span className="nav-logo">LensCraft</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={currentPage === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#book" className="nav-cta">Book Session</a>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={currentPage === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="#book" className="nav-cta">Book Session</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;