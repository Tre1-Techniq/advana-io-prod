import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

import Iframe from 'react-iframe';

import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

// @mui/material
import { makeStyles } from "@material-ui/core/styles";

// import dashboard01 from "../../assets/img/dashboard-01.jpg";

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
  // const sentryLink = "https://app.powerbi.com/groups/" + `${sentryId}`; 

  // const handleClick = () => {
  //   window.open(`${sentryLink}`);
  // };

  const classes = useStyles();

  useEffect(() => {
    
  }, []);
  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
      <Iframe url="https://app.powerbi.com/reportEmbed?reportId=6ae2a37a-b26d-4936-ac28-66d14804bd38&autoAuth=true&ctid=155c33b3-b4af-4076-a864-15ee882880ae&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWNlbnRyYWwtYi1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
        width="100%"
        height="550px"
        frameBorder="0"
        id="powerBIreport"
        className="powerBIreport"
        display="initial"
        position="relative"/>
        {/* <button className={classes.dashThumb} onClick={handleClick}><img src={dashboard01} /></button> */}
        {/* <PowerBIEmbed
          embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'cd82b58c-a8a6-424f-adea-abe40a193878',
            embedUrl: 'https://app.powerbi.com/reportEmbed',
            accessToken: '',
            tokenType: models.TokenType.Embed,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              background: models.BackgroundType.Transparent,
            }
          }}

          eventHandlers = { 
            new Map([
              ['loaded', function () {console.log('Report loaded');}],
              ['rendered', function () {console.log('Report rendered');}],
              ['error', function (event) {console.log(event.detail);}]
            ])
          }
            
          cssClassName = { "report-style-class" }

          getEmbeddedComponent = { (embeddedReport) => {
            window.report = embeddedReport;
          }}
        /> */}
      </GridItem>
    </GridContainer>
  );
}
