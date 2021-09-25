import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useIntl } from 'react-intl';
import ToggleSwitch from 'react-switch';
import { FaBars } from 'react-icons/fa';

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Footer from "../components/Footer/Footer.js";

import routes from "../routes.js";

//import reactLogo from './assets/advana-pill-logo.png';
//import Footer from '../components/Footer/Footer';

// nodejs library to set properties for components
import PropTypes from "prop-types";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";

let ps;

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
      <Redirect from="/admin" to="/admin/profile" />
    </Switch>
  );

const useStyles = makeStyles(styles);

const Main = ({
  collapsed,
//   image,
  handleToggleSidebar,
  handleCollapsedChange,
//   handleImageChange,
}) => {
  const intl = useIntl();

  // styles
  const classes = useStyles();

  // states and functions
  const [mobileOpen, setMobileOpen] = useState(false);

  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

   // initialize and destroy the PerfectScrollbar plugin
   useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.mainPanel} ref={mainPanel}>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
       <AdminNavbar
            handleDrawerToggle={handleDrawerToggle}
            routes={routes}
        />
      </header>

        <div className="block collapse-switch">
            <ToggleSwitch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleCollapsedChange}
            checked={collapsed}
            onColor="#219de9"
            offColor="#bbbbbb"
            open={mobileOpen}
            />
            <span> {intl.formatMessage({ id: 'collapsed' })}</span>
        </div>

        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {getRoute() ? <Footer /> : null}

      <footer>
        FOOTER
      </footer>
    </div>
  );
};

Main.propTypes = {
    image: PropTypes.bool,
    collapsed: PropTypes.bool,
    handleToggleSidebar: PropTypes.func,
    handleCollapsedChange: PropTypes.func,
    handleImageChange: PropTypes.func,
};

export default Main;
