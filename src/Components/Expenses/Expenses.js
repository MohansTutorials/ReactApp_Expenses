import "./Expenses.css";
import ExportItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import { useState } from "react";
import Chart from "../Charts/Chart";

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState("2020");

  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  const expenses = props.data.filter((eachExpense) => {
    return (
      new Date(eachExpense.date).toLocaleString("en-US", {
        year: "numeric",
      }) == parseInt(selectedDate)
    );
  });

  const yearFilterChange = (changedYear) => {
    setSelectedDate(changedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={yearFilterChange}></ExpensesFilter>
      <Chart expenses={expenses} chartData={chartData} />
      <ExpenseList expenses={expenses} />
    </Card>
  );
}
export default Expenses;
