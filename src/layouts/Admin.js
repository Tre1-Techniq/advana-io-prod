/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//import React, { useState, useEffect, createRef } from "react";
import React, { useState, useEffect, createRef } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//import { AccountContext } from '../components/Accounts/Accounts';
//import Pool from '../components/UserPool/UserPool';

import { makeStyles } from "@material-ui/core/styles";

// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../advanaTheme";

import routes from "../routes.js";

import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "../assets/img/advana-io-bg-02.jpg";
import fullLogo from "../assets/img/logo-full-white.png";
//import pillLogo from "../assets/img/advana-pill-logo.png";

//const user = Pool.getCurrentUser();

const useStyles = makeStyles(styles);

function Admin({ ...rest }) {
  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/home" />
    </Switch>
  );

  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = useState(false);

  const color = "blue";

  // initialize and destroy the PerfectScrollbar plugin
  useEffect(() => {
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/sentry";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  return (
    <ThemeProvider theme={advanaTheme}>
      <Sidebar
        routes={routes}
        logoText={""}
        logo={fullLogo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <AdminNavbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /analytics route we want the dashboard to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.iFrame}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
      </div>
    </ThemeProvider>
  );
};

export default withRouter(Admin);
