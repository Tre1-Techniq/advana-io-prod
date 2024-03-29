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

import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes
//import classNames from "classnames";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

//Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { FormControl } from '@material-ui/core';
// import { InputLabel } from '@material-ui/core';
// import { FormHelperText } from '@material-ui/core';
// import { Input } from '@material-ui/core';

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

// @material-ui/icons
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// core components
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import Parallax from "../../../components/Parallax/Parallax";

//import DoohIntro from "../../Modal/DoohIntro";
import DoohSched from "../../Modal/DoohSched";

import styles from "../../../assets/jss/material-kit-react/views/landingPageStyle";

// Sections for this page
import DoohStats from "./Sections/DoohStats";
import DoohCaptivate from "./Sections/DoohCaptivate";
import DoohImpressions from "./Sections/DoohImpressions";
import DoohMeasure from "./Sections/DoohMeasure";
import DoohProgrammatic from "./Sections/DoohProgrammatic";

// Import Imges
import advanaDoohMap from "../../../assets/img/advana-map-dooh.png";

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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  //let history = useHistory();
  const classes = useStyles();
  const { ...rest } = props;

  const [openBookIntro, setOpenBookIntro] = useState(false);

  const handleOpenBookIntro = () => {
    setOpenBookIntro(true);
  };
  
  const handleCloseBookIntro = () => {
    setOpenBookIntro(false);
  };

  useEffect(() => {
    const pageRoot = document.querySelector("#root");
    setTimeout(() => pageRoot.scrollIntoView({block: "start", behavior: "smooth"}), 100);
  }, []);

  return (
    <ThemeProvider theme={advanaTheme}>
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
        <Parallax image={require("../../../assets/img/advana-io-bg-01.jpg").default} className={classes.parallax}>
          <div className={classes.heroContainer}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <h1 className={classes.title}>
                  Advana Digital Out-of-Home
                </h1>
                <h3 className={classes.subHeader}>Media with Purpose, Performance, and Results</h3>
                <h4 className={classes.subtitle}>
                Meet your audience at the largest office {"&"} workplace digital advertising
                network in the world powered by Advana.
                </h4>
                <br />
                <Box className={classes.btnBox}>
                  <Button
                    className={classes.solidBtn}
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenBookIntro()}
                  >
                    <EventAvailableIcon className={classes.btnIcon} />
                    BOOK AN INTRO
                  </Button>
                  {/* <Button
                    onClick={() => {
                      history.push("/");
                    }}
                    className={classes.outlineBtn}
                    variant="outlined"
                    color="primary"
                  >
                    <ExitToAppIcon className={classes.btnIcon} />
                    GET STARTED
                  </Button> */}
                </Box>
                <Modal
                  className={classes.modal}
                  open={openBookIntro}
                  onClose={handleCloseBookIntro}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                      timeout: 300,
                      classes: {
                          root: classes.modalBackdrop
                      }
                  }}
                >
                  <Fade in={openBookIntro}>
                    <DoohSched />
                  </Fade>
                </Modal>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <img className={classes.heroImg} src={advanaDoohMap} />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <DoohStats />
            <DoohCaptivate name="captivate" />
            <DoohImpressions name="impressions" />
            <DoohMeasure name="measure" />
            <DoohProgrammatic name="programmatic" />
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
        </div>
        <Footer />
    </ThemeProvider>
  );
}
