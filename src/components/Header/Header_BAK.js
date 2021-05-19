import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// Image Imports
import pillLogo from "../../assets/img/advana-pill-logo.png";
import fullLogo from "../../assets/img/logo-full-grad.png";

// core components
import styles from "../../assets/jss/material-dashboard-react/components/headerStyle";
import { Typography } from "@material-ui/core";

const headerLinks = [
  {
    label: "HOME",
    route: "/home",
  },
  {
    label: "PRODUCTS",
    route: "/products",
  },
  {
    label: "CAMPAIGNS",
    route: "/campaigns",
  },
  {
    label: "ABOUT",
    route: "/about",
  },
];

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  const brandComponent = <Button className={classes.title}>{brand}</Button>;

  const displayDesktop = () => {
    return (
      <React.Fragment>
        <Toolbar className={classes.navLogo}>
          <Link to="/">
            <img src={fullLogo} width="150px" />
          </Link>
          <Box className={classes.navLinks}>{getMenuButtons()}</Box>
          <Box className={classes.adminLinks}>
            <Button variant="contained" color="primary">
              <AccountCircleIcon /> SIGN IN
            </Button>
          </Box>
        </Toolbar>
      </React.Fragment>
    );
  };

  const getMenuButtons = () => {
    return headerLinks.map(({ label, route }) => {
      return (
        <Button
          className={classes.navBtn}
          {...{
            key: label,
            color: "inherit",
            to: route,
            component: Link,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return <AppBar className={classes.appBar}>{displayDesktop()}</AppBar>;
}

Header.defaultProp = {
  color: "transparent",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
