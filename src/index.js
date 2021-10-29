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
import App from './App';

// import Amplify from 'aws-amplify';
// import config from './aws-exports';
// Amplify.configure(config);

import "./assets/scss/material-kit-react.scss?v=1.10.0";
import "./index.css";

import ReactGA from 'react-ga';

ReactGA.initialize('UA-206953045-1', {
  debug: true,
  titleCase: false,
});

ReactGA.pageview(window.location.pathname + window.location.search);


const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);


