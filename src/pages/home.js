import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const Home = () => {
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1920&h=1080&fit=crop",
      title: "Wedding Photography",
      subtitle: "Capture your most precious moments with elegance and style",
      cta: "View Wedding Gallery",
      accent: "Perfect Moments"
    },
    // ...other slides
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Navbar currentPage="home" navItems={navItems} />
      <Hero slides={slides} />
    </div>
  );
};

export default Home;