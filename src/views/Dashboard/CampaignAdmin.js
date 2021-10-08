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

// import images
import applePay from "../../assets/img/campaigns/apple-pay.jpg";
import clifBar from "../../assets/img/campaigns/clif.png";
import pepsiZero from "../../assets/img/campaigns/pepsi-zero.png";

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
    version: "Canteen Cycle 12: No Offer",
    redemptions: 80,
    image: applePay,
    impCurrent: 800000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "No Offer",
  },
  {
    id: 2,
    campaign: "Clif Bar",
    version: "Canteen Cycle 12: $0.15; Off",
    redemptions: 60,
    image: clifBar,
    impCurrent: 600000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "15&#162; off",
  },
  {
    id: 3,
    campaign: "Pepsi Zero Sugar",
    version: "Canteen Cycle 12: No Offer",
    redemptions: 90,
    image: clifBar,
    impCurrent: 600000,
    impTotal: 1000000,
    endDate: "Oct 3, 2021",
    budget: "$10,000",
    offer: "15&#162; off",
  },
  {
    id: 4,
    campaign: "Red Bull",
    redemptions: 65,
  },
  {
    id: 5,
    campaign: "Awake Chocolate",
    redemptions: 77,
  },
  {
    id: 6,
    campaign: "Red Bull",
    redemptions: 65,
  },
  {
    id: 7,
    campaign: "Awake Chocolate",
    redemptions: 77,
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

  const handleChange = e => {
    const target = e.target;
    console.log(e.target);
    if (target.checked) {
      setSelectedValue(target.value);
      () => campaignDetails();
    }
  };

  const campaignDetails = () => {
    //console.log("ROWS: ", props);
    return (
      <>
        <div xs={12} sm={12} md={12}>
          <p className={classes.campaignDetailsTitle}>Apple Pay<span>Canteen Cycle 12: No Offer</span></p>
          <img
            alt="Apple Pay Ad"
            src={applePay}
            className={navImageClasses}
          />
        </div>
        <div xs={12} sm={12} md={12}>
          <div className={classes.campaignProgressBar}>
            <p className={classes.campaignProgressBarTitle}>Impressions:<span>800,000</span> of<span>1,000,000</span></p>
            <LinearProgress className={classes.linearProgress} variant="determinate" value={80} color="secondary" />
          </div>
        </div>
        <div xs={12} sm={12} md={12}>
            <List className={classes.horizontalList}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.cardAvatar}>
                    <EventBusyIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="End Date" secondary="10/03/21" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.cardAvatar}>
                    <MonetizationOnIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Budget" secondary="$10,000" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.cardAvatar}>
                    <LocalOfferIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Offer" secondary="No Offer" />
              </ListItem>
            </List>
          </div>
        </>
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
                            <Card className={classes.campaignCard55vh}>
                              <CardHeader>
                                <GridItem xs={12} sm={12} md={12}>
                                  <div className={classes.campaignTableHeader}>
                                    <p className={classes.campaignDetailsTitle}>Active Campaigns</p >
                                    <Button
                                      className={classes.addCampaignBTN}
                                      variant="contained"
                                      color="primary"
                                    >
                                      <AddCircle className={classes.addBtnIcon} />
                                      <p>ADD A CAMPAIGN</p>
                                    </Button>
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
                                        width: '50px',
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
                                        width: '100px',
                                      },
                                      {
                                        field: 'redemptions',
                                        width: '350px',
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
                                      backgroundColor: '#e7e7e7'
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
                                    paging: (rows.length > 5 ? true : false),
                                    pageSizeOptions:[5],
                                    paginationType: 'stepped',
                                    showFirstLastPageButtons: (rows.length > 10 ? true : false),
                                  }}
                                />
                              </div>
                                  <p className={classes.cardInstructions}><ArrowUpwardIcon />Select a radio button to view campaign details</p>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={5}>
                            <Card className={classes.campaignCard55vh}>
                              <CardBody>
                                  {campaignDetails(rows)}
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
