/*!
=========================================================
Material Kit - v2.0.7
=========================================================

Product Page: https://www.creative-tim.com/product/material-kit
Copyright 2020 Creative Tim (https://www.creative-tim.com/)

Coded by Creative Tim

=========================================================

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes
//import classNames from "classnames";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Parallax from "../../components/Parallax/Parallax";
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputAdornment from '@material-ui/core/InputAdornment';

// @material-ui/lab components
import Pagination from '@material-ui/lab/Pagination';

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/icons
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import SearchIcon from '@material-ui/icons/Search';
import LockOpenIcon from '@material-ui/icons/LockOpen';

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks";

// Import Images
import campaignsPageHero from "../../assets/img/campaigns-page-hero.png";

import campaigns from "./campaign-items";
import CampaignItems from "./CampaignItems";

import styles from "../../assets/jss/material-kit-react/views/campaignGrid";

function ScrollTop(props) {
  const { children, window } = props;
  const useScrollStyles = makeStyles((styles) => ({
    root: {
      position: "fixed",
      bottom: styles.spacing(2),
      right: styles.spacing(2),
      zIndex: "20",
    },
  }));
  const scrollClasses = useScrollStyles();
  // You need to set the window ref as useScrollTrigger if using an iFrame
  // will default to window.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={scrollClasses.root}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles(styles);

export default function Campaigns(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["status", "title"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [totalItems, setTotalItems] = useState(campaigns.length);

    const fetchAll = () => {
      console.log("Total Items: ", totalItems);
    }
    
    const handleChange = (event, value) => {
      const indexOfLastItem = value * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem  - itemsPerPage;
      const currentItems = campaigns.slice(indexOfFirstItem, indexOfLastItem);

      setTotalItems(itemsPerPage);

      setCurrentPage(value);
      setItems(itemsPerPage)
      setItemsPerPage(currentItems.length);
      console.log("PAGE#: ", value);
      console.log("CURRENT ITEMS: ", currentItems);
      console.log("INDEX OF FIRST ITEM: ", indexOfFirstItem);
      console.log("INDEX OF LAST ITEM: ", indexOfLastItem);
      
    };

    useEffect(() => {
      console.log(search);
        fetchAll();
    }, [currentPage]);

    function search(campaigns) {
        return campaigns.filter((campaign) => {
            if (campaign.status == filterParam) {
                return searchParam.some((newCampaign) => {
                    return (
                        campaign[newCampaign]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newCampaign) => {
                    return (
                        campaign[newCampaign]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }
    
  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.heroContainer}>
        <Header
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "white",
          }}
          {...rest}
        />
        <Toolbar
          style={{ position: "absolute", top: "-50px" }}
          id="back-to-top-anchor"
        />
        <Parallax image={require("../../assets/img/advana-io-bg-01.jpg").default}>
          <div className={classes.container}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                    <h2 className={classes.titleMid}>CAMPAIGNS</h2>
                    <h4 className={classes.subtitle}>
                    Join a campaign and check out our past results.
                    </h4>
                    <GridItem xs={12} sm={12} md={12}>
                      <Button
                        className={classes.solidBtn}
                        variant="contained"
                        color="primary"
                        to="/"
                      >
                        <LockOpenIcon className={classes.btnIcon} style={{marginRight: "20px"}} />
                        OPT-IN
                      </Button>
                    </GridItem>
                </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <img className={classes.heroImg} src={campaignsPageHero} />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <GridContainer className={classes.filterInputs}>
                <GridItem xs={12} sm={12} md={3}>
                    <div className="search-wrapper">
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>   
                            }
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search campaigns..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                    <NativeSelect
                        onChange={(event) => {
                            setFilterParam(event.target.value);
                        }}
                        className={classes.selectFilter}
                        name="status"
                        value="Filter by Status"
                        inputProps={{ 'aria-label': 'Campaign Status' }}
                    >
                        <option value="Filter by Status">Filter by Status</option>
                        <option value="All">All</option>
                        <option value="Current">Current</option>
                        <option value="Past">Past</option>
                    </NativeSelect>
                </GridItem>
            </GridContainer>
              
            <CampaignItems items={[items]} />
              <GridItem xs={12} sm={12} md={12}>
                    <Box className={classes.pagination}>
                        <Pagination 
                            color="primary"
                            limit={itemsPerPage}
                            count={3} 
                            page={currentPage} 
                            onChange={handleChange}  
                        />
                    </Box>
                </GridItem>
          </div>
          <ScrollTop
            style={{ zIndex: "2000" }}
            className={classes.scrollTop}
            {...props}
          >
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon color="inherit" />
            </Fab>
          </ScrollTop>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
