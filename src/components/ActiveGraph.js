import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Context } from "../Context";

const ActiveGraph = () => {
  const { globalDataX, dailyNewDataY } = useContext(Context);

  const state = {
    labels: globalDataX,
    datasets: [
      {
        label: "New Cases",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: dailyNewDataY,
      },
    ],
  };

  return (
    <Bar
      data={state}
      options={{
        title: {
          display: true,
          text: "Daily New Cases",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
        maintainAspectRatio: false,
      }}
    />
  );
};

export default ActiveGraph;
