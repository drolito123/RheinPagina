import React, { useContext } from "react";
import axios from "axios";
import { dataContext } from "../context/dataContext";

//cart total lo que hace es que agarr el precio total de los items que tengo en el carrito y los suma y ademas añadi un boto que lo que hace es que con un metodo post mande todos los items que estan en el carrito a una tabla de mysql
const CartTotal = () => {
  const { cart, setCart } = useContext(dataContext);

  const handleCompra = async () => {
    try {
      const response = await axios.post("http://localhost:8080/compras", {
        items: cart,
        total: cart.reduce((acc, el) => acc + el.price * el.quantity, 0),
      });

      setCart([]);

      alert('Compra realizada con éxito');

      window.location.href = "/home";
    } catch (error) {
      console.error("Error al realizar la compra:", error);
    }
  };

  const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

  return (
    <div className='cartTotal'>
      <h3>total a pagar: {total.toFixed(2)} $</h3>
      <button onClick={handleCompra}>Comprar</button>
    </div>
  );
};

export default CartTotal;