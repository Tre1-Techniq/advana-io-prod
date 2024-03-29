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
import { useHistory } from "react-router-dom";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

import Box from '@material-ui/core/Box';

// Import Images
import heroProducts from "../../../assets/img/hero-products.png";

// @material-ui/icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
// import GridContainer from "../../../components/Grid/GridContainer.js";
// import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  let history = useHistory();
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.section}>
        <Box className={classes.sectionBoxWrapper}>
          <Box className={classes.sectionBox} xs={12} sm={12} md={6} order={{xs: 2, sm: 2, md: 1}}>
            <img className={classes.heroImg} src={heroProducts} />
          </Box>
          <Box className={classes.sectionBox} xs={12} sm={12} md={6} order={{xs: 1, sm: 1, md: 2}}>
            <h1 className={classes.title}>
              Actionable Insights <span>{"Direct"}</span> <br />
              from the Point of Sale
            </h1>
            <h4 className={classes.subtitle}>
            Discover your purchase trends, velocity, market share, distribution, retail pricing and more with Sentry.
            </h4>
            <br />
            <Button
              className={classes.solidBtn}
              variant="contained"
              color="primary"
              onClick={() => {
                history.push('/sentry');
              }}
            >
              LEARN MORE
              <ChevronRightIcon style={{ marginLeft: "10px" }} />
            </Button>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
