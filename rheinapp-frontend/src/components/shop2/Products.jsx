import { useContext, useState, useEffect } from "react";
import { dataContext } from "../context/dataContext";
import axios from "axios";

import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

  return data.map((product) => {
    return (
<div class="productCards">
  {data.map((product) => (
    <div className='card' key={product.id}>
      <img class="Imagen" src={product.img} alt='img-product-card' />
      <h3>{product.name}</h3>
      <h4>{product.price}$</h4>
      <button onClick={() => buyProducts(product)}>Buy</button>
    </div>
  ))}
</div>
    );
  });
};

export default Products;