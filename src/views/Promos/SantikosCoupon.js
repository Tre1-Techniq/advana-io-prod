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

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Button from '@material-ui/core/Button';

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import santikosLogoColor from "../../assets/img/promos/santikos/santikos-logo-color.png";
import sourPatchOffer from "../../assets/img/promos/santikos/sour-patch-offer.png";
import santikosQR from "../../assets/img/promos/santikos/santikos-qr-code.png";
import googleMapPin from "../../assets/img/promos/santikos/google-map-pin.png"

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
                backgroundImage: "linear-gradient(125deg, rgba(175,13,142,1) 0%, rgba(16,54,158,1) 96%)",
            }}
            >
                <div className={classes.container}>
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <h2 className={classes.headerFontSm}>Here&#39;s your Coupon</h2>
                        <img className={classes.promoImg} src={sourPatchOffer} />
                        <h3 className={classes.subHeader}>Present QR code at Santikos concession</h3>
                        <Card className={classes.cardQrWrapper}>
                            <CardHeader>
                                <img className={classes.santikosLogoColor} src={santikosLogoColor} />
                                <CardBody className={classes.cardQrBody}>
                                <img className={classes.santikosQR} src={santikosQR} />
                                </CardBody>
                            </CardHeader>
                        </Card>
                        <Button href="https://www.google.com/maps/search/santikos+san+antonio+texas/@29.4816477,-98.5600621,11z/data=!3m1!4b1/" target="_blank" className={classes.santikosGoogleBTN}>
                            <img className={classes.santikosBtnIcon} src={googleMapPin} />Find My Santikos
                        </Button>
                        <p className={classes.finePrint}>Limit one coupon per visit. Offer valid from Oct 6, 2021 to Jan 24, 2022 in participating Santikos Theaters while supplies last.</p>
                    </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
      </ThemeProvider>
  );
}
