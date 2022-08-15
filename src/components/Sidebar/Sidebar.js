/*eslint-disable*/
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation, useHistory } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

// import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "../../components/Navbars/AdminNavbarLinks.js";

// Advana Theme Overrides
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import styles from "../../assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();
  let history = useHistory();

  // const [ isAdmin, setIsAdmin] = useState(false);

  const { user, getAccessTokenSilently } = useAuth0();

  const access = "https://user.metadata.io/access";
  const userAccess = `${user[access]}`
  const isAdmin = userAccess.includes("Admin");

  console.log("IS ADMIN: ", isAdmin);

  // const access = ["https://user.metadata.io/access"];
  // const userAccess = `${user[access][0]}`;

  // async function scanUserRoles() {
  //   const token = await getAccessTokenSilently();
  //     const response = await axios.get("https://dev-tyofb4m1.us.auth0.com/userinfo", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //   const userInfo = response.data;
  //   const access = "https://user.metadata.io/access";
  //   const userAccess = `${userInfo[access]}`
  //   const isAdmin = userAccess.includes("Admin");

  //   console.log("IS ADMIN: ", isAdmin);
  // }

  useEffect(() => {
    // scanUserRoles();
  }, []);

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { color, logo, image, logoText, routes, adminRoutes } = props;
  var links = (
    <List className={classes.list}>
      { isAdmin && 
      <div>
        {adminRoutes.map((prop, key) => {
          var activePro = " ";
          var listItemClasses;
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path),
          });
          const whiteFontClasses = classNames({
            [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
          });
  
          return (
            <NavLink
              to={prop.layout + prop.path}
              className={activePro + classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem button className={classes.itemLink + listItemClasses}>
                {typeof prop.icon === "string" ? (
                  <Icon
                    className={classNames(classes.itemIcon, whiteFontClasses)}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses)}
                  />
                )}
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames(classes.itemText, whiteFontClasses)}
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
          );
        })}
        </div>
      }

      { !isAdmin && 
        <div>
          {routes.map((prop, key) => {
            var activePro = " ";
            var listItemClasses;
            listItemClasses = classNames({
              [" " + classes[color]]: activeRoute(prop.layout + prop.path),
            });
            const whiteFontClasses = classNames({
              [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
            });
    
            return (
              <NavLink
                to={prop.layout + prop.path}
                className={activePro + classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(classes.itemIcon, whiteFontClasses)}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(classes.itemIcon, whiteFontClasses)}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : prop.name}
                    className={classNames(classes.itemText, whiteFontClasses)}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            );
          })}
        </div>
      } 
    </List>
  );

  function refreshPage() {
    window.location.reload();
  }

  var brand = (
    <div className={classes.logo}>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => {
          history.push("/");
          refreshPage();
        }}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
      </a>
      {logoText}
    </div>
  );
  return (
      <ThemeProvider theme={advanaTheme}>
        <div>
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="right"
              open={props.open}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={props.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {brand}
              <div className={classes.sidebarWrapper}>
                <AdminNavbarLinks />
                {links}
              </div>
              {image !== undefined ? (
                <div
                  className={classes.background}
                  style={{ backgroundImage: "url(" + image + ")" }}
                />
              ) : null}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              anchor="left"
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {brand}
              <div className={classes.sidebarWrapper}>{links}</div>
              {image !== undefined ? (
                <div
                  className={classes.background}
                  style={{ backgroundImage: "url(" + image + ")" }}
                />
              ) : null}
            </Drawer>
          </Hidden>
        </div>
      </ThemeProvider>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  routesAdmin: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
