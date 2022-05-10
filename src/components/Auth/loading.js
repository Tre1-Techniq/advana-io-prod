import React from "react";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

// @mui/material components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const useStyles = makeStyles(styles);

function Loading() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem>
        <div className={classes.spinner}>
          <img src={loadingImg} alt="Loading..." />
        </div>
      </GridItem>
    </GridContainer>
  );
}

export default Loading;
