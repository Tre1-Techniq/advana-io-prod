import React from "react";

// @mui/material
import { makeStyles } from "@material-ui/core/styles";

// core components
// import GridItem from "../../components/Grid/GridItem.js";
// import GridContainer from "../../components/Grid/GridContainer.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Analytics() {
  const classes = useStyles();
  return (
    <iframe className={classes.iFrameInner} frameBorder="0" src="https://6cwwmpfsv8.execute-api.us-east-1.amazonaws.com/prod/qs-embed" width="100%" height="100%" title='A youtube video on React hooks'></iframe>
  );
}



import React from "react";
import Iframe from './Iframe';

// @mui/material
import { makeStyles } from "@material-ui/core/styles";

// core components
// import GridItem from "../../components/Grid/GridItem.js";
// import GridContainer from "../../components/Grid/GridContainer.js";

//const embedUrl = 'https://s3.amazonaws.com/advana.io/embed-static.html';

import embedContent from "./embed-static.html"

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Analytics() {
  const classes = useStyles();

  return (
    <Iframe className={classes.iframeInner} content={embedContent} />
  );
}







// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// // @mui/material
// import { makeStyles } from "@material-ui/core/styles";

// // core components
// // import GridItem from "../../components/Grid/GridItem.js";
// // import GridContainer from "../../components/Grid/GridContainer.js";

// import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

// const useStyles = makeStyles(styles);

// export default function Analytics() {
//   const classes = useStyles();

//   const [dashboard, setDashboard] = useState(false);

//   // initialize quicksight dashboard embed
//   useEffect(() => {
//    const dashboard = axios.get(`https://6cwwmpfsv8.execute-api.us-east-1.amazonaws.com/prod/qs-embed`)
//       .then(res => {
//         const sentry = res.data;
//         setDashboard({ sentry });
//         console.log("DASHBOARD: ",dashboard)
//       })
//   }, []);
//   return (
//     <div className={classes.dashboard}>
//       {dashboard}
//     </div>
//   );
// }


