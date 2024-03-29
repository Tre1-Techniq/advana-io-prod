import React, { useEffect } from "react";
//import { Redirect } from "react-router-dom";
import ReactTooltip from "react-tooltip";

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

//import { messages } from "../../variables/general.js";

// import brandData from './Tables/brandData.json';
import brandDataJSON from "./Tables/portal-home-kpi.json";
// import brandsTop5 from "./Tables/brandsTop5.js";
import brandsTop5 from "./Tables/portal-top5-skus.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

function AdminHome() {
  const { user } = useAuth0();
  const manufacturer = "https://user.metadata.io/manufacturer";
  const manufacturerName = user[manufacturer];

  const brandData = brandDataJSON[0].manufacturerName;

  const classes = useStyles();

  // const top5F = brandsTop5[0].FritoLay.map((item) => (
  const top5F = brandsTop5[0].PepsiCo.map((item) => (
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
        key={`${item.rank}` + item.desc}
        primary={item.Trademark}
        secondary={item.desc}
      />
      <h3 className={classes.cardKPI} key={`${item.rank}` * item.UnitVelocity}>
        {item.UnitVelocity}
      </h3>
    </ListItem>
  ));

  useEffect(() => {
    // setMaufacturerName(user[manufacturerName]);
    console.log("MANUFACTURER: ", manufacturerName);
  }, []);

  // const PepsiCo = brandData[17];
  const HomeKPI = brandData;
  // const HomeKPI = brandData[19];
  // const Awake = brandData[33];

  const totSalesF = HomeKPI.SalesCount.toLocaleString();
  const salesGrowthF = HomeKPI.salesGrowth;
  const totDollarsF = HomeKPI.RetailDollars.toLocaleString();
  const revGrowthF = HomeKPI.revGrowth;
  const skusTrackF = HomeKPI.SkusTracked;
  const skusGrowthF = HomeKPI.skusGrowth;
  const acvF = HomeKPI.UnitVelocity;
  const uvGrowthF = HomeKPI.uvGrowth;

  // const totSalesP = PepsiCo.SalesCount.toLocaleString();
  // const salesGrowthP = PepsiCo.salesGrowth;
  // const totDollarsP = PepsiCo.RetailDollars.toLocaleString();
  // const revGrowthP = PepsiCo.revgrowth;
  // const skusTrackP = PepsiCo.SkusTracked;
  // const skusGrowthP = PepsiCo.skusGrowth;
  // const acvP = PepsiCo.UnitVelocity;
  // const uvGrowthP = PepsiCo.uvGrowth;

  // const totSalesA = Awake.SalesCount.toLocaleString();
  // const salesGrowthA = Awake.salesGrowth;
  // const totDollarsA = Awake.RetailDollars.toLocaleString();
  // const revGrowthA = Awake.revgrowth;
  // const skusTrackA = Awake.SkusTracked;
  // const skusGrowthA = Awake.skusGrowth;
  // const acvA = Awake.UnitVelocity;
  // const uvGrowthA = Awake.uvGrowth;

  return (
    <ThemeProvider theme={advanaTheme}>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem>
                  <Avatar className={classes.cardAvatar}>
                    <ReceiptIcon className={classes.avatarIcon} />
                  </Avatar>
                </GridItem>
                <div className={classes.cardCategory}>
                {manufacturerName} Total Sales
                </div>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer className={classes.cardKPIContainer}>
                  <GridItem className={classes.cardKPIItem}>
                    <h3 className={classes.cardKPI}>{totSalesF}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>
                  {salesGrowthF}%<span>vs. last month</span>
                </p>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem>
                  <Avatar className={classes.cardAvatar}>
                    <LocalAtmIcon className={classes.avatarIcon} />
                  </Avatar>
                </GridItem>
                <GridItem>
                  <div className={classes.cardCategory}>
                  {manufacturerName} Total Dollars
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer className={classes.cardKPIContainer}>
                  <GridItem>
                    <h3 className={classes.cardKPI}>${totDollarsF}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>
                  {revGrowthF}%<span>vs. last month</span>
                </p>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem>
                  <Avatar className={classes.cardAvatar}>
                    <LocalOfferIcon className={classes.avatarIcon} />
                  </Avatar>
                </GridItem>
                <GridItem>
                  <div className={classes.cardCategory}>
                  {manufacturerName} SKUs Tracked
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer>
                  <GridItem>
                    <h3 className={classes.cardKPI}>{skusTrackF}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>
                  {skusGrowthF}% <span>vs. last month</span>
                </p>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardBody className={classes.lockedKPI}>
              <GridContainer>
                <GridItem>
                  <Avatar className={classes.cardAvatar}>
                    <SpeedIcon className={classes.avatarIcon} />
                  </Avatar>
                </GridItem>
                <GridItem>
                  <div className={classes.cardCategory}>{manufacturerName} % ACV</div>
                </GridItem>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer>
                  <GridItem>
                    <h3 className={classes.cardKPI}>{acvF}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>
                  {uvGrowthF}%<span>vs. last month</span>
                </p>
              </div>
            </CardBody>
            <div className={classes.cardKPIOverlay}>
              <LockIcon color="secondary" />
            </div>
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
                <div className={classes.messagesBody}>{top5F}</div>
                <div className={classes.insightLiOverlay}>
                  <LockIcon color="secondary" />
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
}

export default AdminHome;
