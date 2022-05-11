import React, { useEffect } from "react";
//import { Redirect } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import NumberFormat from "react-number-format";

import MapLegend from "./Charts/MapLegend";

import { useAuth0 } from "@auth0/auth0-react";

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
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

// custom components
import SalesMap from "../../components/Maps/SalesMap";

// @mui/icons-material
//import DateRangeIcon from "@material-ui/icons/DateRange";
//import AssignmentIcon from '@material-ui/icons/Assignment';
//import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SpeedIcon from "@material-ui/icons/Speed";
import LockIcon from "@material-ui/icons/Lock";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import brandData from "./Tables/portal-home-kpi.json";
import brandsTop5 from "./Tables/portal-top5-skus.json";
// import brandsTop5 from "./Tables/portal-top5-skus.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

function AdminHome() {
  const { user } = useAuth0();
  const manufacturer = "https://user.metadata.io/manufacturer";
  const manufacturerName = `${user[manufacturer]}`;

  const classes = useStyles();

  const top5SKUs = brandsTop5[manufacturerName].map((item) => (
    <ListItem
      className={classes.insightLI}
      key={`${item.rank}` * Math.random()}
    >
      <h5
        className={classes.insightRank}
        key={`${item.rank}` + item.UnitVelocity}
      >
        {item.rank}
      </h5>
      <ListItemAvatar
        className={classes.insightAvatarWrapper}
        key={`${item.rank}` + item.Manufacturer}
      >
        <Avatar
          className={classes.insightAvatar}
          alt={item.Trademark}
          src={item.src}
          key={`${item.rank}` + item.index}
        />
      </ListItemAvatar>
      <ListItemText
        className={classes.itemDesc}
        key={`${item.rank}` + item.desc}
        primary={item.Trademark}
        secondary={item.desc}
      />
      <h3 className={classes.cardKPI} key={`${item.rank}` * item.UnitVelocity}>
        {item.UnitVelocity}
      </h3>
    </ListItem>
  ));

  const manufacturerVal = manufacturerName;
  const brandIndex = brandData.findIndex(function(item, i){
    return (item.Manufacturer === manufacturerVal && item.Month === "12");
  });

  useEffect(() => {
    console.log("MANUFACTURER: ", manufacturerName);
    console.log("BRAND INDEX: ", brandIndex);
    console.log("BANDS TOP 5: ", brandsTop5);
  }, []);

  const HomeKPI = brandData[brandIndex];

  const totSales = HomeKPI.SalesCount.toLocaleString();
  const salesGrowth = HomeKPI.salesGrowth;
  const totDollars = HomeKPI.RetailDollars.toLocaleString();
  const revGrowth = HomeKPI.revGrowth;
  const skusTrack = HomeKPI.SkusTracked;
  const skusGrowth = HomeKPI.skusGrowth;
  const acv = HomeKPI.UnitVelocity;
  const uvGrowth = HomeKPI.uvGrowth;

  return (
    <ThemeProvider theme={advanaTheme}>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardBody>
              <GridContainer>
                <div>
                  <Avatar className={classes.cardAvatar}>
                    <ReceiptIcon className={classes.avatarIcon} />
                  </Avatar>
                </div>
                <div className={classes.cardCategory}>
                  {manufacturerName} Total Sales
                </div>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer className={classes.cardKPIContainer}>
                  <GridItem className={classes.cardKPIItem}>
                    <h3 className={classes.cardKPI}>
                      <NumberFormat
                        value={`${totSales}`}
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                      />
                    </h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>
                  {salesGrowth}%<span>vs. last month</span>
                </p>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardBody>
              <GridContainer>
                <Avatar className={classes.cardAvatar}>
                  <LocalAtmIcon className={classes.avatarIcon} />
                </Avatar>
                <div className={classes.cardCategory}>
                  {manufacturerName} Total Dollars
                </div>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer className={classes.cardKPIContainer}>
                  <GridItem>
                    <h3 className={classes.cardKPI}>
                      <NumberFormat
                        value={`${totDollars}`}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                      />
                    </h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>
                  {revGrowth}%<span>vs. last month</span>
                </p>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardBody>
              <GridContainer>
                <Avatar className={classes.cardAvatar}>
                  <LocalOfferIcon className={classes.avatarIcon} />
                </Avatar>
                <div className={classes.cardCategory}>
                  {manufacturerName} SKUs Tracked
                </div>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer>
                  <GridItem>
                    <h3 className={classes.cardKPI}>{skusTrack}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>
                  {skusGrowth}% <span>vs. last month</span>
                </p>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            {/* <CardBody className={classes.lockedKPI}> */}
            <CardBody>
              <GridContainer>
                <Avatar className={classes.cardAvatar}>
                  <SpeedIcon className={classes.avatarIcon} />
                </Avatar>
                <div className={classes.cardCategory}>
                  {manufacturerName} % ACV
                </div>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer>
                  <GridItem>
                    <h3 className={classes.cardKPI}>{acv}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>
                  {uvGrowth}%<span>vs. last month</span>
                </p>
              </div>
            </CardBody>
            {/* <div className={classes.cardKPIOverlay}>
              <LockIcon color="secondary" />
            </div> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card className={classes.dashCardAutoH}>
            <CardBody>
              <div className={classes.cardCategoryWrapper}>
                <ReceiptIcon className={classes.tasksIcon} />
                <h5 className={classes.insightTitle}>{manufacturerName} Total Sales</h5>
              </div>
              <div>
                <SalesMap />
                <ReactTooltip html={true} multiline={true}>
                  TOOLTIP
                </ReactTooltip>
              </div>
              {/* <p className={classes.cardCategory}>Map Legend<span className={classes.mapLegendDesc}>% Unemployment</span></p> */}
              <MapLegend />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.dashCardAutoH}>
            <CardBody>
              <div className={classes.cardCategoryWrapper}>
                <SpeedIcon className={classes.tasksIcon} />
                <h5 className={classes.insightTitle}>
                {manufacturerName} Top 5 SKUs |<span> unit velocity</span>
                </h5>
              </div>
              <div className={classes.insightLiWrapper} xs={12} sm={12} md={12}>
                <div className={classes.messagesBody}>{top5SKUs}</div>
                {/* <div className={classes.insightLiOverlay}>
                  <LockIcon color="secondary" />
                </div> */}
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
}

export default AdminHome;
