import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import 'dotenv/config';

import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

// import reportWebVitals from './reportWebVitals';

import "./assets/scss/material-kit-react.scss?v=1.10.0";
import "./index.css";

import ReactGA from 'react-ga';

ReactGA.initialize('UA-206953045-1', {
  debug: true,
  titleCase: false,
});

ReactGA.pageview(window.location.pathname + window.location.search);

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>, 
  rootElement
);

// reportWebVitals();


