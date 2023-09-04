import React, { useContext, useState, useEffect } from "react";

import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const distinctItems = {};
  cartCtx.items.forEach((item) => {
    if (!distinctItems[item.id]) {
      distinctItems[item.id] = { ...item }; // Create a copy of the item
    } else {
      distinctItems[item.id].quantity =
        +distinctItems[item.id].quantity + +item.quantity; // Update the quantity
    }
  });

  let uniqueCartItems = Object.values(distinctItems);

  const deleteItemFromCart = (id) => {
    cartCtx.removeItem(id);
    console.log(cartCtx.items);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {uniqueCartItems.map((item) => (
        <li key={item.id}>
          Name:{item.name} ,Price:{item.price} ,Quantity:{item.quantity}
          <button onClick={() => deleteItemFromCart(item.id)}>-</button>
        </li>
      ))}
    </ul>
  );

  let totalPrice = 0;
  uniqueCartItems.forEach((item) => {
    totalPrice = totalPrice + item.price * item.quantity;
  });

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
