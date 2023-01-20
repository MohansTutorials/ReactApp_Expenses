import "./AddNewExpense.css";
const AddNewExpense = (props) => {
  return (
    <div className="new-expense__controls">
      <button onClick={() => props.checkFlag(true)}>Add New Expenses</button>
    </div>
  );
};

export default AddNewExpense;
