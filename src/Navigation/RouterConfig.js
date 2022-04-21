import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { WEB_PAGES } from "../components";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import { useLocation } from 'react-router-dom';
export const RouterConfig = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <PublicRoute exact path={PATH.POSTS}>
          <WEB_PAGES.POSTS />
        </PublicRoute>
        <Route path={PATH.NOPAGE} component={WEB_PAGES.NOPAGE} />
      </Switch>
    </div>
  );
};
