import "./Chart.css";
import ChartItem from "./ChartItem";
const Chart = (props) => {
  for (let expense of props.expenses) {
    let expenseMonth = expense.date.getMonth();
    props.chartData[expenseMonth].value += expense.amount;
  }

  const maxValueArray = props.chartData.map(
    (eachChartData) => eachChartData.value
  );
  const maxValue = Math.max(...maxValueArray);

  return (
    <div className="chart">
      {props.chartData.map((dataPoint) => (
        <ChartItem
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
