import { useContext } from "react";
import { dataContext } from "../context/dataContext";

import React from "react";

const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);

  const buyProduct = (product) => {
    setCart([...cart, product]);
  };

  return data.map((product) => {
    return (
      <div className="product-card-container" key={product.id}>
        <div className="card" key={product.id}>
          <img src={product.img} alt="img-product-card" />
          <h3>{product.name}</h3>
          <h4>{product.precio}$</h4>
          <button onClick={() => buyProduct(product)}>Add Cart</button>
        </div>
      </div>
    );
  });
};

export default Products;