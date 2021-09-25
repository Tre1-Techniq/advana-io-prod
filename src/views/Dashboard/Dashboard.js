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

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import NavPills from "../../components/NavPills/NavPills.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Tasks from "../../components/Tasks/Tasks.js";


// custom components
import SalesMap from "../../components/Maps/SalesMap";

// @material-ui/icons
import OverviewIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import ConnectionsIcon from "@material-ui/icons/People";
import DateRangeIcon from "@material-ui/icons/DateRange";
import NotificationsIcon from "@material-ui/icons/Notifications";

// import images
import applePay from "../../assets/img/campaigns/apple-pay.jpg";
import clifBar from "../../assets/img/campaigns/clif.png";
import pepsiZero from "../../assets/img/campaigns/pepsi-zero.png";
import avatar from "../../assets/img/faces/avatar-blank.jpg";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import { messages } from "../../variables/general.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
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
              <div className={classes.userNameWrapper}>
                <h5 className={classes.userName}><span>Firstname Lastname</span></h5>
                {/* <p>(Organization)</p> */}
              </div>
              <div className={classes.campaignCountWrapper}>
                <h5>ACTIVE CAMPAIGNS:<span className={classes.campaignCount}>4</span></h5>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
            <NavPills
                alignCenter
                color="primary"
                tabs={[
                {
                  tabButton: "Overview",
                  tabIcon: OverviewIcon,
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={3}>
                        <Card>
                          <CardBody>
                            <p className={classes.cardCategory}>Total Sales</p>
                            <h3 className={classes.cardKPI}>
                              100,000
                            </h3>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={3}>
                        <Card>
                          <CardBody>
                            <p className={classes.cardCategory}>Total Retail $</p>
                            <h3 className={classes.cardKPI}>$350,000</h3>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={3}>
                        <Card>
                          <CardBody>
                            <p className={classes.cardCategory}>Average Ticket</p>
                            <h3 className={classes.cardKPI}>$3.50</h3>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={3}>
                        <Card>
                          <CardBody>
                            <p className={classes.cardCategory}>%AGV</p>
                            <h3 className={classes.cardKPI}>7.5</h3>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <Card>
                          <CardBody>
                            <p className={classes.cardCategory}>Brand Pulse LIVE</p>
                            <div>
                              <SalesMap />
                            </div>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <Card>
                          <CardBody>
                            <div className={classes.cardCategoryWrapper}>
                              <p className={classes.cardCategory}><NotificationsIcon className={classes.notificationsIcon} />Notifications</p>
                            </div>
                            <GridItem xs={12} sm={12} md={12}>
                              <div className={classes.messagesBody}>
                                <Tasks
                                  checkedIndexes={[0, 3]}
                                  tasksIndexes={[0, 1, 2, 3, 4, 5, 6]}
                                  tasks={messages}
                                />
                              </div>
                            </GridItem>
                          </CardBody>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <Card>
                          <CardHeader>
                            <p>Apple Pay</p>
                          </CardHeader>
                          <CardBody>
                            <img
                              alt="Apple Pay Ad"
                              src={applePay}
                              className={navImageClasses}
                            />
                          </CardBody>
                          <CardFooter stats>
                            <div className={classes.stats}>
                              <DateRangeIcon />
                              Duration:
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
                              <DateRangeIcon />
                              Duration:
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
                              <DateRangeIcon />
                              Duration:
                            </div>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Settings",
                  tabIcon: SettingsIcon,
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={8}>
                        <Card>
                          <CardHeader className={classes.cardUserInfo}>
                              <CardAvatar profile>
                              <a href="#" onClick={(e) => e.preventDefault()}>
                                <img src={avatar} alt="User Avatar" />
                              </a>
                              </CardAvatar>
                          </CardHeader>
                          <CardBody>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CustomInput
                                  labelText="Company (disabled)"
                                  id="company-disabled"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                  inputProps={{
                                    disabled: true,
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                  labelText="Username"
                                  id="username"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <CustomInput
                                  labelText="Email address"
                                  id="email-address"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </GridItem>
                            </GridContainer>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                  labelText="First Name"
                                  id="first-name"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                  labelText="Last Name"
                                  id="last-name"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </GridItem>
                            </GridContainer>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={4}>
                                <CustomInput
                                  labelText="City"
                                  id="city"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <CustomInput
                                  labelText="Country"
                                  id="country"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <CustomInput
                                  labelText="Postal Code"
                                  id="postal-code"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </GridItem>
                            </GridContainer>
                          </CardBody>
                          <CardFooter>
                            <Button color="primary">Update Profile</Button>
                          </CardFooter>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <Card>
                          <CardHeader className={classes.cardConnections}>
                            <GridItem xs={12} sm={12} md={12}>
                              <h4 className={classes.cardCategory}><ConnectionsIcon className={classes.connectionsIcon} /> CONNECTIONS</h4>
                            </GridItem>
                          </CardHeader>
                          <CardBody profile>
                            <p className={classes.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Button color="primary" round>
                              Follow
                            </Button>
                          </CardBody>
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
