import React, { useState } from "react";
//import { Switch, Route, Redirect, Link } from "react-router-dom";

import { CognitoIdentityProvider } from '@aws-sdk/client-cognito-identity-provider'

// Configure Amplify
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "../../aws-exports";
// Amplify.configure(awsconfig);

// Advana Color Theme
// import { ThemeProvider } from "@material-ui/core";
// import advanaTheme from "../advanaTheme";

// @mui/material components
import { makeStyles } from "@material-ui/core/styles";

// core components
// Material UI Core Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

//import pillLogo from "../../assets/img/advana-pill-logo.png";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

//const USER_POOL_ID = process.env.USER_POOL_ID;
const APP_CLIENT_ID = '5fn7deqkumapgkjb7u335dsfs9';
const region = 'us-east-1';

const initialFormState = {
  firstname: '', lastname: '', email: '', parentcompany: '', company: '', manufacturer: '', role: 'Role', tier: 'Tier', companyclass: 'Company Class', password: 'Password!1'
}

const useStyles = makeStyles(styles);

function AdminCreateUser() {
  const classes = useStyles();

  const [formState, updateFormState] = useState(initialFormState);

  function onChange(e) {
    e.persist();
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}))
  };

  async function adminSignUp() {
    const { email, firstname, lastname, companyclass, parentcompany, company, manufacturer, tier, role, password } = formState
    // const email = document.getElementsByClassName('email')
    // const firstname = document.getElementsByClassName('firstname')
    // const lastname = document.getElementsByClassName('lastname')
    // const companyclass = document.getElementsByClassName('companyclass')
    // const parentcompany = document.getElementsByClassName('parentcompany')
    // const company = document.getElementsByClassName('company')
    // const tier = document.getElementsByClassName('tier')
    // const manufacturer = document.getElementsByClassName('manufacturer')
    // const role = document.getElementsByClassName('role')
    const provider = new CognitoIdentityProvider({ region })

    var params = {
      ClientId: APP_CLIENT_ID,
      Username: email,
      UserAttributes: [
          {
            Name: 'email',
            Value: email
          },
          {
            Name: 'password',
            Value: password
          },
          {
            Name: 'custom:firstname',
            Value: firstname
          },
          {
            Name: 'custom:lastname',
            Value: lastname
          },
          {
            Name: 'custom:companyclass',
            Value: companyclass
          },
          {
            Name: 'custom:parentcompany',
            Value: parentcompany
          },
          {
            Name: 'custom:company',
            Value: company
          },
          {
            Name: 'custom:manufacturer',
            Value: manufacturer
          },
          {
            Name: 'custom:tier',
            Value: tier
          },
          {
            Name: 'custom:role',
            Value: role
          },
        ],
      }

      console.log("FORM STATE: ", formState)
      console.log("PARAMS: ", params)

    try {
      const res = await provider.signUp(email, password)
      console.log('Signup success. Result: ', res)
    } catch (e) {
      console.log('Signup fail. Error: ', e)
    }
      
  }

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} md={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="email"
                onChange={onChange}
                placeholder="Email"
              />
            </Grid> 
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="firstname"
                onChange={onChange}
                placeholder="First Name"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="lastname"
                onChange={onChange}
                placeholder="Last Name"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="companyclass"
                onChange={onChange}
                placeholder="Company Class"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="parentcompany"
                onChange={onChange}
                placeholder="Parent Company"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="manufacturer"
                onChange={onChange}
                placeholder="Manufacturer"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="company"
                onChange={onChange}
                placeholder="Company"
              />
            </Grid> 
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="role"
                onChange={onChange}
                placeholder="Role"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                name="tier"
                onChange={onChange}
                placeholder="Tier"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TextField
                //disabled
                name="password"
                //type="password"
                value="Password!1"
                //placeholder="Manufacturer"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Button
                style={{width: '100%', margin: '20px', top: '20px'}}
                variant="contained"
                color="secondary"
                onClick={adminSignUp}>
                  Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
export default AdminCreateUser;
