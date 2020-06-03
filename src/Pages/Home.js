import Map from "../components/Map";
import Globals from "../components/Globals";
import LinLogGraph from "../components/LinLogGraph";
import ActiveGraph from "../components/ActiveGraph";

import React from "react";

const widgetStyle = {
  border: "1px solid lightgray",
  borderRadius: "10px",
  width: "100%",
  padding: "10px",
  minHeight: "450px",
  marginBottom: "20px",
  boxShadow: "2px 4px 5px lightgray",
};

function Home() {
  return (
    <main
      className="mainContainer"
      style={{
        display: "grid",
        gridTemplateColumns: "22% auto",
        height: "93vh",
      }}
    >
      <div
        className="globalCol"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            border: "1px solid lightgray",
            borderRadius: "10px",
            width: "100%",
            padding: "10px",
          }}
        >
          <Globals />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 50px 0px 10px",
          height: "92vh",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <div style={widgetStyle}>
          <Map />
        </div>
        <div style={widgetStyle}>
          <LinLogGraph />
        </div>
        <div style={widgetStyle}>
          <ActiveGraph />
        </div>
      </div>
    </main>
  );
}

export default Home;
