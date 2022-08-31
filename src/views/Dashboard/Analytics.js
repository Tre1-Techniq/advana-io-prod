import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


import Iframe from 'react-iframe';

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// import LoadingAdmin from '../../components/Auth/loading-admin';

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
  const { user, isAuthenticated } = useAuth0();
  // const [ apiLoading, setApiLoading ] = useState(false);

  // var reportUrl = "http://localhost:4000/pbi/sentry"

  const manufacturer = "https://user.metadata/manufacturer";
  const company = `${user[manufacturer]}`;

  switch (company) {
    case 'Frito-Lay':
      var reportUrl = "http://localhost:4000/pbi/sentry/frito-lay";
      break;

    case 'Awake':
      var reportUrl = "http://localhost:4000/pbi/sentry/awake";
      break;
    
    default:
      var reportUrl = "http://localhost:4000/pbi/sentry";
  }

  // const postUser = async () => {
  //   // const userId = `${user.sub}`

  //   let currentUser = [];

  //  const response = await axios.post("http://localhost:4000/postUser", {
  //     headers: { "content-type": "application/json" },
  //     data: JSON.stringify(user),
  //     body: JSON.stringify(user),
  //   })

  //   currentUser.push(response.data);

  //   console.log("USER: ", currentUser[0]);
  // }

  useEffect(() => {
    console.log(user);
    console.log("COMPANY: ", company);
    console.log("REPORT URL: ", reportUrl);
    // if (isAuthenticated) {
    //   postUser();
    // }
    // setApiLoading(false);
  }, []);

  // if (apiLoading) {
  //   return <LoadingAdmin />;
  // }
  
  return (
    <ThemeProvider theme={advanaTheme}>
     <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Iframe url={reportUrl}
            width="100%"
            height="600px"
            frameBorder="0"
            id="powerBIreport"
            className="powerBIreport"
            display="initial"
            position="relative"
          />
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
}
