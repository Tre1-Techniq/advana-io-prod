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

//import React from "react";
import React, { useState } from "react";
import MaterialTable from "@material-table/core";

//import { motion } from "framer-motion";

import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

// nodejs library that concatenates classes
import classNames from "classnames";

// @mui/material components
import { makeStyles } from "@material-ui/core/styles";

// @mui components
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardHeader from "../../components/Card/CardHeader.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';

// @mui/icons-material
import DateRange from "@material-ui/icons/DateRange";
//import AddCircle from "@material-ui/icons/AddCircle";
import EventBusyIcon from '@material-ui/icons/EventBusy';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddBoxIcon from '@material-ui/icons/AddBox';

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import {
  // defaultFont,
  //primaryColor,
  // secondaryColor,
  // successColor,
  // warningColor,
  // whiteColor,
  //grayColor,
  //hexToRgb,
} from "../../assets/jss/material-dashboard-react";

import rows from "./Tables/campaignsTableRows";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  rows: PropTypes.array,
};

CampaignAdmin.propTypes = {
  value: PropTypes.number,
  id: PropTypes.number,
  campaign: PropTypes.string,
  impCurrent: PropTypes.number,
  redemptions: PropTypes.number,
  onPageChange: PropTypes.func,
};

function LinearProgressWithLabel(props) {
  //console.log("PROPS: ", props)

  const redemptionsSuccess = (props.value <= 60);
  const redemptionsWarning = (props.value > 60 && props.value <= 80);
  const redemptionsDanger = (props.value > 80);

  const classes = useStyles();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '15px', mr: 2 }}>
        {redemptionsSuccess ? <CheckCircleIcon className={classes.successIcon} /> : ""}
        {redemptionsWarning ? <WarningIcon className={classes.warningIcon} /> : ""}
        {redemptionsDanger ? <WarningIcon className={classes.dangerIcon} /> : ""}
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          color="secondary"
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="textSecondary">
          {props.value}%
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles(styles);

