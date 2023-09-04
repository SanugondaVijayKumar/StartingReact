import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
  };

  const removeItemFromCartHandler = (id) => {
    const updatedItemsAfterDeletion = items.map((item) => {
      item.quantity = +item.quantity - 1;
      return item.id !== id && item.quantity > 0;
    });
    updateItems([...updatedItemsAfterDeletion]);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "I am accessible anywhere",
    totalQuantity: 0,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
