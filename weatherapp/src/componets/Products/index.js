import products from './products.json';
import React from "react";

const Products = () => {

    const productsElements = products.map((p,i) => {
        return <div>
            <img alt={p.title} src={p.image} width={100} />
            <h4>{p.title}</h4>
            <p>{p.Description}</p>
            <b>Price: {p.Price}</b>
            </div>;
    });
    return (
        <div>
            <ul>
                {productsElements}
            </ul>
        </div>
    );
}

export default Products;