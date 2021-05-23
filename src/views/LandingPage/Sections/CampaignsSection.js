import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

// Import Images
import backgroundIMG2 from "../../../assets/img/advana-io-bg-02.jpg";
import heroCampaigns from "../../../assets/img/hero-campaigns.png";

// @material-ui/icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function CampaignsSection() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div
        className={classes.campaignsSection}
        style={{
          backgroundImage: `url(${backgroundIMG2})`,
          backgroundSize: "cover",
          width: "100vw",
          position: "relative",
          left: "-100px",
          overflow: "hidden",
          padding: "50px",
        }}
      >
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1
              className={classes.title}
              style={{ paddingLeft: "50px", textAlign: "left" }}
            >
              High Performance Marketing <br />
              <span>{"Campaigns "}</span>
              with High Transparency
            </h1>
            <h4
              className={classes.subtitle}
              style={{
                color: "#848484",
                textAlign: "left",
                paddingLeft: "50px",
                maxWidth: "475px",
              }}
            >
              Only Advana connects billions of retail transactions to chart your
              path for hyper-growth
            </h4>
            <br />
            <Box
              className={classes.btnBox}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "50px",
              }}
            >
              <Button
                className={classes.solidBtn}
                variant="contained"
                color="primary"
                to="/"
              >
                LEARN MORE
                <ChevronRightIcon style={{ marginLeft: "10px" }} />
              </Button>
            </Box>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <img
              style={{ width: "100%" }}
              className={classes.heroImg}
              src={heroCampaigns}
            />
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
