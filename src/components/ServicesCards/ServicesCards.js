import React from 'react';
import './ServicesCards.css';

const ServicesCards = () => {
  const services = [
    {
      id: 1,
      title: "Wedding",
      subtitle: "Forever Memories",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      link: "Wedding.html"
    },
    {
      id: 2,
      title: "Birthday",
      subtitle: "Celebration Chronicles",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
      link: "Birthday.html"
    },
    {
      id: 3,
      title: "Fashion",
      subtitle: "Vogue Visions",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      link: "FashionShoot.html"
    },
    {
      id: 4,
      title: "Pre Wedding",
      subtitle: "Enchanted Beginnings",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      link: "p.html"
    },
    {
      id: 5,
      title: "Corporate",
      subtitle: "Executive Excellence",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      link: "Corporate.html"
    },
    {
      id: 6,
      title: "Real Estate & Builders",
      subtitle: "Build Art",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      link: "RealEstate.html"
    }
  ];

  const handleServiceClick = (link) => {
    console.log(`Navigating to: ${link}`);
  };

  return (
    <div className="services-container">
      <div className="services-inner">
        <div className="services-header">
          <h1 className="services-title">
            Our <span className="services-title-gradient">Services</span>
          </h1>
          <p className="services-subtitle">
            Capturing life's most precious moments with artistic excellence
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.link)}
              className="service-card"
            >
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                
                <div className="service-overlay" />
                
                <div className="service-content">
                  <h2 className="service-content-title">
                    {service.title}
                  </h2>
                  <p className="service-content-subtitle">
                    {service.subtitle}
                  </p>
                  
                  <div className="service-content-border" />
                </div>
                
                <div className="service-corner-accent" />
              </div>
              
              <div className="service-glow" />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ServicesCards;