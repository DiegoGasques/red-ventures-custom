import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CustomEnginePage from "./components/CustomEnginePage/CustomEnginePage";
import CustomColorPage from "./components/CustomColorPage/CustomColorPage";
import CustomWheelsPage from "./components/CustomWheelsPage/CustomWheelsPage";
import CustomFinalPage from "./components/CustomFinalPage/CustomFinalPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/model-r/custom/1"
          render={props => {
            return <CustomEnginePage {...props} />;
          }}
        />
        <Route
          exact
          path="/model-r/custom/2"
          render={props => {
            return <CustomColorPage {...props} />;
          }}
        />
        <Route
          exact
          path="/model-r/custom/3"
          render={props => {
            return <CustomWheelsPage {...props} />;
          }}
        />
        <Route
          exact
          path="/model-r/custom/final"
          render={props => {
            return <CustomFinalPage {...props} />;
          }}
        />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
