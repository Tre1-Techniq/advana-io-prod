import React from "react";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

import loadingPulse from "../../assets/img/loading-pulse.svg"

// @mui/material components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const loadingImgAdmin = loadingPulse;

const useStyles = makeStyles(styles);

function LoadingAdmin() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem>
        <div className={classes.loadingWrapperAdmin}>
          <img className={classes.loading} src={loadingImgAdmin} alt="Loading..." />
        </div>
      </GridItem>
    </GridContainer>
  );
}

export default LoadingAdmin;
