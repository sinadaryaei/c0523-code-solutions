import React, { useState } from 'react';
import './HotButton.css';

function HotButton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const getColorClass = () => {
    if (clickCount < 3) {
      return 'button-gray';
    } else if (clickCount < 6) {
      return 'button-purple';
    } else if (clickCount < 9) {
      return 'button-light-purple';
    } else if (clickCount < 12) {
      return 'button-red';
    } else if (clickCount < 15) {
      return 'button-orange';
    } else if (clickCount < 18) {
      return 'button-yellow';
    } else {
      return 'button-white';
    }
  };

  return (
    <div className="container">
      <div>
        <button className={getColorClass()} onClick={handleClick}>
          Hot Button
        </button>
        <p>{clickCount} Clicks</p>
      </div>
    </div>
  );
}

export default HotButton;
