/*!
=========================================================
* ADAVNA.IO - User Auth Form
=========================================================
*/

import React from "react";
//import { useHistory, Link } from "react-router-dom";

import { title } from "../../assets/jss/material-kit-react.js";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import { Typography } from "@material-ui/core";

// Amplify Components
//import Amplify, { Auth } from "aws-amplify";
//import awsconfig from "../../aws-exports";

//Amplify.configure(awsconfig);

// Import Images
import bgIMG from "../../assets/img/advana-io-bg-01.jpg";
import advanaPillLogo from "../../assets/img/advana-pill-logo.png";

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

// Import Sections
import HubspotForm from 'react-hubspot-form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      padding: '5px 20px',
      fontSize: 'small',
    },
    '& .MuiInputBase-input': {
      fontSize: 'small',
    },
    '& .MuiGrid-grid-lg-12': {
      display: 'contents',
      justifyContent: 'space-evenly',
    },
    '& .MuiGrid-grid-lg-6': {
      display: 'contents',
      justifyContent: 'center',
    },
    '& .MuiGrid-container': {
      top: '75px',
      width: '100%',
      margin: '0 auto',
      backgroundColor: 'rgba(255,255,255,0.25)',
      border: '1px solid #e4e4e4',
    },
  },
  formContainer: {
    position: 'relative',
    top: '60px',
    height: '60vh',
  },
  formLogoWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  formLogoImg: {
    width: "60px",
  },
  formHeader: {
    ...title,
    marginBottom: "20px",
    marginTop: "20px",
    minHeight: "20px",
    textDecoration: "none",
    textAlign: "center",
    padding: "0 0 10px 0",
    borderBottom: "1px solid #e7e7e7",
  },
  modalContainer: {
    backgroundImage: `url(${bgIMG})`,
    height: '90vh',
    padding: '20px 40px',
    overflowY: 'scroll !important',
    width: '50vw',
    "@media (min-width: 350px)": {
      width: '90vw',
      padding: '20px',
    },
    "@media (min-width: 768px)": {
      width: '80vw',
    },
    "@media (min-width: 992px)": {
      width: '50vw',
    },
    "@media (min-width: 1200px)": {
      width: '50vw',
    },
  },
}));

function OptIn() {
  const classes = useStyles();

  return (
    <div className={classes.modalContainer}>
      <GridContainer className={classes.formContainer}>
        <GridItem xs={12} md={12} lg={12}>
          <div className={classes.formLogoWrapper}>
            <img className={classes.formLogoImg} src={advanaPillLogo} />
          </div>
          <h3 className={classes.formHeader}>
            Opt-In
          </h3>
          <HubspotForm
            portalId='7027050'
            formId='6020d7ab-b46c-4aa5-8c6d-2b97de690906'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready: ', form)}
            loading={<div>Loading...</div>}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
  
export default OptIn;
