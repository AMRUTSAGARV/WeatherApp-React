import ProductItem from "../ProductItem";
import products from './products.json';
import './styles.css';
import React from "react";

const Products = () => {

    const productsElements = products.map((p,i) => {
        return <ProductItem key={i} product={p} />
    });
    return (
        <div>
            <div className="product-listing">{productsElements}</div>
        </div>
    );
}

export default Products;