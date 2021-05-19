import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import statCustomers from "../../../assets/img/stats-customers.png";
import statLocations from "../../../assets/img/stats-locations.png";
import statTransactions from "../../../assets/img/stats-transactions.png";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/statStyle.js";

const useStyles = makeStyles(styles);

export default function StatsSection() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <GridContainer
        className={classes.advanaStatGrid}
        style={{ position: "relative", top: "-50px" }}
      >
        <GridItem className={classes.advanaStat} xs={12} sm={12} md={4}>
          <img style={{ width: "75%" }} src={statCustomers} />
        </GridItem>
        <GridItem className={classes.advanaStat} xs={12} sm={12} md={4}>
          <img style={{ width: "75%" }} src={statLocations} />
        </GridItem>
        <GridItem className={classes.advanaStat} xs={12} sm={12} md={4}>
          <img style={{ width: "75%" }} src={statTransactions} />
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
}
