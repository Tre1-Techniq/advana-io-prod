/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useEffect } from 'react';

//import QuickSightEmbedding from "amazon-quicksight-embedding-sdk";
var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");

var dashboard;

function Dashboard() {

  useEffect(() => {
    embedDashboard()
  }, []);

  function embedDashboard() {
    const containerDiv = document.getElementById("embeddingContainer");
    const options = {
        url: "https://advanaio.auth.us-east-1.amazoncognito.com/login?client_id=73sffcn2n7adduka1jllgvpuno&response_type=token&scope=openid+profile&redirect_uri=https://3ugpk5jw95.execute-api.us-east-1.amazonaws.com/dev/qs-dash-embed",  
        container: containerDiv,
        scrolling: "yes",
        height: "700px",
        width: "100%",
        padding: "0",
        footerPaddingEnabled: true
    };
    dashboard = QuickSightEmbedding.embedDashboard(options);
  }

  return (
      <div id="embeddingContainer" dashboard={dashboard}></div>
  );
}

export default Dashboard;
