import React, { useState } from 'react';
import Banner from './Banner';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import Indicators from './Indicators';
import './Carousel.css';

function RotatingBanner() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <Banner currentItem={items[currentIndex]} />
      <PrevButton onClick={handlePrevClick} />
      <Indicators
        items={items}
        currentIndex={currentIndex}
        onClick={handleIndicatorClick}
      />
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default RotatingBanner;
