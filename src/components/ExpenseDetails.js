import "./ExpenseItem.css";

function ExpenseDetails(props) {
  const title = props.title;
  //   console.log(title);
  const location = props.location;
  const amount = props.amount;

  return (
    <div>
      <div className="expense_item__description">
        <h2>{title}</h2>
      </div>
      <div>{location}</div>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
}

export default ExpenseDetails;
