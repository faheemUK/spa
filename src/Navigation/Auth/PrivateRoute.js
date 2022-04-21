// A wrapper for <Route> that redirects to the login

import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { PATH } from "../../config";
import { useAuth } from "./ProvideAuth";
import { NavigationBar, FooterBar, } from "../../assets";
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  const [show, setShow] = useState(true);
  return (
    <Route
      {...rest}
      onUpdate={() => window.scrollTo(0, 0)}
      render={({ location }) =>
        auth.spa_user && auth.spa_user.token ? (
          <>
            <NavigationBar />
            {children}
            <FooterBar />
          </>

        ) : (
          <Redirect
            to={{
              pathname: PATH.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
