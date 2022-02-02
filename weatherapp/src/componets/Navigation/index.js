import { Link } from 'react-router-dom';

import React from "react";
import './styles.css';
const Navigation = () => {
   return (
<div className="nav-container">
    <ul className="nav-list">
    <Link to="/home">Home</Link>
    <Link to="/products">Product</Link>
    <Link to="/signin">Signin</Link>
    </ul>
    
</div>
   )
}
   
export default Navigation;