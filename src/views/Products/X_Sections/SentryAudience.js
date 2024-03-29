/*!
=========================================================
Material Kit - v2.0.7
=========================================================

Product Page: https://www.creative-tim.com/product/material-kit
Copyright 2020 Creative Tim (https://www.creative-tim.com/)

Coded by Creative Tim

=========================================================

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

// Import Images
import categorySentryFPO from "../../../assets/img/products/sentry/sentry-fpo.png";

// @material-ui/icons
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SentryAudience() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.productsSection} style={{padding: "50px"}}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <img className={classes.heroImg} src={categorySentryFPO} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>
            Audience Sentry <br />
            <span>Know your Audience</span>
            </h1>
            <h4 className={classes.subtitle}>
            Get to know your audience with trial {"&"} repeat rates, consumer cohort analysis, bundling analysis, and daypart trends.
            </h4>
            <br />
            <Button
              className={classes.solidBtn}
              variant="contained"
              color="disabled"
              to="/"
            >
              COMING SOON!
              {/* <ChevronRightIcon style={{ marginLeft: "10px" }} /> */}
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
