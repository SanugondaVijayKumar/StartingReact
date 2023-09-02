import React from "react";

const ProductItem = (props) => {
  const delHandler = (e) => {
    const deleteId = props.productId;
    props.onDelete(deleteId);
  };

  return (
    <>
      <ul>
        <li>
          {props.productId}-Rs{props.sellingPrice}-{props.productName}
          <button onClick={delHandler}>Delete</button>
        </li>
      </ul>
    </>
  );
};

export default ProductItem;
