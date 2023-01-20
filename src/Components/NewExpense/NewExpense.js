import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
import { useState } from "react";
const NewExpense = (props) => {
  const [showExpenseForm, SetShowExpenseForm] = useState(false);
  const expenseDataAdded = (expenses) => {
    const expensedata = { ...expenses, id: Math.random() };
    props.onExpenseAdded(expensedata);
  };

  const toggleShowExpense = (data) => {
    SetShowExpenseForm(data);
  };

  if (showExpenseForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onExpensedataAdded={expenseDataAdded}
          checkFlag={toggleShowExpense}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <AddNewExpense checkFlag={toggleShowExpense} />
    </div>
  );
};

export default NewExpense;
