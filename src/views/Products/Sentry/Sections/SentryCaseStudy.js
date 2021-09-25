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
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../../../advanaTheme";

import Card from "../../../../components/Card/Card.js";

// Import Images
//import backgroundIMG2 from "../../../../assets/img/advana-io-bg-02.jpg";
import caseStudyAwake from "../../../../assets/img/products/sentry/sentry-case-study-awake.png";
//import awakeKPI01 from "../../../../assets/img/awake-kpi-01.png";
//import awakeKPI02 from "../../../../assets/img/awake-kpi-02.png";

import avatarAwake from "../../../../assets/img/faces/avatar-awake.jpg";

// @material-ui/icons
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SentryCaseStudy() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.caseSection}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>
              Case Study: <br />
              <span>Awake Chocolate Sentry</span>
            </h1>
            <h4 className={classes.subtitle}>
            Learn how Awake Chocolate uses Sentry to help operators stay in-stock and priced to win with their industry leading Awake Bites.
            </h4>
            <img
              src={caseStudyAwake}
              className={classes.sectionImg}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <GridItem xs={12} sm={12} md={12} className={classes.teamCard}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={4}
                className={classes.gridItem}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarAwake} alt="..." className={imageClasses} />
              </GridItem>
            </Card>
          </GridItem>
            <GridItem style={{ color: "#848484" }}>
              <h3 style={{ color: "#2e4094", fontWeight: "400" }}>
                Challenges
              </h3>
              <p>
              Out-of-stocks are all too prevalent in micro markets and cost our industry thousands of dollars everyday. With millions of shoppers reaching into empty Awake Chocolate boxes every month Awake turned to Advana for insights on how to slay the inventory slump.
              </p>
              <h3 style={{ color: "#2e4094", fontWeight: "400" }}>
                Solutions
              </h3>
              <p>
              Retail Sentry from Advana provides location-level analysis for manufacturers {"&"} participating operators to make joint decisions to maximize their growth. Leveraging billions of transactions, Sentry identifies purchase patterns where out of stocks are likely common and produces actions by location for operators to target improvements.
              </p>
              <h3 style={{ color: "#2e4094", fontWeight: "400" }}>
                Results
              </h3>
              <p>
              At-risk and confirmed out-of-stock locations have decreased by 20% since the partnership began delivering over 15% of top-line growth for Awake and the operators who offer Awake in their markets.
              </p>
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "space-between", padding: "0 !important"}}>
            <GridItem xs={12} sm={6} md={3}>
            <img src={awakeKPI01} style={{width: "100%", padding: "15px"}} />
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
            <img src={awakeKPI02} style={{width: "100%", padding: "15px"}} />
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
            <img src={awakeKPI01} style={{width: "100%", padding: "15px"}} />
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
            <img src={awakeKPI02} style={{width: "100%", padding: "15px"}} />
            </GridItem>
          </GridItem> */}
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
