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
//import { useHistory } from "react-router-dom";

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
import advanaTheme from "../../../advanaTheme";

import Clients from "../../../components/Clients/Clients";

// @material-ui/icons
//import VerifiedIcon from "@material-ui/icons/VerifiedUser";
//import WhereToVoteIcon from "@material-ui/icons/WhereToVote";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

// Import Images
//import backgroundIMG1 from "../../../assets/img/advana-io-bg-01.jpg";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/contactSectionStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  //let history = useHistory();
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
      <div
        className={classes.section}
        xs={12}
        sm={12}
        md={12}
        style={{
          // backgroundImage: `url(${backgroundIMG1})`,
          backgroundSize: "cover",
          width: "100vw",
          position: "relative",
          left: "-96.5px",
          overflow: "hidden",
          padding: "50px",
        }}
      >
        <GridContainer className={classes.contactGrid}>
          <GridItem xs={12} sm={12} md={12}>
            <h1 className={classes.title} style={{ textAlign: "center" }}>
              <span>Connecting </span>
              Leading Brands {"&"} Retailers
              <span> to Perform</span>
            </h1>
          </GridItem>
          <Clients />
          <GridItem cs={12} sm={12} md={12}>
            <h1 className={classes.title}>
              Getting Started is Quick <span>{"&"}</span> Easy!
            </h1>
            {/* <h4 className={classes.subtitle}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam
            </h4> */}
            <br />
            <GridContainer
              className={classes.contactBtns}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "30px 100px",
              }}
            >
              {/* <GridItem xs={12} sm={12} md={6}>
                <Button
                  className={classes.actionBtn}
                  variant="contained"
                  color="secondary"
                >
                  <VerifiedIcon style={{ marginRight: "10px" }} />
                  BRANDS
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  className={classes.actionBtn}
                  variant="contained"
                  color="secondary"
                >
                  <WhereToVoteIcon style={{ marginRight: "10px" }} />
                  OPERATORS
                </Button>
              </GridItem> */}
              <GridItem>
                <Button
                  onClick={() => handleOpenBookIntro()}
                  className={classes.actionBtn}
                  variant="contained"
                  color="secondary"
                >
                  <AccountBoxIcon style={{ marginRight: "10px" }} />
                  GET STARTED!
                </Button>
                <Modal
                  className={classes.modal}
                  open={openBookIntro}
                  onClose={handleCloseBookIntro}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                      timeout: 500,
                      classes: {
                          root: classes.modalBackdrop
                      }
                  }}
                >
                  <Fade in={openBookIntro}>
                      <div className={classes.modalBookIntro}>
                        <h1>GET STARTED!</h1>
                      </div>
                  </Fade>
                </Modal>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
