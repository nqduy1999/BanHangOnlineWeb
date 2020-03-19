import { Route, Redirect } from "react-router-dom";

import Cookies from 'js-cookie';

import React from "react";
export default function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          Cookies.get("authtoken") ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/dangnhap",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }