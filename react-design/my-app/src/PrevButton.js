import React from 'react';
import './Carousel.css';

function PrevButton({ onClick }) {
  return (
    <div>
      <button className="indicator" onClick={onClick}>
        Prev
      </button>
    </div>
  );
}

export default PrevButton;
