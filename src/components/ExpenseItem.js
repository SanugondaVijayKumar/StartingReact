import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  const LocationOfExpenditure = "Mumbai";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense_item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div>{LocationOfExpenditure}</div>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
    // <div>
    //   <div>Food Rs 10</div>
    //   <div>Petrol Rs 100</div>
    //   <div>Movies Rs 200</div>
    // </div>
  );
}

export default ExpenseItem;
