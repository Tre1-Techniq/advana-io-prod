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
//import axios from 'axios';

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
//import Box from "@material-ui/core/Box";

//Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Input } from '@material-ui/core';

//import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
//import InputAdornment from '@material-ui/core/InputAdornment';

import Parallax from "../../components/Parallax/Parallax";

// @material-ui/lab components
//import Pagination from '@material-ui/lab/Pagination';
import Autocomplete from '@material-ui/lab/Autocomplete';

// Advana Color Theme
import { ThemeProvider, Button } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/icons
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import LockOpenIcon from '@material-ui/icons/LockOpen';
//import SearchIcon from '@material-ui/icons/Search';

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks";

// Import Images
import campaignsPageHero from "../../assets/img/campaigns-page-hero.png";

import campaignList from "./campaign-items";
import CampaignItems from "./CampaignItems";

import styles from "../../assets/jss/material-kit-react/views/campaignGridStyle";

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

    const [q, setQ] = useState("");
    const [searchParam] = useState(["status", "title"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    const [campaigns, setCampaigns] = useState([]);

    const [openOptIn, setOpenOptIn] = useState(false);

    //const [visible, setVisible] = useState(6);

    useEffect(() => {
      // const getCampaigns = async () => {
      //   const res = await axios.get('./static/campaign-list.json');
      //   setCampaigns(res.data);
      // };

      // getCampaigns(campaigns);
      setCampaigns(campaignList);

    }, []);

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
    };

    const updateSearch = (value) => {
      setQ(value);
      setCampaigns(campaigns);
    };

    const resetSearch =() => {
      setQ('');
    };

    const handleOpenOptIn = () => {
      setOpenOptIn(true);
    };

    const handleCloseOptIn = () => {
      setOpenOptIn(false);
    };
    
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
                    <GridItem
                      classes={{
                        root: classes.headerBtnWrapper,
                      }}
                      xs={12} sm={12} md={12}
                    >
                      <Button
                        className={classes.solidBtn}
                        onClick={() => handleOpenOptIn()}
                        variant="contained"
                        color="primary"
                      >
                        <LockOpenIcon className={classes.btnIcon} style={{marginRight: "20px"}} />
                        OPT-IN
                      </Button>
                      <Modal
                          className={classes.modal}
                          open={openOptIn}
                          onClose={handleCloseOptIn}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                              timeout: 500,
                              classes: {
                                  root: classes.modalBackdrop
                              }
                          }}
                      >
                        <Fade in={openOptIn}>
                            <div className={classes.modalOptIn}>
                              <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We will never share your email.</FormHelperText>
                              </FormControl>
                            </div>
                        </Fade>
                      </Modal>
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

            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.filterHeader}>{filterParam} Campaigns</h2>
            </GridItem>

            <div className={classes.filterWrapper}>
              <div className={classes.filterContainer}>
                    <GridItem xs={12} sm={12} md={4}>
                        <div className={classes.filterSearch}>
                          <Autocomplete
                            options={search(campaigns)}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                              <TextField
                                className={classes.searchField}
                                {...params}
                                label="Search Campaigns..."
                                variant="outlined"
                                value={q}
                                onChange={(e) => updateSearch(e.target.value)}
                                onFocus={(e) => resetSearch(e.target.value)}
                                onBlur={(e) => updateSearch(e.target.value)}
                              />
                            )}
                          />
                        </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <div className={classes.filterSelect}>
                          <Select
                              onChange={(e) => {
                                  setFilterParam(e.target.value);
                              }}
                              className={classes.selectFilter}
                              name="status"
                              value={filterParam}
                              inputProps={{ 'aria-label': 'Campaign Status' }}
                          >
                              <MenuItem value="All">All</MenuItem>
                              <MenuItem value="Current">Current</MenuItem>
                              <MenuItem value="Past">Past</MenuItem>
                          </Select>
                        </div>
                      </GridItem>
                </div>
              </div>     
            <CampaignItems id="campaigns" campaigns={search(campaigns)} />
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
};
