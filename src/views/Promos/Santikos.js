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

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import HubspotForm from 'react-hubspot-form';

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import santikosLogoWht from "../../assets/img/promos/santikos/santikos-logo-wht.png";
import sourPatchOffer from "../../assets/img/promos/santikos/sour-patch-offer.png";

import '../../fonts/Appetite/Appetite.ttf';

import styles from "../../assets/jss/material-kit-react/views/santikosPromo";

const useStyles = makeStyles(styles);

export default function Santikos() {
  const classes = useStyles();

  return (
      <ThemeProvider theme={advanaTheme}>
        <div>
            <div
            className={classes.pageHeader}
            style={{
                backgroundImage: "linear-gradient(125deg, rgba(175,13,142,1) 0%, rgba(16,54,158,1) 75%)",
            }}
            >
                <div className={classes.container}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                          <h2 className={classes.headerFont}>Now Playing at</h2>
                          <img className={classes.mainLogo} src={santikosLogoWht} />
                          <img className={classes.promoImg} src={sourPatchOffer} />
                          <div className={classes.santikosForm}>
                            <HubspotForm
                              portalId='7027050'
                              formId='73a76401-928d-4ab7-97ec-fb3d2316907b'
                              onSubmit={() => console.log('Register!')}
                              onReady={(form) => console.log('Form ready: ', form)}
                              loading={<div>Loading...</div>}
                            />
                          </div>
                          <p className={classes.finePrint}>Limit one coupon per visit. Offer valid from Oct 6, 2021 to Jan 24, 2022 in participating Santikos Theaters while supplies last.</p>
                      </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
      </ThemeProvider>
  );
}
