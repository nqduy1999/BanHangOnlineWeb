import { Route, Redirect } from "react-router-dom";

import Cookies from 'js-cookie';

import React from "react";
import { useSelector } from "react-redux";
export default function AdminRoute({ children, ...rest }) {
    const stateAuth = useSelector(state => state.auth);
    return (
      <Route
        // {...rest}
        // render={({ location }) =>
        //   stateAuth.user ? stateAuth.user.account.roles.map(role => (
        //       role.name === "ADMIN" ? (
        //         children
        //       ) : (
        //         <Redirect
        //           to={{
        //             pathname: "/",
        //             state: { from: location }
        //           }}
        //         />
        //       )
        //   )) : <Redirect
        //         to={{
        //             pathname: "/",
        //             state: { from: location }
        //         }}
        //         />
        // }
      />
    );
  }