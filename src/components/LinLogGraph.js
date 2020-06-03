import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { Line } from "react-chartjs-2";

function LinLogGraph() {
  const [graphType, setGraphType] = useState("linear");
  const { globalDataX, globalDataY } = useContext(Context);

  const state = {
    labels: globalDataX,
    datasets: [
      {
        label: "Confirmed Cases",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,0.5)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: globalDataY,
      },
    ],
  };

  function handleClickLin() {
    setGraphType((state) => {
      if (state !== "linear") {
        return "linear";
      }
    });
  }

  function handleClickLog() {
    setGraphType((state) => {
      if (state !== "logarithmic") {
        return "logarithmic";
      }
    });
  }

  return (
    <div style={{ height: "95%" }}>
      <button onClick={handleClickLin} className="btn">
        Linear
      </button>
      <button onClick={handleClickLog} className="btn">
        Logarithmic
      </button>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Total Confirmed Cases (World)",
            fontSize: 15,
          },
          legend: {
            display: true,
            position: "right",
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            yAxes: [
              {
                type: graphType,
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default LinLogGraph;
