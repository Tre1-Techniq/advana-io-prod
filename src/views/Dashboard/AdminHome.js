import React, { useState, useEffect, useContext } from "react";
//import { Redirect } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { AccountContext } from "../../components/Accounts/Accounts";

import MapLegend from "./Charts/MapLegend";

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
//import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SpeedIcon from '@material-ui/icons/Speed';
import LockIcon from '@material-ui/icons/Lock';

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

//import { messages } from "../../variables/general.js";

import brandData from './Tables/brandData.json';
import brandsTop5 from './Tables/brandsTop5.js';

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

function AdminHome() {
  
  const { getSession } = useContext(AccountContext);

  const classes = useStyles();
  //const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  //const [loggedIn, setLoggedIn] = useState(false);
  const [company, setCompany] = useState("");
  const [currCompany, setCurrCompany] = useState("");
  const [content, setContent] = useState("");
  //const [brandsTop5, setBrandsTop5] = useState([]);
  //const [brandshome, setBrandsHome] = useState("");

  const top5F = brandsTop5[0].FritoLay.map(item =>
    <ListItem className={classes.insightLI} key={`${item.rank}` * Math.random()}>
      <h5 className={classes.insightRank} key={`${item.rank}` + item.UnitVelocity}>{ item.rank }</h5>
      <ListItemAvatar className={classes.insightAvatarWrapper} key={`${item.rank}` + item.Manufacturer}>
        <Avatar className={classes.insightAvatar} alt={item.Trademark} src={item.src} key={`${item.rank}` + item.index} />
        </ListItemAvatar>
          <ListItemText key={`${item.rank}` + item.desc}
            primary={item.Trademark}
            secondary={item.desc}
          />
        <h3 className={classes.cardKPI} key={`${item.rank}` * item.UnitVelocity}>{item.UnitVelocity}</h3>
    </ListItem>
  )

  const top5P = brandsTop5[0].PepsiCo.map(item =>
    <ListItem className={classes.insightLI} key={`${item.rank}` * Math.random()}>
      <h5 className={classes.insightRank} key={`${item.rank}` + item.UnitVelocity}>{ item.rank }</h5>
      <ListItemAvatar className={classes.insightAvatarWrapper} key={`${item.rank}` + item.Manufacturer}>
        <Avatar className={classes.insightAvatar} alt={item.Trademark} src={item.src} key={`${item.rank}` + item.index} />
        </ListItemAvatar>
          <ListItemText key={`${item.rank}` + item.desc}
            primary={item.Trademark}
            secondary={item.desc}
          />
        <h3 className={classes.cardKPI} key={`${item.rank}` * item.UnitVelocity}>{item.UnitVelocity}</h3>
    </ListItem>
  )

  const getCurrCompany = () => {
    if (company === "Frito-Lay") {
      setCurrCompany("FitoLay");
    } else {
      if (company === "PepsiCo") {
        setCurrCompany("PepsiCo");
      } else {
        if (company === "Awake Corp") {
          setCurrCompany("Awake");
        } else {
          return null;
        }
      } 
    };
  }

  useEffect(() => {
    getCurrCompany();
    console.log("BRAND DATA: ", brandData);
    console.log("TOP 5: ", brandsTop5[0]);
    getSession()
    .then((data) => {
      console.log("DATA: ", data)
      //setFirstname(data["custom:firstname"]);
      // setLastname(data["custom:lastname"]);
      setCompany(data["custom:company"]);
      // setEmail(data["email"]);
      // setSegment(data["custom:segment"]);
      // setTier(data["custom:tier"]);
    });
    console.log("CURRENT COMPANY: ", currCompany);
  }, []);

  //const PepsiCo = brandData[9];
  const FritoLay = brandData[12];
  const Awake = brandData[33];

  const totSalesF = FritoLay.SalesCount.toLocaleString();
  const salesGrowthF = FritoLay.salesGrowth;
  const totDollarsF = FritoLay.RetailDollars.toLocaleString();
  const revGrowthF = FritoLay.revGrowth;
  const skusTrackF = FritoLay.SkusTracked;
  const skusGrowthF = FritoLay.skusGrowth;
  const acvF = FritoLay.UnitVelocity.toFixed(1);
  const uvGrowthF = FritoLay.uvGrowth;

  // const totSalesP = PepsiCo.SalesCount.toLocaleString();
  // const salesGrowthP = PepsiCo.salesGrowth;
  // const totDollarsP = PepsiCo.RetailDollars.toLocaleString();
  // const revGrowthP = PepsiCo.revgrowth;
  // const skusTrackP = PepsiCo.SkusTracked;
  // const skusGrowthP = PepsiCo.skusGrowth;
  // const acvP = PepsiCo.UnitVelocity.toFixed(1);
  // const uvGrowthP = PepsiCo.uvGrowth;

  const totSalesA = Awake.SalesCount.toLocaleString();
  const salesGrowthA = Awake.salesGrowth;
  const totDollarsA = Awake.RetailDollars.toLocaleString();
  const revGrowthA = Awake.revgrowth;
  const skusTrackA = Awake.SkusTracked;
  const skusGrowthA = Awake.skusGrowth;
  const acvA = Awake.UnitVelocity.toFixed(1);
  const uvGrowthA = Awake.uvGrowth;

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
                    {company} Total Sales
                  </div>
                <GridItem>
                </GridItem>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer className={classes.cardKPIContainer}>
                  <GridItem className={classes.cardKPIItem}>
                    <h3 className={classes.cardKPI}>
                      {company === "Frito-Lay" ? totSalesF : totSalesA}
                    </h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                  <ArrowDropUpIcon />
                  <p>{company === "Frito-Lay" ? salesGrowthF : salesGrowthA}%<span>vs. last month</span></p>
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
                  {company} Total Dollars
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer className={classes.cardKPIContainer}>
                  <GridItem>
                    <h3 className={classes.cardKPI}>${company === "Frito-Lay" ? totDollarsF : totDollarsA}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon/>
                  <p>{company === "Frito-Lay" ? revGrowthF : revGrowthA}%<span>vs. last month</span></p>
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
                  {company} SKUs Tracked
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer>
                  <GridItem>
                    <h3 className={classes.cardKPI}>{company === "Frito-Lay" ? skusTrackF : skusTrackA}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>{company === "Frito-Lay" ? skusGrowthF : skusGrowthA}% <span>vs. last month</span></p>
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
                  <div className={classes.cardCategory}>
                  {company} % ACV
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.cardKPIWrapper}>
                <GridContainer>
                  <GridItem>
                    <h3 className={classes.cardKPI}>{company === "Frito-Lay" ? acvF : acvA}</h3>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.cardPercentChange}>
                <ArrowDropUpIcon />
                <p>{company === "Frito-Lay" ? uvGrowthF : uvGrowthA}%<span>vs. last month</span></p>
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
              <h5 className={classes.bodyTitle}>Total Sales</h5>
              <div>
                <SalesMap setTooltipContent={setContent} />
                <ReactTooltip html={true} multiline={true}>{content}</ReactTooltip>
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
                <h5 className={classes.insightTitle}>Fastest Moving SKUs |<span> unit velocity</span></h5>
              </div>
              <div className={classes.insightLiWrapper} xs={12} sm={12} md={12}>
                <div className={classes.messagesBody}>
                {company === "Frito-Lay" ? top5F : top5P}
                </div>
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
