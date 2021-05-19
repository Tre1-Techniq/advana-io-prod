import React from "react";

// @material-ui/core
//import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

///import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

//const useStyles = makeStyles(styles);

export default function Dashboard() {
  //const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          DASHBOARD EMBED
        </GridItem>
      </GridContainer>
    </div>
  );
}
