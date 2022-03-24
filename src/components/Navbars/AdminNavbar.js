import React, { useEffect, useContext, useState } from "react";
//import { CognitoUserAttribute } from "amazon-cognito-identity-js";

import { AccountContext } from '../../components/Accounts/Accounts';

import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import LogoutBtn from "../Auth/Buttons/LogoutBtn";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

import MenuIcon from '@material-ui/icons/Menu';

import avatar from "../../assets/img/faces/avatar-blank.jpg";

// core components
//import AdminNavbarLinks from "./AdminNavbarLinks.js";

//hooks
import { useRouteName } from "../../hooks/index";

import styles from "../../assets/jss/material-dashboard-react/components/headerStyle";

const useStyles = makeStyles(styles);

export default function AdminNavbar(props) {
  const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  //const [company, setCompany] = useState("");
  // const [email, setEmail] = useState("");
  // const [segment, setSegment] = useState("");
  // const [tier, setTier] = useState("");

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((data) => {
      setFirstname(data["custom:firstname"]);
      // setLastname(data["custom:lastname"]);
      //setCompany(data["custom:company"]);
      // setEmail(data["email"]);
      // setSegment(data["custom:segment"]);
      // setTier(data["custom:tier"]);
    });
  }, []);

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
            <Hidden mdUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
                size="medium">
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
                    <h5 className={classes.userName}><span>Welcome, {firstname}</span></h5>
                  </div>
              </GridItem>
            </Hidden>
            {/* <GridItem xs={12} sm={12} md={1}>
              <h2 className={classes.title}>
                {routeName}
              </h2>
            </GridItem> */}
            {/* <Hidden mdDown implementation="css">
              <AdminNavbarLinks />
            </Hidden> */}
            <Hidden mdDown implementation="css">
              <h2 className={classes.title}>
                {routeName}
              </h2>
            </Hidden>
            <LogoutBtn />
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
