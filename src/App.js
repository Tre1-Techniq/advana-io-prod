import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';

//import Loading from "./components/Loading/Loading";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "./advanaTheme";

import Loading from './components/Auth/loading';

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import Sentry from "./views/Products/Sentry/Sentry";
import Insight from "./views/Products/Insight/Insight";
import Promote from "./views/Products/Promote/Promote";
import Dooh from "./views/Products/Dooh/Dooh";
import Campaigns from "./views/Campaigns/Campaigns";
import Admin from "./layouts/Admin";
import NotFound from "./views/NotFound/NotFound";
import PepsiQ1Sweeps from "./views/Promos/Sweeps/PepsiQ1Sweeps";
import Santikos from "./views/Promos/Santikos";
import SantikosCoupon from "./views/Promos/SantikosCoupon";

import ProtectedRoute from "./auth/protected-route";

// nodejs library to set properties for components
//import PropTypes from "prop-types";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={advanaTheme}>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/dooh" exact component={Dooh} />
          <Route path="/sentry" exact component={Sentry} />
          <Route path="/insight" exact component={Insight} />
          <Route path="/promote" exact component={Promote} />
          <Route path="/campaigns" exact component={Campaigns} />
          <ProtectedRoute path="/admin" component={Admin} />
          <Route path="/pepsisweeps" component={PepsiQ1Sweeps} />
          <Route path="/santikos" component={Santikos} />
          <Route path="/santikoscoupon" component={SantikosCoupon} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
