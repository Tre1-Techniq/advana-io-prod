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
//import { useHistory } from "react-router-dom";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

// @material-ui/icons
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

// Import Imges
import advanaPillLogo from "../../../assets/img/advana-pill-logo.png";

// Import Sections
import HubspotForm from 'react-hubspot-form';

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function HubSpotFormNama() {
  //let history = useHistory();
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.nama2021Section}>
        <GridContainer style={{display: "contents"}}>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.formLogoWrapper}>
              <img className={classes.formLogoImg} src={advanaPillLogo} />
            </div>
            <h3 className={classes.formHeader}>
              Chart your path for hyper-growth
            </h3>
          <HubspotForm
            portalId='7027050'
            formId='c416129c-06cd-40bb-a8e3-f4c44117f6b0'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready: ', form)}
            loading={<div>Loading...</div>}
          />
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
