/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
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
            <Button className={classes.navLink} color="2e4094" size="small">
              <Typography>
                <Link to="#">HOME</Link>
              </Typography>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button className={classes.navLink} color="2e4094" size="small">
              <Typography>
                <Link to="#">PRODUCTS</Link>
              </Typography>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button className={classes.navLink} color="2e4094" size="small">
              <Typography>
                <Link to="#">CAMPAIGNS</Link>
              </Typography>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button className={classes.navLink} color="2e4094" size="small">
              <Typography>
                <Link to="#">ABOUT</Link>
              </Typography>
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
