import "./ExpensesList.css";
import ExportItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length == 0) {
    return <p className="expenses-list__fallback">No Expenses Found</p>;
  }
  return props.expenses.map((eachExpense) => (
    <ExportItem
      key={eachExpense.id}
      title={eachExpense.title}
      amount={eachExpense.amount}
      date={new Date(eachExpense.date)}
    ></ExportItem>
  ));
};

export default ExpensesList;
