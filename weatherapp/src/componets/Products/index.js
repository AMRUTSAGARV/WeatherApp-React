import ProductItem from "../ProductItem";
import products from './products.json';
import './styles.css';
import React from "react";
import { Link } from "react-router-dom";

const Products = () => {

    const productsElements = products.map((p,i) => {
        return <Link to="/produtcs/proddesc" state={prod}>
            <ProductItem key={i} product={prod} />
        </Link>
    
    });
    return (
        <div>
            <div className="product-listing">{productsElements}</div>
        </div>
    );
}

export default Products;