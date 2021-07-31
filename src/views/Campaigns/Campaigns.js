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
import axios from 'axios';

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

// @material-ui/lab components
import Pagination from '@material-ui/lab/Pagination';

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/icons
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import LockOpenIcon from '@material-ui/icons/LockOpen';

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks";

// Import Images
import campaignsPageHero from "../../assets/img/campaigns-page-hero.png";

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

    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    useEffect(() => {
      const getCampaigns = async () => {
        setLoading(true);
        const res = await axios.get('campaign-list.json');
        setCampaigns(res.data);
        setLoading(false);
      };

      getCampaigns();
    }, [currentPage]);
    
    const handleChange = (event, value) => {
      setCurrentPage(value);
      setCampaigns(currentCampaigns)
    };

    // Get Campaigns
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem  - itemsPerPage;
    const currentCampaigns = campaigns.slice(indexOfFirstItem, indexOfLastItem);
    
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
            <CampaignItems campaigns={currentCampaigns} loading={loading} />

            <GridItem xs={12} sm={12} md={12}>
                <Box className={classes.pagination}>
                    <Pagination 
                        color="primary"
                        limit={itemsPerPage}
                        count={4} 
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
