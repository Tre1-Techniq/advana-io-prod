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
import { Apps } from "@material-ui/icons";

import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

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
          <CustomDropdown
              noLiPadding
              buttonText="PRODUCTS"
              buttonProps={{
                className: classes.dropdownLink,
                color: "transparent",
              }}
              buttonIcon={Apps}
              dropdownList={[
                <Button href="/sentry" className={classes.dropdownLink} variant="text" color="primary" size="small">
                  SENTRY
                </Button>,
                <Button href="/insight" className={classes.dropdownLink} variant="text" color="primary" size="small">
                  INSIGHT
                </Button>,
                <Button href="/promote" className={classes.dropdownLink} variant="text" color="primary" size="small">
                  PROMOTE
                </Button>,
              ]}
            />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button href="/campaigns" variant="text" color="primary" size="small">
            CAMPAIGNS
          </Button>
        </ListItem>
        {/* <ListItem className={classes.listItem}>
          <Button href="/home#about" variant="text" color="primary" size="small">
            ABOUT
          </Button>
        </ListItem> */}
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
