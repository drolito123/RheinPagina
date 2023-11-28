import { useContext } from "react";
import { dataContext } from "../context/dataContext";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

  const decrease = () => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat.quantity !== 1) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: productRepeat.quantity - 1 } : item)));
    }
  };

  const increase = () => {
    setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  return (
    <>
      <button className='counter-button' onClick={decrease}>
        -
      </button>
      <p>{product.quantity}</p>
      <button className='counter-button' onClick={increase}>
        +
      </button>
    </>
  );
};

export default CartItemCounter;