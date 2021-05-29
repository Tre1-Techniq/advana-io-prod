import React, { useState, useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import { AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from "../../aws-exports";
import Embed from "./Embed";

Amplify.configure(awsconfig);

// //@material-ui/core
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
//import { makeStyles } from "@material-ui/core/styles";
//import { Button } from "@material-ui/core";

import Form from "../Auth/Form";

// core components
// import GridItem from "../../components/Grid/GridItem";
// import GridContainer from "../../components/Grid/GridContainer";

// import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

//const useStyles = makeStyles(styles);

function Dashboard() {
  //const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AssessLoggedInState();
  }, []);

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser().then(() => {
      setIsLoggedIn(true);
      console.log("User Logged In: ", isLoggedIn);
    }).catch(() => {
      setIsLoggedIn(false);
      console.log("User Logged In: ", isLoggedIn);
    })
  }

  return (
    <div>
      { isLoggedIn ? (<><h1>Welcome! You are logged in.</h1><Embed /><AmplifySignOut /></>) : (<Form />) }
    </div>
    
  );
}

export default Dashboard;
