import React from "react";
import './styles.css';

const ProductItem = (props) => {
    const { product } = props;
    return (
        <div className="product-item">
            <img alt={product.title} src={product.Image} width={100} />
            <h4>{product.title}</h4>
            <p>{product.Description}</p>
            <b>Price: {product.Price}</b>
        </div>
    )
}

export default ProductItem;