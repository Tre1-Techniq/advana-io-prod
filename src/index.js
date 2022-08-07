import React from "react";
import ReactDOM from "react-dom";
import App from './App';
// import 'dotenv/config';

import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

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

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URI;

ReactDOM.render(
    <Router>
      {/* <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory> */}
      <Auth0Provider
        domain="dev-tyofb4m1.us.auth0.com"
        clientId="0Dy7nWXLzqQZHfnXHYrHa11N53CA3hhA"
        redirectUri={window.location.origin + `${"/admin"}`}
        audience="https://portal-users-api.io"
        scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </Router>, 
  rootElement
);

// reportWebVitals();