export default function CampaignAdmin() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [selectedValue, setSelectedValue] = useState(1);
  const [ campaignValue, setCampaignValue ] = useState(1);

  const handleChange = e => {
    const target = e.target;
    //console.log(e.target);
    if (target.checked) {
      setSelectedValue(target.value);
      setCampaignValue(target.value);
      campaignDetails();
    }
  };

  const campaignDetails = (props) => {
    //console.log("ROWS: ", props);
    const campaignHealthSuccess = (props[campaignValue -1].redemptions <= 60);
    const campaignHealthWarning = (props[campaignValue -1].redemptions > 60 && props[campaignValue -1].redemptions <= 80);
    const campaignHealthDanger = (props[campaignValue -1].redemptions > 80); 
    return (
      <div className={classes.campaignDetailsWrapper}>
        <p className={classes.campaignDetailsTitle}>{props[campaignValue -1].campaign}<span>{props[campaignValue -1].version}</span></p>
        <GridContainer>
        <GridItem xs={12} sm={12} md={9}>
          <img
            alt={props[campaignValue -1].alt}
            src={props[campaignValue -1].image}
            className={navImageClasses}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <List className={classes.verticalList}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.cardAvatarDetails}>
                  <EventBusyIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="End Date" secondary="10/03/21" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.cardAvatarDetails}>
                  <MonetizationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Budget" secondary="$10,000" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.cardAvatarDetails}>
                  <LocalOfferIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Offer" secondary="No Offer" />
            </ListItem>
          </List>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.campaignProgressBar}>
            <p className={classes.campaignProgressBarTitle}>Impressions:<span>{props[campaignValue -1].impCurrent}</span> of<span>1{props[campaignValue -1].impTotal}</span></p>
            <LinearProgress className={classes.linearProgress} variant="determinate" value={props[campaignValue -1].redemptions} color="secondary" />
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <List className={classes.horizontalListDiv}>
            <ListItem className={classes.horizontalLiDiv}>
              <p>Campign Health:</p>
              <div className={classes.campaignHealthDiv}>
                {campaignHealthSuccess ? <CheckCircleIcon className={classes.successIconHealth} /> : ""}
                {campaignHealthWarning ? <WarningIcon className={classes.warningIconHealth} /> : ""}
                {campaignHealthDanger ? <WarningIcon className={classes.dangerIconHealth} /> : ""}
              </div>
            </ListItem>
            <ListItem className={classes.horizontalLiDiv}>
              <p>Recommendation:</p>
              <div className={classes.campaignHealthDiv}>
              {campaignHealthSuccess ? <span className={classes.noActionLabel}>NO ACTION NEEDED</span> : ""}
              {campaignHealthWarning ?
                <div className={classes.addFundsBTNWrapper}>
                  <IconButton color="secondary" variant="text"
                    className={classes.addFundsBTN}
                  >
                    <AddBoxIcon className={classes.addBtnIcon} />
                  </IconButton>
                  <span className={classes.addFundsBTNLabel}>ADD FUNDS</span>
                </div> : 
              ""}
              {campaignHealthDanger ?
                <div className={classes.addFundsBTNWrapper}>
                  <IconButton color="secondary" variant="text"
                  className={classes.addFundsBTN}
                  >
                    <AddBoxIcon className={classes.addBtnIcon} />
                  </IconButton>
                  <span className={classes.addFundsBTNLabel}>ADD FUNDS</span>
                </div> :
              ""}
              </div>
              </ListItem>
            </List>
          </GridItem>
        </GridContainer>
      </div>
    )
  }

  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
            <GridContainer>
              <Card className={classes.campaignAutoVh}>
                <GridContainer>
                  <CardHeader className={classes.cardHeaderOffset}>
                    <GridItem xs={12} sm={12} md={12}>
                      <div className={classes.campaignTableHeader}>
                        <p>Active Campaigns</p>
                      </div>
                    </GridItem>
                </CardHeader>
                </GridContainer>
                <CardBody className={classes.campaignTableBody}>
                <GridItem xs={12} sm={12} md={6}>
                  <MaterialTable
                    data={rows}
                    columns={
                      [
                        {
                          field: 'id',
                          title: 'Selected',
                          width: '15%',
                          // eslint-disable-next-line react/display-name
                          render: (props) => {
                            return (
                              <Radio
                                color="primary"
                                checked={selectedValue == props.id}
                                value={props.id}
                                name="select-campaign"
                                onChange={handleChange}
                              />
                            )
                          }
                        },
                        {
                          field: 'campaign',
                          title: 'Campaign',
                          width: '30%',
                        },
                        {
                          field: 'redemptions',
                          width: '55%',
                          title: 'Redemptions Claimed',
                          // eslint-disable-next-line react/display-name
                          render: (props) => {
                            //console.log("LINEAR ROWS: ", props)
                            return (
                              <div className={classes.redemptionsProgressBar}>
                                <LinearProgressWithLabel
                                  className={classes.linearProgress}
                                  variant="determinate"
                                  value={props.redemptions}
                                />
                              </div>
                            )},
                          },
                      ]
                    }
                    title="Active Campaigns"
                    options={{
                      padding: 'dense',
                      showTitle: false,
                      headerStyle: {
                        backgroundColor: '#f7f7f7'
                      },
                      searchFieldStyle: {
                        marginBottom: '30px',
                        display: 'flex',
                        justifyContent: 'start',
                      },
                      searchFieldAlignment: 'left',
                      rowStyle: {
                        height: '30px',
                      },
                      filtering: false,
                      filterCellStyle: {
                        
                      },
                      exportAllData: true,
                      exportButton: true,
                      toolbar: true,
                      tableLayout: 'fixed',
                      paging: (rows.length > 5 ? true : false),
                      pageSizeOptions:[5],
                      paginationType: 'stepped',
                      showFirstLastPageButtons: (rows.length > 10 ? true : false),
                    }}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    {campaignDetails(rows)}
                  </GridItem>
                </CardBody>
                <CardFooter className={classes.campaignTableFooter}>
                  <p className={classes.cardInstructions}>
                    <ArrowUpwardIcon />
                    Select a radio button to view campaign details
                  </p>
                  <div className={classes.stats}>
                    <DateRange />
                    Last 24 Hours
                  </div>
                  {/* <Button
                    className={classes.addCampaignBTN}
                    variant="contained"
                    color="primary"
                  >
                    <AddCircle className={classes.addBtnIcon} />
                    <p>ADD A CAMPAIGN</p>
                  </Button> */}
                </CardFooter>
              </Card>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </ThemeProvider>
  );
}
