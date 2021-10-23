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
import advanaTheme from "../../../../advanaTheme";

// Import Images
import promoteReturns from "../../../../assets/img/products/promote/promote-returns.png";

// @material-ui/icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

// core components
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function PromoteEasy() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.campaignsBG}>
        <div className={classes.sectionBG}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <img className={classes.heroImg} src={promoteReturns} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
              Oh So Easy…
              <h3 className={classes.subHeader}>Just sit back and enjoy the returns</h3>
              </h1>
              <h4 className={classes.subtitle}>
              We work directly with over 700 operators to secure their participation, increase your distribution, test your creative on-screen, load advertising {"&"} promotional pricing, and optimize performance throughout the campaign.  
              </h4>
              <br />
              <Button
                className={classes.solidBtn}
                variant="contained"
                color="primary"
                to="/"
              >
                <EventAvailableIcon className={classes.btnIcon} style={{marginRight: "20px"}} />
                BOOK A DEMO
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}
