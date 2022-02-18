
import React, { useState } from 'react';
import "./index.css";

const api = {
  key: "e26f422fd39b9eaae9e3634e7dfb4a93",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
      <div className='search-box'>
    <input type="text" className='search-bar' placeholder='Search...'/>
      </div>

      </main>
    
     
    </div>
  );
}

export default App;
