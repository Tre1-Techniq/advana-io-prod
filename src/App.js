import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "./advanaTheme";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import Sentry from './views/Products/Sentry/Sentry';
import Insight from './views/Products/Insight/Insight';
import Promote from './views/Products/Promote/Promote';
import Campaigns from './views/Campaigns/Campaigns';
import SignIn from "./views/Auth/SignIn";
import Admin from "./layouts/Admin";
import Santikos from "./views/Promos/Santikos";
import SantikosCoupon from "./views/Promos/SantikosCoupon";

export default function App() {

  return (
    <ThemeProvider theme={advanaTheme}>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/sentry" exact component={Sentry} />
          <Route path="/insight" exact component={Insight} />
          <Route path="/promote" exact component={Promote} />
          <Route path="/campaigns" exact component={Campaigns} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/admin" component={Admin} />
        </Switch>
        <Route path="/santikos" exact component={Santikos} />
        <Route path="/santikos/coupon" exact component={SantikosCoupon} />
      </Router>
    </ThemeProvider>
  );
}
