/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";
//import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/footerStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  let history = useHistory();
  
  return (
    <footer
      id="footer"
      className={classes.footer}
      style={{
        // top: "50px",
        height: "auto",
        width: "100%",
        position: "relative",
        display: "flex",
        padding: "50px",
        overflow: "hidden",
        justifyContent: "space-between",
        backgroundImage:
          "radial-gradient(circle, rgba(53,113,191,1) 0%, rgba(46,64,148,1) 70%, rgba(22,32,75,1) 100%)",
      }}
    >
      <div className={classes.container} style={{ width: "100%" }}>
        <div className={classes.left}>
          <List
            className={classes.list}
            style={{
              color: "#e4e4e4",
              fontSize: "10px",
              fontFamily: `"Roboto", sans-serif`,
              fontWeight: "300",
            }}
          >
            <ListItem className={classes.inlineBlock}>
              <Link onClick={() => history.push("/")} className={classes.block}>
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: `"Roboto", sans-serif`,
                    fontWeight: "300",
                  }}
                >
                  HOME
                </Typography>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="#" className={classes.block}>
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: `"Roboto", sans-serif`,
                    fontWeight: "300",
                  }}
                >
                  PRODUCTS
                </Typography>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="#" className={classes.block}>
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: `"Roboto", sans-serif`,
                    fontWeight: "300",
                  }}
                >
                  CAMPAIGNS
                </Typography>
              </Link>
            </ListItem>
          </List>
        </div>
        <div
          className={classes.right}
          style={{
            color: "#e4e4e4",
          }}
        >
          <span>
            <Typography
              style={{
                fontSize: "0.8rem",
                fontFamily: `"Roboto", sans-serif`,
                fontWeight: "300",
              }}
            >
              &copy; {1900 + new Date().getYear()}
              <Link to="/home"> ADVANA.IO</Link> , Chart your path for
              hyper-growth.
            </Typography>
          </span>
        </div>
      </div>
    </footer>
  );
}
