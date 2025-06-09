import React from 'react';
import NavbarHero from './NavbarHero';

const AboutPage = () => {
  const aboutPageData = {
    page: 'about',
    heroImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    heroTitle: 'About the Artist',
    heroSubtitle: 'Discover the story behind the lens',
    ctaText: 'Get in Touch'
  };

  return (
    <div>
      <NavbarHero pageData={aboutPageData} />
      {/* Rest of the about page content */}
    </div>
  );
};

export default AboutPage;