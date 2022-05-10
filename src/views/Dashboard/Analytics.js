import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

// @mui/material
import { makeStyles } from "@material-ui/core/styles";

import dashboard01 from "../../assets/img/dashboard-01.jpg";

// core components
// import GridItem from "../../components/Grid/GridItem.js";
// import GridContainer from "../../components/Grid/GridContainer.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Analytics() {
  const { user } = useAuth0();

  const pbiSentry = "https://user.metadata.io/pbiSentry";
  const sentryId = `${user[pbiSentry]}`;

  // PowerBI Workspace Link
  const sentryLink = "https://app.powerbi.com/groups/" + `${sentryId}`; 

  const handleClick = () => {
    window.open(`${sentryLink}`);
  };

  const classes = useStyles();

  useEffect(() => {
    
  }, []);

  
  return (
    // <iframe className={classes.iFrameInner} frameBorder="0" src={embedContent} width="100%" height="100%" title='A youtube video on React hooks'></iframe>

    //<div className={classes.embedContent} dangerouslySetInnerHTML={{ __html: `${embedContent}` }}></div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
      <div className={classes.dashTitle}>
        <h2>Sentry Dashboards</h2>
      </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <button className={classes.dashThumb} onClick={handleClick}><img src={dashboard01} /></button>
      </GridItem>
    </GridContainer>
  );
}
