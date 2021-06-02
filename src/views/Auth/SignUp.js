/*!
=========================================================
* ADAVNA.IO - User Auth Form
=========================================================
*/

import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";

// Material UI Core Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

// Amplify Components
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

// Import Images
import bgIMG from "../../assets/img/advana-io-bg-01.jpg";
import pillLogo from "../../assets/img/advana-pill-logo.png";

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      padding: '5px 20px',
      fontSize: 'medium',
    },
    '& .MuiGrid-grid-lg-12': {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    '& .MuiGrid-grid-lg-6': {
      display: 'contents',
      justifyContent: 'center',
    },
    '& .MuiGrid-container': {
      top: '75px',
      width: '400px',
      margin: '0 auto',
      backgroundColor: 'rgba(255,255,255,0.25)',
      border: '1px solid #e4e4e4',
    },
  },
  formContainer: {
    position: 'relative',
    top: '60px',
  }
}));

const initialFormState = {
  username: '', email: '', password: '', authCode: "", formType: 'signUp'
}

function SignUp({
  setFormState, signUp, onChange
}) {
  return (
    <div style={{backgroundImage: `url(${bgIMG})`, height: '100vh'}}>
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} md={12}>
          {
            formType === "signUp" && (
              <form className={classes.root} noValidate autoComplete="off">
                <Grid style={{height: '135px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '60px', height: '60px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '70px', color: '#2e4094'}}>Get Started with <span style={{color: '#68c3c8'}}>ADVANA</span></h3>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="username"
                      onChange={onChange}
                      placeholder="username"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="password"
                      type="password"
                      onChange={onChange}
                      placeholder="password"
                    />
                  </Grid> 
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="email"
                      onChange={onChange}
                      placeholder="email"
                    />
                  </Grid> 
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      style={{width: '100%', margin: '20px', top: '20px'}}
                      variant="contained"
                      color="secondary"
                      onClick={signUp}>
                        Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', margin: '0 20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8'}}>Already have an account?</Typography>
                    <Button
                      style={{width: '100%', margin: '20px'}}
                      color="secondary"
                      onClick={() => updateFormState(() => ({
                      ...formState, formType: "signIn"
                      }))}>
                        Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )
          }
        </Grid>
      </Grid>
    </div>
    );
  }

export default SignUp;
