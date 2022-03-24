import React, { useState, useEffect } from "react";
import axios from 'axios';
//import jQuery from 'jquery';
//import cors from 'cors';

// @mui/material
import { makeStyles } from "@material-ui/core/styles";

// core components
// import GridItem from "../../components/Grid/GridItem.js";
// import GridContainer from "../../components/Grid/GridContainer.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const embedUrl = "https://6cwwmpfsv8.execute-api.us-east-1.amazonaws.com/prod/qs-embed";
// const embedContent = embedUrl.innerHTML;

export default function Analytics() {
  const classes = useStyles();

  //const $ = jQuery;

  const [ embedContent, setEmbedContent ] = useState('');

  useEffect(() => {
    axios.get(embedUrl, {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods' : 'GET,OPTIONS',
      },
    })
      .then(res => {
        const embed = res.data;
        setEmbedContent(embed)
        //console.log("EMBED: ", embed)
      })
  }, []);

  
  return (
    // <iframe className={classes.iFrameInner} frameBorder="0" src={embedContent} width="100%" height="100%" title='A youtube video on React hooks'></iframe>

    <div className={classes.embedContent} dangerouslySetInnerHTML={{ __html: `${embedContent}` }}></div>
    // <div className={classes.embedContent}>{`${embedContent}`}</div>
  );
}
