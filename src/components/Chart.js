import React from "react";
import Chart from "react-google-charts";

function Charts(props) {
  console.log("PROPS:", props);
  return (
    <div>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType={props.chartType}
        loader={<div>Loading Chart</div>}
        data={[["Year", "Transactions"], ...props.data]}
        style={{
          border: "solid 1px #ccc",
          margin: 0,
        }}
        options={{
          title: "Population of Largest U.S. Cities",
          chartArea: { width: "50%" },
          isStacked: true,
          hAxis: {
            title: "Total Population",
          },
          vAxis: {
            title: "City",
          },
        }}
        // For tests
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
}

export default Charts;
