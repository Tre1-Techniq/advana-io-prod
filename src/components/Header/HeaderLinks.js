/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/icons
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <Box className={classes.navBarBox}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button className={classes.navBtn} color="primary" size="small">
              <Link to="/"></Link>HOME
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button className={classes.navBtn} color="primary" size="small">
              <Link to="/products">products</Link>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button className={classes.navBtn} color="primary" size="small">
              <Link to="/campaigns">CAMPAIGNS</Link>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button className={classes.navBtn} color="primary" size="small">
              <Link to="/about">ABOUT</Link>
            </Button>
          </ListItem>
        </List>
        <Box>
          <Link to="/admin">
            <Button
              style={{
                left: "275px",
              }}
              className={classes.adminBtnBox}
              variant="outlined"
              color="primary"
              size="small"
            >
              <ExitToAppIcon style={{ marginRight: "10px" }} />
              SIGN IN
            </Button>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
