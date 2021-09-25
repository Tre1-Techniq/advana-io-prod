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

import React from "react";

import MaterialTable from "material-table";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ActiveIcon from "@material-ui/icons/Timer";
import PastIcon from "@material-ui/icons/TimerOff";
import UpcomingIcon from "@material-ui/icons/Update";
import AddCircle from "@material-ui/icons/AddCircle";
//import CardIcon from "../../components/Card/CardIcon.js";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Table from "../../components/Table/Table.js";

// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import CampaignIcon from "@material-ui/icons/TrendingUp";

import applePay from "../../assets/img/campaigns/apple-pay.jpg";
import clifBar from "../../assets/img/campaigns/clif.png";
import pepsiZero from "../../assets/img/campaigns/pepsi-zero.png";
import avatar from "../../assets/img/faces/avatar-blank.jpg";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const columns=[
  {title: "Campaign",field:"campaign"},
  {title: "Impressions",field:"impressions"},
  {title: "Duration",field:"duration"},
  {title: "ROI",field:"roi"},
]

const tableData = [
  {campaign: "Campaign #01", impressions: "800,000", duration: "09/05/21 - 10/03/21", roi: "+16%"},
  {campaign: "Campaign #02", impressions: "600,000", duration: "09/05/21 - 10/03/21", roi: "+12%"},
  {campaign: "Campaign #03", impressions: "650,000", duration: "09/05/21 - 10/03/21", roi: "+13%"},
  {campaign: "Campaign #04", impressions: "725,500", duration: "09/05/21 - 10/03/21", roi: "+14%"},
];

const useStyles = makeStyles(styles);

export default function CampaignsPage() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.dashboardHeader}>
              <div className={classes.userAvatarWrapper}>
                <a className={classes.userAvatar} href="#" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="User Avatar" />
                </a>
              </div>
              <h5 className={classes.userName}><span>Firstname Lastname</span></h5>
              <Button
                className={classes.createCampaignBTN}
                variant="contained"
                color="secondary"
              >
                <AddCircle className={classes.btnIcon} />
                CREATE A CAMPAIGN
              </Button>
            </div>
          </GridItem>
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
                        <GridItem xs={12} sm={12} md={6}>
                          <Card>
                            <CardBody>
                              {/* <div className={classes.cardCategoryWrapper}>
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
                              /> */}
                              <MaterialTable columns={columns} data={tableData} title="Active Campaigns" />
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <Card>
                            <CardBody>
                              <div className={classes.cardDetailsWrapper}>
                                <p className={classes.cardCategory}>Apple Pay</p>
                              </div>
                              <GridItem xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={8}>
                                  <img
                                    alt="Apple Pay Ad"
                                    src={applePay}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                  
                                </GridItem>
                              </GridItem>
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
