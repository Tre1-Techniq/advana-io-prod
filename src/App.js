import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "./advanaTheme";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import Admin from "./layouts/Admin";

export default function App() {
  return (
    <ThemeProvider theme={advanaTheme}>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Redirect from="/home" to="/" />
        </Switch>
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
