import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/contactSectionStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.section}>
        <GridContainer className={classes.contactGrid}>
          <GridItem cs={12} sm={12} md={12}>
            <h1 className={classes.title}>
              Getting Started is Quick <span>{"&"}</span> Easy!
            </h1>
            <h4 className={classes.subtitle}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam
            </h4>
            <br />
            <GridContainer
              className={classes.contactBtns}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "30px 100px",
              }}
            >
              <GridItem xs={12} sm={12} md={6}>
                <Button
                  className={classes.actionBtn}
                  variant="contained"
                  color="secondary"
                >
                  BRANDS
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  className={classes.actionBtn}
                  variant="contained"
                  color="secondary"
                >
                  OPERATORS
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
