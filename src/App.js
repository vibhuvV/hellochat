import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import InitPage from "./components/InitPage/InitPage";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/SignUp/SignUp";

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/" component={InitPage}></Route>
      <Route path="/Login" component={Login}></Route>
      <Route path="/Dashboard" component={Dashboard}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
    </div>
  </Router>
);

const App = () => routing;

export default App;
