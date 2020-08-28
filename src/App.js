import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout page</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Main page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;