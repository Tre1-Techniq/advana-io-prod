import React from "react";
//import Amplify, { Auth } from "aws-amplify";
import Amplify from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
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
    <div>
      <GridContainer className={classes.gridContainer}>
        <GridItem xs={12} sm={12} md={12}>
          <div>
            <Embed />
            <AmplifySignOut />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withAuthenticator(Dashboard);
