import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tab from "./pages/Tab";

import { Switch, Route } from "react-router-dom";

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

      <Footer />
    </>
  );
}

export default App;
