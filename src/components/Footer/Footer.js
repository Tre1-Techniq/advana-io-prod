/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Button } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";
import { Typography } from "@material-ui/core";

// @mui/icons-material
// import Apps from "@material-ui/icons/Apps";
// import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";

// Import Images
import advanaPillLogo from "../../assets/img/advana-pill-logo.png";

import advanaTheme from "../../advanaTheme";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  let history = useHistory();

  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
      <ThemeProvider theme={advanaTheme}>
        <footer
          id="footer"
          className={classes.footer}
        >
          <div className={classes.container}>
              <Button onClick={() => history.push("/")} className={classes.footerLogo}>
                <img src={advanaPillLogo} />
              </Button>
            <div className={classes.footerNav}>
              <List className={classes.footerNavUL}>
                <ListItem className={splitLocation[1] === "dooh" ? classes.listItemActive : classes.ListItem}>
                  <Button
                    className={classes.headerLink}
                    onClick={() => history.push("/dooh")}
                    variant="text"
                    color= "primary"
                    size="small"
                  >
                    DOOH
                  </Button>
                </ListItem>
                <ListItem className={splitLocation[1] === "sentry" ? classes.listItemActive : classes.ListItem}>
                  <Button
                    className={classes.headerLink} 
                    onClick={() => history.push("/sentry")} 
                    variant="text" 
                    color="primary" 
                    size="small">
                    SENTRY
                  </Button>
                </ListItem>
                <ListItem className={splitLocation[1] === "insight" ? classes.listItemActive : classes.ListItem}>
                  <Button
                    className={classes.headerLink} 
                    onClick={() => history.push("/insight")} 
                    variant="text" 
                    color="primary" 
                    size="small">
                    INSIGHT
                  </Button>
                </ListItem>
                <ListItem className={splitLocation[1] === "promote" ? classes.listItemActive : classes.ListItem}>
                  <Button
                    className={classes.headerLink}
                    onClick={() => history.push("/promote")}
                    variant="text"
                    color="primary"
                    size="small">
                    PROMOTE
                  </Button>
                </ListItem>
                {/* <ListItem className={classes.listItem}>
                  <Button href="/home#about" variant="text" color="primary" size="small">
                    ABOUT
                  </Button>
                </ListItem> */}
                {/* <ListItem className={classes.listItem}>
                  <Button
                    onClick={() => handleOpenSignIn()}
                    variant="contained"
                    color="secondary"
                  >
                    <ExitToAppIcon className={classes.btnIcon} />
                    SIGN IN
                  </Button>
                </ListItem> */}
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
                  <Link className={classes.footerA} to="/"> ADVANA.IO</Link> , Chart your path for
                  hyper-growth.
                </Typography>
              </span>
            </div>
          </div>
        </footer>
      </ThemeProvider>
  );
}
