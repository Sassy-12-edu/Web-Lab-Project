import React from 'react';
import './hero.css';

const Hero = ({ pageData }) => {
  return (
    <div className="navbar-hero-container">
      <nav className="photographer-nav">
        <div className="nav-logo">LensCraft</div>
        <ul className="nav-links">
          <li><a href="/" className={pageData.page === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="/portfolio" className={pageData.page === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
          <li><a href="/about" className={pageData.page === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="/contact" className={pageData.page === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
      
      <div className="hero-section" style={{ backgroundImage: `url(${pageData.heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{pageData.heroTitle}</h1>
          <p className="hero-subtitle">{pageData.heroSubtitle}</p>
          {pageData.ctaText && (
            <button className="hero-cta">{pageData.ctaText}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;