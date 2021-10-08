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
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../../advanaTheme";

// Import Images
import sentryRetail from "../../../../assets/img/products/sentry/sentry-retail.png";

// @material-ui/icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SentryRetail() {
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
                Retail Sentry <br />
                <span>Know your Space</span>
              </h1>
              <h4 className={classes.subtitle}
              >
              Gain visibility into your distribution, retail pricing, out-of-stocks, promotional effectiveness and more.
              </h4>
              <Button
                className={classes.solidBtn}
                variant="contained"
                color="primary"
                to="/"
              >
                <EventAvailableIcon className={classes.btnIcon} />
                BOOK A DEMO
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <img
                style={{ width: "100%" }}
                className={classes.heroImg}
                src={sentryRetail}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}
