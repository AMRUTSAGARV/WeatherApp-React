import React from "react";
import { Link } from 'react-router-dom';


import './styles.css';

const Navigation = () => {
   return (
<div className="nav-container">
    <ul className="nav-list">
    <Link to='/'>Home</Link>
    <Link to='/products'>Products</Link>
    <Link to='/signin'>Signin</Link>
    </ul>
    
</div>
   )
}
   
export default Navigation;