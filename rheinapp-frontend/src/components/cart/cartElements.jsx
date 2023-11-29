import { useContext } from "react";
import { dataContext } from "../context/dataContext";

import CartItemCounter from "./cartItemCounter";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className='cartContent' key={product.id}>
        <img src={product.img} alt='product-card' />
        <h3 className='name'>{product.nombre}</h3>
        <CartItemCounter product={product} />
        <h4 className='price'>{(product.price * product.quantity).toFixed(2)}$</h4>
        <h3 className='cart-delete-button' onClick={() => deleteProduct(product.id)}>
          ❌
        </h3>
      </div>
    );
  });
};

export default CartElements;