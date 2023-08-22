import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense_item__description">
          <h2>{props.title}</h2>
        </div>
        <div>{props.location}</div>
        <div className="expense-item__price">${props.amount}</div>

        {/* <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      /> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
