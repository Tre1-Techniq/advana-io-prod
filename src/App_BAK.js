import React, { useState, useEffect } from "react";
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
import Dooh from './views/Products/Dooh/Dooh';
import Campaigns from './views/Campaigns/Campaigns';
import Admin from "./layouts/Admin";
import Auth from "./views/Auth/Auth";
import NotFound from "./views/NotFound/NotFound";
import Santikos from "./views/Promos/Santikos";
import SantikosCoupon from "./views/Promos/SantikosCoupon";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// import PublicRoute from "./routes/PublicRoute";
// import PrivateRoute from "./routes/PrivateRoute";

import { getUser, getToken, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";

const verifyTokenAPIURL = 'https://c5h1z4vsvk.execute-api.us-east-1.amazonaws.com/prod/verify';
const X_API_KEY = 'TNHFORMDOC34faM4AKVQe6zJOXrcgidA2MpZgCFZ';

function App() {
  const [isAuthenicating, setAuthenicating] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }

    const requestConfig = {
      headers: {
        'x-api-key': X_API_KEY,
        'Access-Control-Allow-Origin': 'https://portaldemo.d35b5g3lrc6rok.amplifyapp.com',
      }
    }
    const requestBody = {
      user: getUser(),
      token: token
    }

    axios.post(verifyTokenAPIURL, requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
      setAuthenicating(false);
    }).catch(() => {
      resetUserSession();
      setAuthenicating(false);
    })
  }, []);

  const token = getToken();
  if (isAuthenicating && token) {
    return <div className="content">Authenicating...</div>
  };

  App.propTypes = {
    component: PropTypes.string,
  };

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
          <Route path="/auth" component={props => <Auth {...props} />} />
          <Route path="/admin" component={props => <Admin {...props} />} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Route path="/santikos" component={Santikos} />
        <Route path="/santikoscoupon" component={SantikosCoupon} />
      </Router>
    </ThemeProvider>
  );
}

export default App;

