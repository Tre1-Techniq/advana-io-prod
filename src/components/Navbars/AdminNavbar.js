import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import MenuIcon from '@material-ui/icons/Menu';

import avatar from "../../assets/img/faces/avatar-blank.jpg";

// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";

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
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Toolbar className={classes.container}>
            <GridItem xs={12} sm={12} md={1}>
              <h2 className={classes.title}>
                {routeName}
              </h2>
            </GridItem>
            <Hidden mdUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
                size="large">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden mdDown implementation="css">
              <GridItem xs={12} sm={12} md={10}>
                <div className={classes.dashboardNavHeader}>
                  <div className={classes.userAvatarWrapper}>
                      <a className={classes.userAvatar} href="#" onClick={(e) => e.preventDefault()}>
                        <img src={avatar} alt="User Avatar" />
                      </a>
                    </div>
                    <h5 className={classes.userName}><span>Firstname Lastname</span></h5>
                  </div>
              </GridItem>
            </Hidden>
            <Hidden mdDown implementation="css">
              <AdminNavbarLinks />
            </Hidden>
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
