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

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
//import Typography from "@material-ui/core/Typography";

// @material-ui/icons
import DataUsageIcon from "@material-ui/icons/DataUsage";
import StorageIcon from "@material-ui/icons/Storage";
import CodeIcon from "@material-ui/icons/Code";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TimelineIcon from "@material-ui/icons/Timeline";
import ExploreIcon from "@material-ui/icons/Explore";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingsIcon from "@material-ui/icons/Settings";
import ExtensionIcon from "@material-ui/icons/Extension";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// Import Images
import dataGraphic from "../../../assets/img/data-pipeline-vector-graphic-01.jpg";
import sentry from "assets/img/products/advana-product-sentry.png";
import insight from "assets/img/products/advana-product-insight.png";
import promote from "assets/img/products/advana-product-promote.png";
import reach from "assets/img/products/advana-product-reach.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import avatarBlank from "assets/img/faces/avatar-blank.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h1
        className={classes.title}
        style={{ width: "100%", textAlign: "center" }}
      >
        About <span>ADVANA</span>
      </h1>
      <h4
        className={classes.subtitle}
        style={{
          color: "#848484",
          textAlign: "center",
          width: "100%",
        }}
      >
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam
      </h4>
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{
            display: "flex",
            borderRight: "1px solid #e4e4e4",
            marginTop: "50px",
          }}
        >
          <GridItem xs={12} sm={12} md={4} className={classes.teamCard}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.gridItem}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarBlank} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "1.5rem",
                }}
              >
                Derek Myers
                <br />
                <small className={classes.smallTitle}>CEO</small>
              </h4>
              <CardBody style={{ padding: "0 20px" }}>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <ExploreIcon style={{ margin: "0 20px", fill: "#2e4094" }} />
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <MonetizationOnIcon
                    style={{ margin: "0 20px", fill: "#2e4094" }}
                  />
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.teamCard}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.gridItem}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarBlank} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "1.5rem",
                }}
              >
                Mike Fischer
                <br />
                <small className={classes.smallTitle}>Account Executive</small>
              </h4>
              <CardBody style={{ padding: "0 20px" }}>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <MonetizationOnIcon
                    style={{ margin: "0 20px", fill: "#2e4094" }}
                  />
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <TimelineIcon style={{ margin: "0 20px", fill: "#2e4094" }} />
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.teamCard}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.gridItem}
                style={{ margin: "0 auto" }}
              >
                <img
                  src={avatarBlank}
                  alt="..."
                  className={imageClasses}
                  style={{ margin: "0 auto" }}
                />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "1.5rem",
                }}
              >
                Nicole Springer
                <br />
                <small className={classes.smallTitle}>Marketing Manager</small>
              </h4>
              <CardBody style={{ padding: "0 20px" }}>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <TrendingUpIcon
                    style={{ margin: "0 20px", fill: "#2e4094" }}
                  />
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <DataUsageIcon
                    style={{ margin: "0 20px", fill: "#2e4094" }}
                  />
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.teamCard}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.gridItem}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarBlank} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "1.5rem",
                }}
              >
                Carlos Anderson
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardBody style={{ padding: "0 20px" }}>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <CodeIcon style={{ margin: "0 20px", fill: "#2e4094" }} />
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <StorageIcon style={{ margin: "0 20px", fill: "#2e4094" }} />
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.teamCard}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.gridItem}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarBlank} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "1.5rem",
                }}
              >
                Yue Wu
                <br />
                <small className={classes.smallTitle}>Data Engineer</small>
              </h4>
              <CardBody style={{ padding: "0 20px" }}>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <SettingsIcon style={{ margin: "0 20px", fill: "#2e4094" }} />
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <EqualizerIcon
                    style={{ margin: "0 20px", fill: "#2e4094" }}
                  />
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.teamCard}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.gridItem}
                style={{ margin: "0 auto" }}
              >
                <img
                  src={avatarBlank}
                  alt="..."
                  className={imageClasses}
                  style={{ margin: "0 auto" }}
                />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "1.5rem",
                }}
              >
                Ben DeVenezia
                <br />
                <small className={classes.smallTitle}>Data Scientist</small>
              </h4>
              <CardBody style={{ padding: "0 20px" }}>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <ExtensionIcon
                    style={{
                      margin: "0 20px",
                      fill: "#2e4094",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <CodeIcon style={{ margin: "0 20px", fill: "#2e4094" }} />
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{
            padding: "50px",
            textAlign: "left",
            margin: "0 0 0 50px !important",
            position: "relative",
            top: "25px",
          }}
        >
          <GridItem xs={12} sm={12} md={12}>
            <GridItem style={{ color: "#848484" }}>
              <h3 style={{ color: "#2e4094", fontWeight: "400" }}>
                Finibus Bonorum et Malorum?
              </h3>
              <img
                src={dataGraphic}
                style={{ width: "100%", margin: "20px 0" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} style={{display: "flex", justifyContent: "space-between", padding: "0 !important"}}>
            <GridItem xs={12} sm={6} md={3}>
            <img src={sentry} style={{width: "100%", padding: "15px"}} />
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
            <img src={insight} style={{width: "100%", padding: "15px"}} />
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
            <img src={reach} style={{width: "100%", padding: "15px"}} />
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
            <img src={promote} style={{width: "100%", padding: "15px"}} />
            </GridItem>
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
}
