import React, { useState } from 'react';

function CounterComponent() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={handleDecrement} className="counter-button">
        Down
      </button>
      <span>{counter}</span>
      <button onClick={handleIncrement} className="counter-button">
        Up
      </button>
    </div>
  );
}

export default CounterComponent;
