/*!

=========================================================
* Montanye Wedding - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import WhenAndWherePage from "views/WhenAndWherePage/WhenAndWherePage.js";
import VendorsPage from "views/VendorsPage/VendorsPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/vendors" component={VendorsPage} />
      <Route path="/whenAndWhere" component={WhenAndWherePage} />
      <Route path="/rsvp" component={ContactUsPage} />
      <Route path="/privacy-policy" component={PricingPage} />
      <Route path="/404" component={ErrorPage} />
      <Route path="/" component={SectionsPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
