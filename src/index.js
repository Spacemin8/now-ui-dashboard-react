import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.jsx";

const hist = createHashHistory();

ReactPixel.init("111649226022273");
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

ReactGA.initialize("UA-46172202-1");
ReactGA.set({ page: window.location.pathname + window.location.search });
ReactGA.pageview(window.location.pathname + window.location.search);

hist.listen(location => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);

  ReactPixel.pageView();
  ReactPixel.fbq("track", "PageView");
});

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
