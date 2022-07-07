import React, { useEffect, useState } from "react";
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
// import LockIcon from "@material-ui/icons/Lock";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// import brandData from "./Tables/portal-home-kpi.json";
import brandsTop5 from "./Tables/portal-top5-skus.json";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import axios from "axios";

const useStyles = makeStyles(styles);

function AdminHome() {
  const [ homeKpi, setHomeKpi ] = useState([{}]);
  const [ top5Skus, setTop5Skus ] = useState([{}]);

  const { user, getAccessTokenSilently } = useAuth0();

  const manufacturer = "https://user.metadata.io/manufacturer";
  const manufacturerName = `${user[manufacturer]}`;

  const classes = useStyles();

  useEffect(() => {
    // fetchHomeKpi();
    // callApi();
    callHomeKpiApi();
    callTop5SkusApi();

    console.log("MANUFACTURER: ", manufacturerName);
    console.log("BRANDS TOP 5: ", brandsTop5);
  }, []);

  async function callHomeKpiApi() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:4000/homekpi", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setHomeKpi(response.data[0]);

      console.log("HOME KPI RESPONSE: ", response.data[0]);
    } catch (error) {
      console.log("API ERROR: ", error.message)
    }
  };

  async function callTop5SkusApi() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:4000/top5skus", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setTop5Skus(response.data[0]);

      console.log("ACCESS TOKEN: ", token);
      console.log("TOP5 SKUS RESPONSE: ", response.data);
    } catch (error) {
      console.log("API ERROR: ", error.message)
    }
  };

  // BigQuery Home KPI Results
  const SalesCount = homeKpi.SalesCount;
  const SalesGrowth = homeKpi.SalesGrowth;
  const RetailDollars = homeKpi.RetailDollars;
  const RetailGrowth = homeKpi.RetailGrowth;
  const SkusTracked = homeKpi.SkusTracked;
  const SkusGrowth = homeKpi.SkusGrowth;
  const ACV = homeKpi.UnitVelocity;
  const UvGrowth = homeKpi.UvGrowth;

  // Top5 SKUs Local Copy
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
                    Total Sales
                  </div>
                </GridContainer>
                <div className={classes.cardKPIWrapper}>
                  <GridContainer className={classes.cardKPIContainer}>
                    <GridItem className={classes.cardKPIItem}>
                      <h3 className={classes.cardKPI}>
                        <NumberFormat
                          value={SalesCount}
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
                    {SalesGrowth}%<span>vs. last month</span>
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
                    Total Dollars
                  </div>
                </GridContainer>
                <div className={classes.cardKPIWrapper}>
                  <GridContainer className={classes.cardKPIContainer}>
                    <GridItem>
                      <h3 className={classes.cardKPI}>
                        <NumberFormat
                          value={`${RetailDollars}`}
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
                    {RetailGrowth}%<span>vs. last month</span>
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
                    SKUs Tracked
                  </div>
                </GridContainer>
                <div className={classes.cardKPIWrapper}>
                  <GridContainer>
                    <GridItem>
                      <h3 className={classes.cardKPI}>{SkusTracked}</h3>
                    </GridItem>
                  </GridContainer>
                </div>
                <div className={classes.cardPercentChange}>
                  <ArrowDropUpIcon />
                  <p>
                    {SkusGrowth}% <span>vs. last month</span>
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
                    % ACV
                  </div>
                </GridContainer>
                <div className={classes.cardKPIWrapper}>
                  <GridContainer>
                    <GridItem>
                      <h3 className={classes.cardKPI}>{ACV}</h3>
                    </GridItem>
                  </GridContainer>
                </div>
                <div className={classes.cardPercentChange}>
                  <ArrowDropUpIcon />
                  <p>
                    {UvGrowth}%<span>vs. last month</span>
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
                  <h5 className={classes.insightTitle}>Total Sales</h5>
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
                  Your Top 5 SKUs |<span> Unit Velocity</span>
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
