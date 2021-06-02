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

import React from 'react';
import { API, Auth } from 'aws-amplify';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

// nodejs library to set properties for components
import PropTypes from "prop-types";

//import QuickSightEmbedding from "amazon-quicksight-embedding-sdk";
var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");

const useStyles = theme => ({
  loading: {
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: theme.spacing(4),
  },
});
class Embed extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loader: true
        };
    }
    
    componentDidMount() {
        this.getQuickSightDashboardEmbedURL();
    }
    
    getQuickSightDashboardEmbedURL = async () => {
        const data = await Auth.currentSession();
        const jwtToken = data.idToken.jwtToken;
        const payloadSub = data.idToken.payload.sub;
        const email = data.idToken.payload.email;
        
        const params = { 
            headers: {},
            response: true,
            queryStringParameters: {
                jwtToken: jwtToken,
                payloadSub: payloadSub,
                email: email
            }
        }
        const quicksight = await API.get('quicksight', '/getQuickSightDashboardEmbedURL', params);
        console.log(quicksight);
        const containerDiv = document.getElementById("dashboardContainer");
        
        const options = {
            url: quicksight.data.data.EmbedUrl,
            container: containerDiv,
            parameters: {
                country: "United States"
            },
            scrolling: "no",
            height: "700px",
            width: "100%",
            footerPaddingEnabled: true,
        };
        const dashboard = QuickSightEmbedding.embedDashboard(options);

        function onDashboardLoad() {
          console.log("The dashboard is fully loaded...");
        }

        dashboard.on("load", onDashboardLoad);
        this.setState({ loader: false });
    };
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                { this.state.loader && (
                    <div className={classes.loading}> <CircularProgress /> </div>
                )}
                <div id="dashboardContainer"></div>
            </div>
        );
    }
}

Embed.propTypes = {
    classes: PropTypes.any.isRequired,
};

export default withStyles(useStyles)(Embed);
