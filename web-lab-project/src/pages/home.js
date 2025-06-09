import React from 'react';
import Hero from '../components/hero/hero'; // Changed from './components/hero/hero'

const Home = () => {
  const pageData = {
    page: 'home',
    heroImage: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1920',
    heroTitle: 'Capture the Perfect Moment',
    heroSubtitle: 'Professional photography services for weddings, portraits, and events',
    ctaText: 'View Portfolio'
  };

  return (
    <div>
      <Hero pageData={pageData} />
      </div>
  );
};

export default Home;