import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
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
  <Auth0Provider
    domain="dev-tyofb4m1.us.auth0.com"
    clientId="DXAut1oqmhcZebuZaclvkLaNXtHqVFO4"
    redirectUri={window.location.origin + "/admin"}
  >
    <App />
  </Auth0Provider>, 
  rootElement
);

// reportWebVitals();


