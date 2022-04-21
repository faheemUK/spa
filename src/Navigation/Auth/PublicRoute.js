// A wrapper for <Route> that redirects to the login

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { PATH } from "../../config";
import { useAuth } from "./ProvideAuth";
function PublicRoute({ children, ...rest }) {

    let auth = useAuth();
    return (
        <Route
            {...rest}
            onUpdate={() => window.scrollTo(0, 0)}
            render={({ location }) =>
                (auth.spa_user && auth.spa_user.token) ? (
                    <Redirect
                        to={{
                            pathname: PATH.DASHBOARD,
                            state: { from: location },
                        }}
                    />
                ) : (
                    <>
                        {children}
                    </>
                )
            }
        />
    );
}
export default PublicRoute;

