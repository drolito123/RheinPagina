import { useContext } from "react";
import { dataContext } from "../context/dataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.precio * el.quanty, 0);
  return (
    <div className='cartTotal'>
      <h3>total a pagar: {total} $</h3>
    </div>
  );
};

export default CartTotal;
