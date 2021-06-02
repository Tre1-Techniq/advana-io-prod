/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ThemeProvider, Button } from "@material-ui/core";

import advanaTheme from "../../advanaTheme";

// @material-ui/icons
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  let history = useHistory();
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <List className={classes.headerNav}>
        <ListItem className={classes.listItem}>
          <Button href="/" variant="text" color="primary" size="small">
            HOME
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button href="/home#products" variant="text" color="primary" size="small">
            PRODUCTS
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button href="/home#campaigns" variant="text" color="primary" size="small">
            CAMPAIGNS
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button href="/home#about" variant="text" color="primary" size="small">
            ABOUT
          </Button>
        </ListItem>
      </List>
      <Button
        onClick={() => {
          history.push("/signin");
        }}
        style={{ position: "absolute", right: "5vw", padding: "5px 8px" }}
        variant="contained"
        color="secondary"
      >
        <ExitToAppIcon className={classes.btnIcon} />
        SIGN IN
      </Button>
    </ThemeProvider>
  );
}
