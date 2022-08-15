import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import axios from "axios";

import LoadingAdmin from '../../components/Auth/loading-admin';

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
  const classes = useStyles();
  const { user, getAccessTokenSilently } = useAuth0();

  const [ accessToken, setAccessToken ] = useState('');
  const [ embedUrl, setEmbedUrl ] = useState('');
  const [ reportId, setReportId ] = useState('');

  const [ apiLoading, setApiLoading ] = useState(true);

  async function callEmbedToken() {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get("http://localhost:4040/getEmbedToken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAccessToken(res.data.accessToken);
      setEmbedUrl(res.data.embedUrl[0].embedUrl);
      setReportId(res.data.embedUrl[0].reportId);
    } catch (error) {
      console.log("API ERROR: ", error.message)
    }
  };

  useEffect(() => {
    const callSetConfig = async () => {
      try {
        const token = await getAccessTokenSilently();
        const res = await axios.get("http://localhost:4040/setConfig", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log("SET CONFIG: ", res.data);
      } catch (error) {
        console.log("API ERROR: ", error.message)
      }
    }
    callSetConfig();
    callEmbedToken();
    setApiLoading(false);
  }, []);

  if (apiLoading) {
    return <LoadingAdmin />;
  }
  
  return (
    <ThemeProvider theme={advanaTheme}>
     <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
         <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: reportId,
            embedUrl: embedUrl,
            accessToken: accessToken,
            tokenType: models.TokenType.Embed,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </GridItem>
    </GridContainer>
    </ThemeProvider>
  );
}
