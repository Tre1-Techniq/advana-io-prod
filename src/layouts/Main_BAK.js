import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useIntl } from 'react-intl';
//import ReactSwitch from 'react-switch';

// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

import Navbar from "../components/Navbars/Navbar.js";

import { FaBars } from 'react-icons/fa';
//import reactLogo from './assets/advana-pill-logo.png';
//import Footer from '../components/Footer/Footer';

// nodejs library to set properties for components
import PropTypes from "prop-types";

import './styles/Admin.scss';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";

import routes from "../routes.js";

const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };

const useStyles = makeStyles(styles);

//let ps;

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
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  );

const Main = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
    // ref to help us initialize PerfectScrollbar on windows devices
  //const mainPanel = React.createRef();
    // styles
  const classes = useStyles();
  const intl = useIntl();

  // initialize and destroy the PerfectScrollbar plugin
//   useEffect(() => {
//     if (navigator.platform.indexOf("Win") > -1) {
//       ps = new PerfectScrollbar(mainPanel.current, {
//         suppressScrollX: true,
//         suppressScrollY: false,
//       });
//       document.body.style.overflow = "hidden";
//     }
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       if (navigator.platform.indexOf("Win") > -1) {
//         ps.destroy();
//       }
//     };
//   }, [mainPanel]);

  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        {/* <h1>
          <img width={80} src={reactLogo} alt="react logo" /> {intl.formatMessage({ id: 'title' })}
        </h1>
        <p>{intl.formatMessage({ id: 'description' })}</p> */}
        
        <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#4db8be"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'collapsed' })}</span>
      </div>
      </header>

      <Navbar
        routes={routes}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
        <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
        </div>
        ) : (
        <div className={classes.map}>{switchRoutes}</div>
        )}
      
      {/* <div className="block">
        <ReactSwitch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleImageChange}
          checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'image' })}</span>
      </div> */}

      <footer>
        FOOTER
      </footer>
    </main>
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
