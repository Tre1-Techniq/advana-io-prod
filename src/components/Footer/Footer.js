/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";
//import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Button } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";
import { Typography } from "@material-ui/core";

// @material-ui/icons
import { Apps } from "@material-ui/icons";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";

// Import Images
import advanaPillLogo from "../../assets/img/advana-pill-logo.png";

import advanaTheme from "../../advanaTheme";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  let history = useHistory();

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
            <List>
              <ListItem className={classes.listItem}>
                <Button className={classes.footerBtn} onClick={() => history.push("/")} variant="text" color="primary" size="small">
                  HOME
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="PRODUCTS"
                    buttonProps={{
                      className: classes.customDropdown,
                      color: "transparent",
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                      <Button onClick={() => history.push("/sentry")} className={classes.dropdownLink} variant="text" color="primary" size="small">
                        SENTRY
                      </Button>,
                      <Button onClick={() => history.push("/insight")} className={classes.dropdownLink} variant="text" color="primary" size="small">
                        INSIGHT
                      </Button>,
                      <Button onClick={() => history.push("/promote")} className={classes.dropdownLink} variant="text" color="primary" size="small">
                        PROMOTE
                      </Button>,
                    ]}
                  />
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  className={classes.footerBtn}
                  onClick={() => history.push("/campaigns")}
                  variant="text"
                  color="primary"
                  size="small"
                >
                  CAMPAIGNS
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
