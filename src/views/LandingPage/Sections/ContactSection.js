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
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.section}>
        <GridContainer
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <GridItem cs={12} sm={12} md={8}>
            <h1
              className={classes.title}
              style={{
                width: "100%",
                textAlign: "center",
                marginBottom: "20px !important",
              }}
            >
              Getting Started is Quick <span>{"&"}</span> Easy!
            </h1>
            <h4
              className={classes.subtitle}
              style={{
                color: "#848484",
                textAlign: "center",
                width: "100%",
              }}
            >
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam
            </h4>
            <GridContainer>
              {/* <form>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              /> </form>*/}
              <GridItem
                xs={12}
                sm={12}
                md={4}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "225px" }}
                >
                  BRANDS
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "225px" }}
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
