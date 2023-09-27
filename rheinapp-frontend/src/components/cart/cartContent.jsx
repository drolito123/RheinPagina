import { useContext } from "react";
import { dataContext } from "../context/dataContext";

import CartElements from "./cartElements.jsx";
import CartTotal from "./cartTotal.js";
import Navbar from "../header/header.jsx";

import "./cartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-message-center'>Your cart is empty</h2>
      )}
    </>
  );
};

export default CartContent;
