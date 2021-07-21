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
import backgroundIMG2 from "../../../../assets/img/advana-io-bg-02.jpg";
//import sentryFPO from "../../../../assets/img/products/sentry/sentry-fpo.png";
import promoteInventory from "../../../../assets/img/products/promote/promote-inventory.png";

// @material-ui/icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function PromoteInventory() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div
        className={classes.campaignsSection}
        style={{
          backgroundImage: `url(${backgroundIMG2})`,
          backgroundSize: "cover",
          width: "100vw",
          position: "relative",
          left: "-96.5px",
          overflow: "hidden",
          padding: "50px",
        }}
      >
        <GridContainer>
          <GridItem xs={12} sm={12} md={5}>
            <h1
              className={classes.title}
              style={{ paddingLeft: "50px", textAlign: "left" }}
            >
              Verified Inventory<br />
              <span>Promote Where Your Product Is</span>
            </h1>
            <h4 className={classes.subtitle}
            style={{ paddingLeft: "50px", textAlign: "left" }}
            >
            Advana verifies your product is selling before we activate your promotion ensuring the best returns for your investment. 
            </h4>
            <br />
            <Button
              style={{marginLeft: "50px"}}
              className={classes.solidBtn}
              variant="contained"
              color="primary"
              to="/"
            >
              <EventAvailableIcon className={classes.btnIcon} style={{marginRight: "20px"}} />
              BOOK A DEMO
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <img
              style={{ width: "100%" }}
              className={classes.heroImg}
              src={promoteInventory}
            />
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
