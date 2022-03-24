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

import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";

import DoohIntro from "../../../Modal/DoohIntro";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../../advanaTheme";

// Import Images
import doohProgrammatic from "../../../../assets/img/products/dooh/dooh-programmatic.png";

// @material-ui/icons
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";

import styles from "../../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function InsightTrend() {
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
      <div className={classes.campaignsBG}>
        <div className={classes.sectionBG}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1
                className={classes.title}
              >
                Programmatic for Pros
              </h1>
              <h3 className={classes.subHeader}>Secure your audience’s time in advance</h3>
              <h4 className={classes.subtitle}
              >
              Private programmatic marketplaces from Advana deliver the ultimate programmatic buying experience with advanced targeting and early access to premium impression inventory.
              </h4>
              <Box className={classes.btnBox}>
                <Button
                  className={classes.solidBtn}
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpenBookIntro()}
                >
                  <EventAvailableIcon className={classes.btnIcon} />
                  APPLY NOW
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
                    <DoohIntro />
                  </Fade>
                </Modal>
              </Box>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <img
                className={classes.heroImg}
                src={doohProgrammatic}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}
