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
import NavPills from "../../components/NavPills/NavPills.js";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Table from "../../components/Table/Table.js";
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';

// @mui/icons-material
import DateRange from "@material-ui/icons/DateRange";
import CampaignIcon from "@material-ui/icons/TrendingUp";
import ActiveIcon from "@material-ui/icons/Timer";
import PastIcon from "@material-ui/icons/TimerOff";
import UpcomingIcon from "@material-ui/icons/Update";
import AddCircle from "@material-ui/icons/AddCircle";
import EventBusyIcon from '@material-ui/icons/EventBusy';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddBoxIcon from '@material-ui/icons/AddBox';

// import images
import applePay from "../../assets/img/campaigns/apple-pay.jpg";
import clifBar from "../../assets/img/campaigns/clif.jpg";
import pepsiZero from "../../assets/img/campaigns/pepsi-zero.jpg";
import redBull from "../../assets/img/campaigns/red-bull.jpg";
import awake from "../../assets/img/campaigns/awake.jpg";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
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

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const rows = [
  {
    id: 1,
    campaign: "Apple Pay",
    version: "Canteen Cycle 13: No Offer",
    redemptions: 80,
    image: applePay,
    impCurrent: 800000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "Canteen Cycle 13: No Offer",
  },
  {
    id: 2,
    campaign: "Clif Bar",
    version: "Canteen Cycle 13: $0.15 Off",
    redemptions: 60,
    image: clifBar,
    impCurrent: 600000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "Canteen Cycle 13: $0.15 Off",
  },
  {
    id: 3,
    campaign: "Pepsi Zero Sugar",
    version: "Canteen Cycle 13: No Offer",
    redemptions: 90,
    image: pepsiZero,
    impCurrent: 600000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "Canteen Cycle 13: No Offer",
  },
  {
    id: 4,
    campaign: "Red Bull",
    version: "Canteen Cycle 13: No Offer",
    redemptions: 75,
    image: redBull,
    impCurrent: 750000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "Canteen Cycle 13: No Deal",
  },
  {
    id: 5,
    campaign: "Awake Chocolate",
    version: "Canteen Cycle 13: $0.25 Off",
    redemptions: 57,
    image: awake,
    impCurrent: 570000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "Canteen Cycle 13: $0.25 off",
  },
  {
    id: 6,
    campaign: "Red Bull",
    version: "Canteen Cycle 13: No Deal",
    redemptions: 65,
    image: redBull,
    impCurrent: 650000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "Canteen Cycle 13: No Deal",
  },
  {
    id: 7,
    campaign: "Awake Chocolate",
    version: "Canteen Cycle 13: $0.25 off",
    redemptions: 77,
    image: awake,
    impCurrent: 770000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "Canteen Cycle 13: $0.25 off",
  },
];

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
      () => campaignDetails();
    }
  };

  const campaignDetails = (props) => {
    //console.log("ROWS: ", props);
    const campaignHealthSuccess = (props[campaignValue -1].redemptions <= 60);
    const campaignHealthWarning = (props[campaignValue -1].redemptions > 60 && props[campaignValue -1].redemptions <= 80);
    const campaignHealthDanger = (props[campaignValue -1].redemptions > 80); 
    return (
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
      >
        <div xs={12} sm={12} md={12}>
          <p className={classes.campaignDetailsTitle}>{props[campaignValue -1].campaign}<span>{props[campaignValue -1].version}</span></p>
          <img
            alt={props[campaignValue -1].alt}
            src={props[campaignValue -1].image}
            className={navImageClasses}
          />
        </div>
        <div xs={12} sm={12} md={12}>
          <div className={classes.campaignProgressBar}>
            <p className={classes.campaignProgressBarTitle}>Impressions:<span>{props[campaignValue -1].impCurrent}</span> of<span>1{props[campaignValue -1].impTotal}</span></p>
            <LinearProgress className={classes.linearProgress} variant="determinate" value={props[campaignValue -1].redemptions} color="secondary" />
          </div>
        </div>
        <div xs={12} sm={12} md={12}>
            <List className={classes.horizontalList}>
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
          </div>
          <div xs={12} sm={12} md={12}>
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
          </div>
        </div>
      )
  }

  return (
      <ThemeProvider theme={advanaTheme}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
              <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                  {
                      tabButton: "Active",
                      tabIcon: ActiveIcon,
                      tabContent: (
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={7}>
                            <Card className={classes.campaignAuthH}>
                              <CardHeader>
                                <GridItem xs={12} sm={12} md={12}>
                                  <div className={classes.campaignTableHeader}>
                                    <p className={classes.campaignDetailsTitle}>Active Campaigns</p >
                                  </div>
                                </GridItem>
                              </CardHeader>
                              <CardBody>
                              <div>
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
                                    pageSize:[5],
                                    pageSizeOptions:[5],
                                    paginationType: 'stepped',
                                    showFirstLastPageButtons: (rows.length > 10 ? true : false),
                                  }}
                                />
                              </div>
                              <CardFooter>
                                <p className={classes.cardInstructions}>
                                  <ArrowUpwardIcon />
                                  Select a radio button to view campaign details
                                </p>
                                <Button
                                  className={classes.addCampaignBTN}
                                  variant="contained"
                                  color="primary"
                                >
                                  <AddCircle className={classes.addBtnIcon} />
                                  <p>ADD A CAMPAIGN</p>
                                </Button>
                              </CardFooter>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card className={classes.campaignAuthH}>
                              <CardBody>
                                {campaignDetails(rows)}
                            </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Card>
                              <CardHeader>
                                <p>Clif Bar</p>
                              </CardHeader>
                              <CardBody>
                                <img
                                  alt="Clif Bar Ad"
                                  src={clifBar}
                                  className={navImageClasses}
                                />
                              </CardBody>
                              <CardFooter stats>
                                <div className={classes.stats}>
                                  <DateRange />
                                  Last 24 Hours
                                </div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Card>
                              <CardHeader>
                                <p>Pepsi Zero Sugar</p>
                              </CardHeader>
                              <CardBody>
                                <img
                                  alt="Pepsi Zero Sugar Ad"
                                  src={pepsiZero}
                                  className={navImageClasses}
                                />
                              </CardBody>
                              <CardFooter stats>
                                <div className={classes.stats}>
                                  <DateRange />
                                  Last 24 Hours
                                </div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  {
                      tabButton: "Past",
                      tabIcon: PastIcon,
                      tabContent: (
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <CardBody>
                                <div className={classes.cardCategoryWrapper}>
                                  <p className={classes.cardCategory}><CampaignIcon className={classes.messagesIcon} />Active Campaigns</p>
                                </div>
                                <Table
                                  className={classes.campaignListTable}
                                  tableHeaderColor="warning"
                                  tableHead={["Campaign", "Impressions", "Duration", "ROI"]}
                                  tableData={[
                                    ["Campaign #1", "800,000 of 1,000,000", "09/05/21 - 10/03/21", "+15%"],
                                    ["Campaign #2", "700,000 of 1,000,000", "09/05/21 - 10/03/21", "+17%"],
                                    ["Campaign #3", "900,000 of 1,000,000", "09/05/21 - 10/03/21", "+12%"],
                                    ["Campaign #4", "600,000 of 1,000,000", "09/05/21 - 10/03/21", "+25%"],
                                  ]}
                                />
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <CardBody>
                                <div className={classes.cardDetailsWrapper}>
                                  <p className={classes.cardCategory}>Apple Pay</p>
                                </div>
                                <GridContainer xs={12} sm={12} md={12}>
                                  <GridItem xs={12} sm={12} md={8}>
                                    <img
                                      alt="Apple Pay Ad"
                                      src={applePay}
                                      className={navImageClasses}
                                    />
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={4}>
                                    
                                  </GridItem>
                                </GridContainer>
                              </CardBody>
                              <CardFooter>
                                <div className={classes.stats}>
                                  <DateRange />
                                  Last 24 Hours
                                </div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Card>
                              <CardHeader>
                                <p>Clif Bar</p>
                              </CardHeader>
                              <CardBody>
                                <img
                                  alt="Clif Bar Ad"
                                  src={clifBar}
                                  className={navImageClasses}
                                />
                              </CardBody>
                              <CardFooter stats>
                                <div className={classes.stats}>
                                  <DateRange />
                                  Last 24 Hours
                                </div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Card>
                              <CardHeader>
                                <p>Pepsi Zero Sugar</p>
                              </CardHeader>
                              <CardBody>
                                <img
                                  alt="Pepsi Zero Sugar Ad"
                                  src={pepsiZero}
                                  className={navImageClasses}
                                />
                              </CardBody>
                              <CardFooter stats>
                                <div className={classes.stats}>
                                  <DateRange />
                                  Last 24 Hours
                                </div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  {
                      tabButton: "Upcoming",
                      tabIcon: UpcomingIcon,
                      tabContent: (
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <CardBody>
                                <div className={classes.cardCategoryWrapper}>
                                  <p className={classes.cardCategory}><CampaignIcon className={classes.messagesIcon} />Active Campaigns</p>
                                </div>
                                <Table
                                  className={classes.campaignListTable}
                                  tableHeaderColor="primary"
                                  tableHead={["Campaign", "Impressions", "Duration", "ROI"]}
                                  tableData={[
                                    ["Campaign #1", "800,000 of 1,000,000", "09/05/21 - 10/03/21", "+15%"],
                                    ["Campaign #2", "700,000 of 1,000,000", "09/05/21 - 10/03/21", "+17%"],
                                    ["Campaign #3", "900,000 of 1,000,000", "09/05/21 - 10/03/21", "+12%"],
                                    ["Campaign #4", "600,000 of 1,000,000", "09/05/21 - 10/03/21", "+25%"],
                                  ]}
                                />
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <CardBody>
                                <div className={classes.cardDetailsWrapper}>
                                  <p className={classes.cardCategory}>Apple Pay</p>
                                </div>
                                <GridContainer xs={12} sm={12} md={12}>
                                  <GridItem xs={12} sm={12} md={8}>
                                    <img
                                      alt="Apple Pay Ad"
                                      src={applePay}
                                      className={navImageClasses}
                                    />
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={4}>
                                    
                                  </GridItem>
                                </GridContainer>
                              </CardBody>
                              <CardFooter>
                                <div className={classes.stats}>
                                  <DateRange />
                                  Last 24 Hours
                                </div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Card>
                              <CardHeader>
                                <p>Clif Bar</p>
                              </CardHeader>
                              <CardBody>
                                <img
                                  alt="Clif Bar Ad"
                                  src={clifBar}
                                  className={navImageClasses}
                                />
                              </CardBody>
                              <CardFooter stats>
                                <div className={classes.stats}>
                                  <DateRange />
                                  Last 24 Hours
                                </div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <Card>
                              <CardHeader>
                                <p>Pepsi Zero Sugar</p>
                              </CardHeader>
                              <CardBody>
                                <img
                                  alt="Pepsi Zero Sugar Ad"
                                  src={pepsiZero}
                                  className={navImageClasses}
                                />
                              </CardBody>
                              <CardFooter stats>
                                <div className={classes.stats}>
                                  <DateRange />
                                  Last 24 Hours
                                </div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
          </GridContainer>
        </div>
      </ThemeProvider>
  );
}
