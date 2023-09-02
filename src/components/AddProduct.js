import React, { useState } from "react";
import Button from "../UI/Button";

const AddProduct = (props) => {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");

  const productIdHandler = (event) => {
    setProductId(event.target.value);
  };
  const sellingPriceHandler = (event) => {
    setSellingPrice(event.target.value);
  };
  const productNameHandler = (event) => {
    setProductName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const obj = {
      productId: productId,
      sellingPrice: sellingPrice,
      productName: productName,
    };
    localStorage.setItem(productId, JSON.stringify(obj));

    props.details(productId, sellingPrice, productName);
    setProductId("");
    setSellingPrice("");
    setProductName("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="product-id">Product ID:</label>
      <input
        id="product-id"
        type="number"
        onChange={productIdHandler}
        value={productId}
      ></input>
      <label htmlFor="selling-price">Selling Price:</label>
      <input
        id="selling-price"
        type="number"
        onChange={sellingPriceHandler}
        value={sellingPrice}
      ></input>
      <label htmlFor="product-name">Product Name:</label>
      <input
        id="product-name"
        onChange={productNameHandler}
        value={productName}
      ></input>

      <Button type="submit">Add Product</Button>
    </form>
  );
};

export default AddProduct;
