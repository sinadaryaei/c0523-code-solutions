import React from 'react';
import './Carousel.css';

function Indicators({ items, currentIndex, onClick }) {
  return (
    <div>
      {items.map((item, index) => (
        <button
          className={`indicator ${index === currentIndex ? 'active' : ''}`}
          key={index}
          onClick={() => onClick(index)}>
          {index}
        </button>
      ))}
    </div>
  );
}

export default Indicators;
