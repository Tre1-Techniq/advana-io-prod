/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer
      className={classes.footer}
      style={{
        height: "150px",
        backgroundImage: "linear-gradient(to bottom right, #2e4094, #5ec6c3)",
      }}
    >
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/home" className={classes.block}>
                HOME
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="#products" className={classes.block}>
                PRODUCTS
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="#campaigns" className={classes.block}>
                CAMPAIGNS
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="#about" className={classes.block}>
                ABOUT
              </Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <Link to="/home">ADVANA.IO</Link>, Powered by Sentry
          </span>
        </p>
      </div>
    </footer>
  );
}
