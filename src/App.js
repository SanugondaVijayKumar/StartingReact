import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import AddProduct from "./components/AddProduct";
import ProductItems from "./components/ProductItems";
import TotalPrice from "./components/TotalPrice";

function App() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  const detailsHandler = (productId, sellingPrice, productName) => {
    setProducts((prevProducts) => {
      return [
        ...prevProducts,
        {
          productId: productId,
          sellingPrice: sellingPrice,
          productName: productName,
        },
      ];
    });
  };

  const deleteFunction = (id) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== id
    );
    localStorage.removeItem(id);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    let totalPrice = 0;
    for (var i = 0; i < products.length; i++) {
      totalPrice += +products[i].sellingPrice;
    }
    setPrice(totalPrice);
  }, [products]);

  return (
    <>
      <AddProduct details={detailsHandler}></AddProduct>
      <ProductItems products={products} onD={deleteFunction}></ProductItems>
      <TotalPrice price={price}></TotalPrice>
    </>
  );
}

export default App;
