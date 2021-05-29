// =========================================================
// Material Kit - v2.0.7
// =========================================================

// Product Page: https://www.creative-tim.com/product/material-kit
// Copyright 2020 Creative Tim (https://www.creative-tim.com/)

// Coded by Creative Tim

// =========================================================

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "./advanaTheme";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import Admin from "./layouts/Admin";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={advanaTheme}>
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  </ThemeProvider>,
  rootElement
);
