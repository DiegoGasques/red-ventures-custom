import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  loaded,
  custom,
  step,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log("custom");
        if (loaded && custom.length <= parseInt(step)) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default connect(({ loaded, custom }) => ({ loaded, custom }))(
  ProtectedRoute
);
