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

import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../../advanaTheme";

//Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";

import Intro from "../../../Modal/Intro";

// Import Images
//import categorySentryFPO from "../../../../assets/img/products/sentry/sentry-fpo.png";
import insightOptimize from "../../../../assets/img/products/insight/insight-optimize.png";

// @material-ui/icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
// import GridContainer from "../../../../components/Grid/GridContainer.js";
// import GridItem from "../../../../components/Grid/GridItem.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function InsightOptimize() {
  const classes = useStyles();

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
      <div className={classes.section}>
        <Box className={classes.sectionBoxWrapper}>
          <Box className={classes.sectionBox} xs={12} sm={12} md={6} mr={3} order={{xs: 2, sm: 2, md: 1}}>
            <img className={classes.heroImg} src={insightOptimize} />
          </Box>
          <Box className={classes.sectionBox} xs={12} sm={12} md={6} order={{xs: 1, sm: 1, md: 2}}>
            <h1 className={classes.title}>
            Price Optimization
            </h1>
            <h3 className={classes.subHeader}>Price to Move Faster</h3>
            <h4 className={classes.subtitle}>
            Measuring velocity by price point, category competition, and geography helps you price your products to maximize revenue, profit, or units to meet your goals.
            </h4>
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
                <Intro />
              </Fade>
            </Modal>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
