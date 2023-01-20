import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

function ExportItem(props) {
  const [title, Settitle] = useState(props.title);
  const titlegetsupdated = () => {
    Settitle("New Title");
    console.log("clicked on button");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={titlegetsupdated}>Click Me!!</button>
      </div>
    </Card>
  );
}
export default ExportItem;
