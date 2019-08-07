import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loaded, custom, step, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (loaded && custom.length === step - 1) {
          return <Component {...props} />;
        } else {
          return <Redirect path="/" />;
        }
      }}
    />
  );
};

export default connect(({ loaded, custom }) => ({ loaded, custom }))(
  ProtectedRoute
);
