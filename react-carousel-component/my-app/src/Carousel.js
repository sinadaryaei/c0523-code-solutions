import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

export default function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-button prev" onClick={handlePrevious}>
        <FaChevronLeft />
      </button>
      <img
        className="carousel-image"
        src={`/images/${images[currentImageIndex]}`}
        alt={`Slide ${currentImageIndex}`}
      />
      <button className="nav-button next" onClick={handleNext}>
        <FaChevronRight />
      </button>
      <div className="nav-dots">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
