import React from 'react';
import Carousel from './Carousel';

function App() {
  const images = ['001.png', '004.png', '007.png', '025.png', '039.png'];
  return (
    <div className="App">
      <header className="App-header">
        <Carousel images={images} />
      </header>
    </div>
  );
}

export default App;
