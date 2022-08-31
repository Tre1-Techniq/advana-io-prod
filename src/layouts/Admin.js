import React, { useState, useEffect, createRef } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import axios from "axios";

import { useAuth0 } from "@auth0/auth0-react";

import LoadingAdmin from "../components/Auth/loading-admin.js";

import { makeStyles } from "@material-ui/core/styles";

// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../advanaTheme";

import routes from "../routes.js";
import adminRoutes from "../routesAdmin.js";

// import routes from "../routes.js";

import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "../assets/img/advana-io-bg-02.jpg";
import fullLogo from "../assets/img/logo-full-white.png";
//import pillLogo from "../assets/img/advana-pill-logo.png";

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
      <Redirect from="/admin" to="/admin/sentry" />
    </Switch>
  );

  const switchAdminRoutes = (
    <Switch>
      {adminRoutes.map((prop, key) => {
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
      <Redirect from="/admin" to="/admin/admin-panel" />
    </Switch>
  );

  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [ isAdmin, setIsAdmin ] = useState(false);

  const color = "blue";

  const { user, getAccessTokenSilently } = useAuth0();

  const access = "https://user.metadata/access";
  const userAccess = `${user[access]}`;

  const isAdmin = userAccess === "Admin";
  console.log("IS ADMIN: ", isAdmin);

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
    if (window.innerWidth >= 1280) {
      setMobileOpen(false);
    }
  };

  return (
    <ThemeProvider theme={advanaTheme}>
      <Sidebar
        adminRoutes={adminRoutes}
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
            {!isAdmin && 
              <>
                <div className={classes.container}>{switchRoutes}</div>
              </>
            }

            {isAdmin && 
              <>
                <div className={classes.container}>{switchAdminRoutes}</div>
              </>
            }
          </div>
        ) : (
          <div className={classes.iFrame}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
      </div>
    </ThemeProvider>
  );
}

export default withRouter(Admin, {
  onRedirecting: () => <LoadingAdmin />,
});
