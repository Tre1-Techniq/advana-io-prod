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
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../../../advanaTheme";

// core components
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";

import statLocations from "../../../../assets/img/stats-dooh-locations.png";
import statNielsen from "../../../../assets/img/stats-dooh-nielsen.png";
import statImpressions from "../../../../assets/img/stats-dooh-impressions.png";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/statStyle.js";

const useStyles = makeStyles(styles);

export default function StatsSection() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <GridContainer
        className={classes.advanaStatGrid}
      >
        <GridItem
          style={{ display: "flex", justifyContent: "center" }}
          xs={12}
          sm={12}
          md={4}
        >
          <img className={classes.statImg} src={statLocations} />
        </GridItem>
        <GridItem
          style={{ display: "flex", justifyContent: "center" }}
          xs={12}
          sm={12}
          md={4}
        >
          <img className={classes.statImg} src={statNielsen} />
        </GridItem>
        <GridItem
          style={{ display: "flex", justifyContent: "center" }}
          xs={12}
          sm={12}
          md={4}
        >
          <img className={classes.statImg} src={statImpressions} />
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
}
