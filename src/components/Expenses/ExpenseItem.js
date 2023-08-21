import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setExpense] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
  };
  const changeExpense = () => {
    setExpense(100);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense_item__description">
        <h2>{title}</h2>
      </div>
      <div>{props.location}</div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeExpense}>Change Expense</button>

      {/* <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      /> */}
    </Card>
  );
};

export default ExpenseItem;
