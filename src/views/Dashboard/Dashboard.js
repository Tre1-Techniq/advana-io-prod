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

// import { motion, AnimatePresence } from "framer-motion";

import MapLegend from "./Charts/MapLegend";

// nodejs library that concatenates classes
//import classNames from "classnames";

// @mui/material components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@mui/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
//import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
//import CardFooter from "../../components/Card/CardFooter.js";
//import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

// custom components
import SalesMap from "../../components/Maps/SalesMap";

// @mui/icons-material
//import DateRangeIcon from "@material-ui/icons/DateRange";
//import AssignmentIcon from '@material-ui/icons/Assignment';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SpeedIcon from '@material-ui/icons/Speed';

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

//import { messages } from "../../variables/general.js";
import salesItems from "./sales-items.json";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  //const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [content, setContent] = useState("");

  return (
    <ThemeProvider theme={advanaTheme}>
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
                %ACV
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
          <Card className={classes.dashCardAutoH}>
            <CardBody>
              <p className={classes.cardCategory}>Total Sales</p>
              <div>
                <SalesMap setTooltipContent={setContent} />
                <ReactTooltip html={true} multiline={true}>{content}</ReactTooltip>
              </div>
              <p className={classes.cardCategory}>Map Legend<span className={classes.mapLegendDesc}>% Unemployment</span></p>
              <MapLegend />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.dashCardAutoH}>
            <CardBody>
              <div className={classes.cardCategoryWrapper}>
                <VerifiedUserIcon className={classes.tasksIcon} />
                <h5 className={classes.insightTitle}>Top 5 SKUs <span>by volume</span></h5>
              </div>
              <div className={classes.insightLiWrapper} xs={12} sm={12} md={12}>
                <div className={classes.messagesBody}>
                  {salesItems.slice(0,5).map( (item) => 
                    (
                      <ListItem className={classes.insightLI} key={item.id}>
                        <h5 className={classes.insightRank}>{ item.id }</h5>
                        <ListItemAvatar className={classes.insightAvatarWrapper}>
                          <Avatar className={classes.insightAvatar} alt={item.title} src={item.image} />
                          </ListItemAvatar>
                            <ListItemText
                              primary={item.title}
                              secondary={item.subtitle}
                            />
                      </ListItem>
                    )
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
}
