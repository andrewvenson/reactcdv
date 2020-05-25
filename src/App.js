import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Tab from "./Pages/Tab";

import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/Tab1">
            <Tab />
        </Route>
      </Switch>
    </>
  );
}

export default App;
