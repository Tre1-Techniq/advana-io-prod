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
import advanaTheme from "../../../../advanaTheme";

// Import Images
//import categorySentryFPO from "../../../../assets/img/products/sentry/sentry-fpo.png";
import promoteImpressions from "../../../../assets/img/products/promote/promote-impressions.png";

// @material-ui/icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";

// Import Sections
import Intro from "../../../Modal/Intro";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function PromoteImpressions() {
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
      <div className={classes.impressionsSection}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <img className={classes.sectionImg} src={promoteImpressions} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>
            Impressions that Count<br />
            <span>Only Pay for what Consumers See</span>
            </h1>
            <h4 className={classes.subtitle}>
            Every impression with Advana is verified when a consumer interacts with our screens so you never pay for impressions when no one is looking.
            </h4>
            <br />
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
              <Fade in={openBookIntro}>
                <Intro />
              </Fade>
            </Modal>
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
