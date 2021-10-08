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

import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

// nodejs library that concatenates classes
import classNames from "classnames";

// @mui/material components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@mui/InputLabel";
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
//import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

// custom components
import SalesMap from "../../components/Maps/SalesMap";

// @mui/icons-material
import OverviewIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import ConnectionsIcon from "@material-ui/icons/People";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AssignmentIcon from '@material-ui/icons/Assignment';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SpeedIcon from '@material-ui/icons/Speed';

// import images
import applePay from "../../assets/img/campaigns/apple-pay.jpg";
import clifBar from "../../assets/img/campaigns/clif.png";
import pepsiZero from "../../assets/img/campaigns/pepsi-zero.png";
import avatar from "../../assets/img/faces/avatar-blank.jpg";

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

//import { messages } from "../../variables/general.js";
import salesItems from "./sales-items.json";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [content, setContent] = useState("");

  return (
      <ThemeProvider theme={advanaTheme}>
          <GridContainer>
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
                              <div className={classes.cardCategory}>
                                Total Sales
                              </div>
                              <div className={classes.cardKPIWrapper}>
                                <GridContainer>
                                  <GridItem xs={2} sm={2} md={2}>
                                    <Avatar className={classes.cardAvatar}>
                                      <ReceiptIcon />
                                    </Avatar>
                                  </GridItem>
                                  <GridItem xs={10} sm={10} md={10}>
                                    <h3 className={classes.cardKPI}>
                                      100,000
                                    </h3>
                                  </GridItem>
                                </GridContainer>
                              </div>
                              <div className={classes.cardPercentChange}>
                                  <ArrowDropUpIcon />
                                  <p>8.75%<span>vs. last month</span></p>
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          <Card>
                            <CardBody>
                              <div className={classes.cardCategory}>
                                Total Retail $
                              </div>
                              <div className={classes.cardKPIWrapper}>
                                <GridContainer>
                                  <GridItem xs={2} sm={2} md={2}>
                                    <Avatar className={classes.cardAvatar}>
                                      <LocalAtmIcon  />
                                    </Avatar>
                                  </GridItem>
                                  <GridItem xs={10} sm={10} md={10}>
                                    <h3 className={classes.cardKPI}>$350,000</h3>
                                  </GridItem>
                                </GridContainer>
                              </div>
                              <div className={classes.cardPercentChange}>
                                <ArrowDropUpIcon/>
                                  <p>5.50%<span>vs. last month</span></p>
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          <Card>
                            <CardBody>
                              <div className={classes.cardCategory}>
                                Average Ticket
                              </div>
                              <div className={classes.cardKPIWrapper}>
                                <GridContainer>
                                  <GridItem xs={2} sm={2} md={2}>
                                    <Avatar className={classes.cardAvatar}>
                                      <LocalOfferIcon />
                                    </Avatar>
                                  </GridItem>
                                  <GridItem xs={10} sm={10} md={10}>
                                    <h3 className={classes.cardKPI}>$3.50</h3>
                                  </GridItem>
                                </GridContainer>
                              </div>
                              <div className={classes.cardPercentChange}>
                                <ArrowDropUpIcon />
                                <p>4.25% <span>vs. last month</span></p>
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          <Card>
                            <CardBody>
                              <div className={classes.cardCategory}>
                                %AGV
                              </div>
                              <div className={classes.cardKPIWrapper}>
                                <GridContainer>
                                  <GridItem xs={2} sm={2} md={2}>
                                    <Avatar className={classes.cardAvatar}>
                                      <SpeedIcon />
                                    </Avatar>
                                  </GridItem>
                                  <GridItem xs={10} sm={10} md={10}>
                                    <h3 className={classes.cardKPI}>7.5</h3>
                                  </GridItem>
                                </GridContainer>
                              </div>
                              <div className={classes.cardPercentChange}>
                                <ArrowDropUpIcon />
                                <p>1.25%<span>vs. last month</span></p>
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8}>
                          <Card className={classes.dashCard55vh}>
                            <CardBody>
                              <p className={classes.cardCategory}>National Sales Map</p>
                              <div>
                                <SalesMap setTooltipContent={setContent} />
                                <ReactTooltip html={true} multiline={true}>{content}</ReactTooltip>
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <Card className={classes.dashCard55vh}>
                            <CardBody>
                              <div className={classes.cardCategoryWrapper}>
                                <AssignmentIcon className={classes.tasksIcon} />
                                <p className={classes.cardCategory}>Key Insights</p>
                              </div>
                              <GridItem xs={12} sm={12} md={12}>
                                <div className={classes.messagesBody}>
                                  <h5 className={classes.insightTitle}>Top 5 SKUs <span>by volume</span></h5>
                                  {salesItems.map(item => 
                                    (<ListItem className={classes.insightLI} key={item.id}>
                                      <ListItemAvatar className={classes.insightAvatarWrapper}>
                                        <Avatar className={classes.insightAvatar} alt={item.title} src={item.image} />
                                      </ListItemAvatar>
                                      <ListItemText
                                        primary={item.title}
                                        secondary={item.subtitle}
                                      />
                                    </ListItem>))}
                                </div>
                              </GridItem>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <Card>
                            <CardHeader>
                              <p className={classes.cardCategory}>Apple Pay</p>
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
                              <p className={classes.cardCategory}>Clif Bar</p>
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
                              <p className={classes.cardCategory}>Pepsi Zero Sugar</p>
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
      </ThemeProvider>
  );
}
