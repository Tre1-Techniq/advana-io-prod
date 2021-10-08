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
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../../../advanaTheme";

// Import Images
import promoteIntelligence from "../../../../assets/img/products/promote/promote-intelligence.png";

// core components
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function PromoteIntelligence() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.campaignsBG}>
        <div className={classes.sectionBG}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={5}>
              <h1
                className={classes.title}
              >
                Ultimate Intelligence<br />
                <span>eCommerce Grade Analytics<br/>for the Retail Environment</span>
              </h1>
              <h4 className={classes.subtitle}
              >
              Track your impressions, engagements, and sales for every location participating in your campaign.  
              </h4>
              <GridItem>
                <h3 style={{ color: "#2e4094", fontWeight: "400" }}>
                Feel the Need, the Need for Speed 
                </h3>
                <p style={{ color: "#848484" }}>
                Fast moving consumer goods (FMCGs) thrive with Advana Promote helping you sell, earn, and profit faster than ever. With unmatched targeting capabilities, you’ll leave your competition ailing in the danger zone.
                </p>
                <h3 style={{ color: "#2e4094", fontWeight: "400" }}>
                Want more Insight? Go <span className={classes.badgePro}>PRO</span>
                </h3>
                <p style={{ color: "#848484" }}>
                In addition to our performance metrics Advana Promote PRO brings you enhanced insights with day part {"&"} basket analysis. Knowing when shoppers buy your products and what they’re buy it with will arm you with intel guaranteed to take your competition’s breath away.
                </p>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <img
                src={promoteIntelligence}
                className={classes.heroImg}
              />
            </GridItem>
          </GridContainer>
          </div>
      </div>
    </ThemeProvider>
  );
}
