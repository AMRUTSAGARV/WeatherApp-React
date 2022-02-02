import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import React from 'react';
import "./index.css";
import Navigation from "./componets/Navigation";
import Home from './componets/Home';
import Products from './componets/Products';
import Signin from './componets/Signin';


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>    
     <Navigation />
     <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/products" element={<Products />} />
     <Route path="/signin" element={<Signin />} />
    </Routes>
    
     </BrowserRouter>
     {/* <Home />
     <Products />
     <Signin />
      */}
    </div>
  );
}

export default App;
