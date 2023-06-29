import React from 'react';
import './Carousel.css';

function NextButton({ onClick }) {
  return (
    <div>
      <button className="indicator" onClick={onClick}>
        Next
      </button>
    </div>
  );
}

export default NextButton;
