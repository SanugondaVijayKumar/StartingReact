import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductItems = (props) => {
  const deleteHandler = (id) => {
    console.log("In ProductItems.js");
    console.log(id);
    props.onD(id);
  };

  return (
    <div className="product-list">
      {props.products.map((product) => {
        return (
          <ProductItem
            className="product-item"
            key={product.productId}
            productId={product.productId}
            sellingPrice={product.sellingPrice}
            productName={product.productName}
            onDelete={deleteHandler}
          ></ProductItem>
        );
      })}
    </div>
  );
};

export default ProductItems;
