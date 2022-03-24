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
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import { Typography } from "@mui/material";

// Amplify Components
//import Amplify, { Auth } from "aws-amplify";
//import awsconfig from "../../aws-exports";

//Amplify.configure(awsconfig);

// Import Images
import bgIMG from "../../assets/img/advana-io-bg-01.jpg";
import advanaPillLogo from "../../assets/img/advana-pill-logo.png";

import { makeStyles } from "@material-ui/core/styles";

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

function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.modalContainer}>
      <GridContainer className={classes.formContainer}>
        <GridItem xs={12} md={12} lg={12}>
          <div className={classes.formLogoWrapper}>
            <img className={classes.formLogoImg} src={advanaPillLogo} />
          </div>
          <h3 className={classes.formHeader}>
            Book an Intro
          </h3>
          <HubspotForm
            portalId='7027050'
            formId='59814e6c-d119-4017-8d57-ca2f6100405a'
            //onSubmit={() => console.log('Submit!')}
            onReady={() => console.log('Form ready!')}
            loading={<div>Loading...</div>}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
  
export default Intro;
