import { useContext } from "react";
import { dataContext } from "../context/dataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
  return (
    <div className='cartTotal'>
      <h3>total a pagar: {total.toFixed(2)} $</h3>
    </div>
  );
};

export default CartTotal;
