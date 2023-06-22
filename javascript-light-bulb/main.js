import React, { useState } from 'react';
import './App.css';

function App() {
  const [lightOn, setLightOn] = useState(true);

  const handleClick = () => {
    setLightOn(!lightOn);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="column-full">
          <div
            className={`light ${lightOn ? '' : 'on'}`}
            onClick={handleClick}></div>
          <div className={`background ${lightOn ? '' : 'on'}`}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
