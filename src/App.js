import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CustomEnginePage from "./components/CustomEnginePage/CustomEnginePage";
import CustomColorPage from "./components/CustomColorPage/CustomColorPage";
import CustomWheelsPage from "./components/CustomWheelsPage/CustomWheelsPage";
import CustomFinalPage from "./components/CustomFinalPage/CustomFinalPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute
          exact
          path="/model-r/custom/1"
          step={1}
          component={CustomEnginePage}
        />
        <ProtectedRoute
          exact
          path="/model-r/custom/2"
          step={2}
          component={CustomColorPage}
        />
        <ProtectedRoute
          exact
          path="/model-r/custom/3"
          step={3}
          component={CustomWheelsPage}
        />
        <ProtectedRoute
          exact
          path="/model-r/custom/final"
          step={4}
          component={CustomFinalPage}
        />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
