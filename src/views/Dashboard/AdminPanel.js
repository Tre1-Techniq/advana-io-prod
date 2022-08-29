import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import axios from 'axios';

import Iframe from 'react-iframe';

// Material UI Core Components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const AddUser = () => {
  const [ users, setUsers ] = useState([]);

  const classes = useStyles();

  const { user, getAccessTokenSilently } = useAuth0();

  const reportUrl = "http://localhost:4000/";
  const accessToken = getAccessTokenSilently();
  const reportData = axios.get(reportUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
  
  useEffect(() => {
    // getPortalUsers();
  },[]);

  return (
    <>
    <ThemeProvider theme={advanaTheme}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Iframe url={reportUrl}
            width="100%"
            height="550px"
            frameBorder="0"
            id="powerBIreport"
            className="powerBIreport"
            display="initial"
            position="relative"
          />
        </GridItem>
      </GridContainer>
    </ThemeProvider>
    </>
  )
}

export default AddUser;
