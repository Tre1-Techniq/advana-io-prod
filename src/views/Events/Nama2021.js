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

import React, { useEffect } from "react";
//import axios from 'axios';

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/lab components
//import Pagination from '@material-ui/lab/Pagination';
//import Autocomplete from '@material-ui/lab/Autocomplete';

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/icons
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// core components
//import GridContainer from "../../components/Grid/GridContainer";
//import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";

// Import Imges
import nama2021 from "../../assets/img/nama-2021.png";

// Sections for this page
import HubspotFormNama from "./Sections/HubSpotFormNama";

import styles from "../../assets/jss/material-kit-react/views/landingPageStyle";

function ScrollTop(props) {
  const { children, window } = props;
  const useScrollStyles = makeStyles((styles) => ({
    root: {
      position: "fixed",
      bottom: styles.spacing(2),
      right: styles.spacing(2),
      zIndex: "20",
    },
  }));
  const scrollClasses = useScrollStyles();
  // You need to set the window ref as useScrollTrigger if using an iFrame
  // will default to window.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={scrollClasses.root}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles(styles);

export default function Campaigns(props) {
    const classes = useStyles();
    const { ...rest } = props;

    useEffect(() => {
      const pageRoot = document.querySelector("#root");
      setTimeout(() => pageRoot.scrollIntoView({block: "start", behavior: "smooth"}), 100);
    }, []);
    
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.heroContainer}>
        <Header
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "white",
          }}
          {...rest}
        />
        <Toolbar
          style={{ position: "absolute", top: "-50px" }}
          id="back-to-top-anchor"
        />

        <Parallax className={classes.parallaxSm} image={require("../../assets/img/advana-io-bg-01.jpg").default}>
          <div className={classes.containerSm}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.eventHero}>
                  <img className={classes.heroImgSm} src={nama2021} />
                </div>
                <h1 className={classes.titleSm}>
                  NAMA 2021 Contact Form
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <HubspotFormNama name="nama" />
          </div>
        </div>
        
          <ScrollTop
            style={{ zIndex: "2000" }}
            className={classes.scrollTop}
            {...props}
          >
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon color="inherit" />
            </Fab>
          </ScrollTop>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
