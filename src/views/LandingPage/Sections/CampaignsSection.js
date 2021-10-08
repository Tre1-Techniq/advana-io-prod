/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

// Import Images
import heroCampaigns from "../../../assets/img/hero-campaigns.png";
import verifiedBadge from "../../../assets/img/verified-badge.png";

// @material-ui/icons
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function CampaignsSection() {
  let history = useHistory();
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.campaignsBG}>
        <div className={classes.sectionBG}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1
                className={classes.title}
              >
                High Performance Marketing <br />
                <span>Campaigns </span>
                with High Transparency
              </h1>
              <GridItem  xs={12} sm={12} md={6} >
                <img
                  src={verifiedBadge}
                  className={classes.verifiedBadge}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          style={{ fontSize: "2.25rem" }}
                          color="primary"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Verified Product Availability"
                        style={{
                          fontFamily: `"Roboto", sans-serif`,
                          fontWeight: "300",
                          color: "#848484",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          style={{ fontSize: "2.25rem" }}
                          color="primary"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Verified Viewed Impressions"
                        style={{
                          fontFamily: `"Roboto", sans-serif`,
                          fontWeight: "300",
                          color: "#848484",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          style={{ fontSize: "2.25rem" }}
                          color="primary"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Verified New Locations Selling"
                        style={{
                          fontFamily: `"Roboto", sans-serif`,
                          fontWeight: "300",
                          color: "#848484",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon
                          style={{ fontSize: "2.25rem" }}
                          color="primary"
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary="Verified Same-Store Sales Growth"
                        style={{
                          fontFamily: `"Roboto", sans-serif`,
                          fontWeight: "300",
                          color: "#848484",
                        }}
                      />
                    </ListItem>
                  </List>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Box
                  className={classes.btnBox}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Button
                    className={classes.solidBtn}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      history.push('/promote');
                    }}
                  >
                    LEARN MORE
                    <ChevronRightIcon style={{ marginLeft: "10px" }} />
                  </Button>
                </Box>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <img
                style={{ width: "100%" }}
                className={classes.heroImg}
                src={heroCampaigns}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}
