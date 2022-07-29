import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

import Iframe from 'react-iframe';

import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

// @mui/material
import { makeStyles } from "@material-ui/core/styles";

// import dashboard01 from "../../assets/img/dashboard-01.jpg";

// core components
// import GridItem from "../../components/Grid/GridItem.js";
// import GridContainer from "../../components/Grid/GridContainer.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Analytics() {
  const classes = useStyles();

  const { user } = useAuth0();

  const pbiSentry = "https://user.metadata.io/pbiSentry";
  const sentryId = `${user[pbiSentry]}`;

  // PowerBI Workspace Link
  // const sentryLink = "https://app.powerbi.com/groups/" + `${sentryId}`; 

  // const handleClick = () => {
  //   window.open(`${sentryLink}`);
  // };

  useEffect(() => {
    
  }, []);
  
  return (
    <ThemeProvider theme={advanaTheme}>
     <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
       <Iframe url="https://powerbiembed-dot-advana-data-infra.uc.r.appspot.com/"
         width="100%"
         height="640px"
         frameBorder="0"
         id="powerBIreport"
         className={classes.powerBIreport}
         display="initial"
         position="relative"/>
      </GridItem>
    </GridContainer>
    </ThemeProvider>
  );
}
