import React from "react";
//import Amplify, { Auth } from "aws-amplify";
import Amplify from "aws-amplify";
import { AmplifyAuthContainer, AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from "../../aws-exports";
import Embed from "./Embed";

Amplify.configure(awsconfig);

// //@material-ui/core
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

function Dashboard() {
  const classes = useStyles();
  return (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="username"
          formFields={[
            {
              type: "text",
              label: "USERNAME *",
              placeholder: "create a username",
              inputProps: { required: true, autocomplete: "username" },
            },
            {
              type: "email",
              label: "EMAIL *",
              placeholder: "enter your email",
              inputProps: { required: true, autocomplete: "email" },
            },
            {
              type: "password",
              label: "PASSWORD *",
              placeholder: "create a password",
              inputProps: { required: true, autocomplete: "new-password" },
            },
          ]} 
        />

        <AmplifySignIn
          slot="sign-in"
          usernameAlias="username"
          formFields={[
            {
              type: "text",
              label: "USERNAME *",
              placeholder: "enter username",
              inputProps: { required: true, autocomplete: "username" },
            },
            {
              type: "password",
              label: "PASSWORD *",
              placeholder: "enter your password",
              inputProps: { required: true, autocomplete: "password" },
            },
          ]} 
        />

        <div>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={12} sm={12} md={12}>
              <Embed />
            </GridItem>
          </GridContainer>
          <AmplifySignOut />
        </div>
      </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  );
}

export default Dashboard;
