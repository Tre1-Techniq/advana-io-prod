import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import AuthNavAdmin from "../Auth/auth-nav-admin";

import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

import MenuIcon from "@material-ui/icons/Menu";

// core components
//import AdminNavbarLinks from "./AdminNavbarLinks.js";

//hooks
import { useRouteName } from "../../hooks/index";

import styles from "../../assets/jss/material-dashboard-react/components/headerStyle";

const useStyles = makeStyles(styles);

export default function AdminNavbar(props) {
  const classes = useStyles();
  const routeName = useRouteName();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });

  const { user } = useAuth0();

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Toolbar className={classes.container}>
            <Hidden lgUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
                size="medium"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden mdDown implementation="css">
              <GridItem xs={12} sm={12} md={10}>
                <div className={classes.dashboardNavHeader}>
                  <h5 className={classes.userName}>
                    <span>Welcome, {user.name} </span>
                  </h5>
                </div>
              </GridItem>
            </Hidden>
            <AuthNavAdmin />
          </Toolbar>
        </GridItem>
      </GridContainer>
    </AppBar>
  );
}

AdminNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
