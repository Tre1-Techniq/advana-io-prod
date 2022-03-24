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

import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

//Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
import MuiFade from "../../../Modal/MuiFade";

import Intro from "../../../Modal/Intro";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../../advanaTheme";

// Import Images
//import categorySentryFPO from "../../../../assets/img/products/sentry/sentry-fpo.png";
import categorySentry from "../../../../assets/img/products/sentry/sentry-category.png";
// import energyDrink from "../../../../assets/img/icons/energy-drink.png";
// import freshFoods from "../../../../assets/img/icons/fresh-foods.png";
// import meatSnacks from "../../../../assets/img/icons/meat-snacks.png";
// import mixedNuts from "../../../../assets/img/icons/mixed-nuts.png";
// import potatoChips from "../../../../assets/img/icons/potato-chipsr.png";
// import water from "../../../../assets/img/icons/water.png";

// @material-ui/icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
// import GridContainer from "../../../../components/Grid/GridContainer.js";
// import GridItem from "../../../../components/Grid/GridItem.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SentryCategory() {
  const classes = useStyles();

  const [openBookIntro, setOpenBookIntro] = useState(false);

  const handleOpenBookIntro = () => {
    setOpenBookIntro(true);
  };
  
  const handleCloseBookIntro = () => {
    setOpenBookIntro(false);
  };

  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.productsSection}>
        <Box className={classes.sectionBoxWrapper}>
          <Box className={classes.sectionBox} xs={12} sm={12} md={6} mr={3} order={{xs: 2, sm: 2, md: 1}}>
            <img className={classes.heroImg} src={categorySentry} />
          </Box>
          <Box className={classes.sectionBox} xs={12} sm={12} md={6} order={{xs: 1, sm: 1, md: 2}}>
            <h1 className={classes.title}>
            Category Sentry
            </h1>
            <h3 className={classes.subHeader}>Know your Category</h3>
            <h4 className={classes.subtitle}>
            Get to know your market share, retail pricing, and velocity for your brands and your competitors in your category.
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
                <MuiFade in={openBookIntro}>
                  <Intro />
                </MuiFade>
              </Modal>
            </Box>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
