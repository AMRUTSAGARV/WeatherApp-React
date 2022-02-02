import React from 'react';
import "./index.css";
import Navigation from "./componets/Navigation";
import Home from './componets/Home';
import Products from './componets/Products';


function App() {
  return (
    <div className="App">
     <Navigation />
     <Home/>
     <Products/>
     <Signin />
     
    </div>
  );
}

export default App;
