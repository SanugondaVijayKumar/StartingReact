import React from "react";

const TotalPrice = (props) => {
  const totalprice = props.price;
  return (
    <>
      <h3>The total price of products:Rs {totalprice}</h3>
    </>
  );
};

export default TotalPrice;
