import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    title: "Wedding",
    subtitle: "Forever Memories",
    image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?_gl=1*jesf3d*_ga*NjY1OTc3Mjk5LjE3NDU4NTMwNDE.*_ga_8JE65Q40S6*czE3NDk1MDI5MDMkbzMkZzEkdDE3NDk1MDI5NDMkajIwJGwwJGgw"
  },
  {
    title: "Birthday",
    subtitle: "Celebration Chronicles",
    image: "https://images.pexels.com/photos/253905/pexels-photo-253905.jpeg?_gl=1*31yktj*_ga*NjY1OTc3Mjk5LjE3NDU4NTMwNDE.*_ga_8JE65Q40S6*czE3NDk1MDI5MDMkbzMkZzEkdDE3NDk1MDMwMTAkajUwJGwwJGgw"
  },
  {
    title: "Fashion",
    subtitle: "Vogue Visions",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1920&h=1080&fit=crop"
  },
  {
    title: "Pre Wedding",
    subtitle: "Enchanted Beginnings",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1920&h=1080&fit=crop"
  },
  {
    title: "Coperate",
    subtitle: "Executive Excellence",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1920&h=1080&fit=crop"
  },
  {
    title: "Real Estate & Builders",
    subtitle: "Build Art",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1920&h=1080&fit=crop"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide]);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 600);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 600);
  };

  const handleDotClick = (idx) => {
    if (animating || idx === currentSlide) return;
    setAnimating(true);
    setCurrentSlide(idx);
    setTimeout(() => setAnimating(false), 600);
  };

  return (
    <div
      className={`hero`}
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        transition: 'background-image 0.8s cubic-bezier(.77,0,.18,1)'
      }}
    >
      <div className="hero-overlay" />
      <button
        className="carousel-arrow left"
        onClick={handlePrev}
        aria-label="Previous Slide"
        disabled={animating}
      >
        <ChevronLeft size={36} />
      </button>
      <div className={`hero-content animated ${animating ? 'fade' : 'show'}`}>
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].subtitle}</p>
        <button className="hero-btn">View Gallery</button>
      </div>
      <button
        className="carousel-arrow right"
        onClick={handleNext}
        aria-label="Next Slide"
        disabled={animating}
      >
        <ChevronRight size={36} />
      </button>
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;