import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense_item__description">
        <h2>{title}</h2>
      </div>
      <div>{props.location}</div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>

      {/* <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      /> */}
    </Card>
  );
};

export default ExpenseItem;
