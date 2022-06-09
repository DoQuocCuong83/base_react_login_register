import React, { lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageLoading from "../baseUI/page-loading";
import SuspenseComponent from "../helper/hocs/suspenseHoc";

const DynamicLogin = lazy(() => import("../application/Login"));

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact>
        {SuspenseComponent(DynamicLogin, PageLoading())}
      </Route>
    </Router>
  );
};

export default Routes;
