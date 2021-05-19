import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/icons
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";

import styles from "assets/jss/material-kit-react/views/landingPage";

// Sections for this page
import StatsSection from "./Sections/StatsSection";
import ProductSection from "./Sections/ProductSection";
import CampaignsSection from "./Sections/CampaignsSection";
import TeamSection from "./Sections/TeamSection";
import ContactSection from "./Sections/ContactSection";

// Import Imges
import advanaMap from "assets/img/advana-map.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.heroContainer}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "white",
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/advana-io-bg-01.jpg").default}>
          <div className={classes.container} style={{ bottom: "-125px" }}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <h1 className={classes.title}>
                  The Performance Marketing <span>{"&"}</span> Intelligence
                  Platform for Retail
                </h1>
                <h4 className={classes.subtitle}>
                  Only Advana connects billions of retail transactions to chart
                  your path for hyper-growth
                </h4>
                <br />
                <Box className={classes.btnBox}>
                  <Button
                    className={classes.solidBtn}
                    variant="contained"
                    color="primary"
                    to="/"
                  >
                    <EventAvailableIcon style={{ marginRight: "10px" }} />
                    BOOK A DEMO
                  </Button>
                  <Button
                    className={classes.outlineBtn}
                    variant="outlined"
                    color="primary"
                    to="/"
                  >
                    <ExitToAppIcon style={{ marginRight: "10px" }} />
                    SIGN IN
                  </Button>
                </Box>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <img className={classes.heroImg} src={advanaMap} />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <StatsSection />
            <ProductSection />
            <CampaignsSection />
            <TeamSection />
            <ContactSection />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
