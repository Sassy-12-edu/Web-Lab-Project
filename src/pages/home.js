import React from 'react';
import Hero from '../components/Hero/Hero';
import ServicesCards from '../components/ServicesCards/ServicesCards';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
    <ServicesCards />
    </div>
  );
};

export default Home;