import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

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
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

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
      <div>
        {/* <div>
          <Typography>
            <strong>Finibus Bonorum et Malorum</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography>
            <strong>Finibus Bonorum et Malorum</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography>
            <strong>Finibus Bonorum et Malorum</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </div> */}
        <GridContainer
          xs={12}
          sm={12}
          md={8}
          style={{ borderRight: "1px solid #848484" }}
        >
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.itemGrid}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarBlank} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  lineHeight: "2rem",
                }}
              >
                Derek Meyer
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
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <ExploreIcon />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <MonetizationOnIcon />
                  </Button>
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.itemGrid}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarBlank} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  lineHeight: "2rem",
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
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <MonetizationOnIcon />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <TimelineIcon />
                  </Button>
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.itemGrid}
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
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  lineHeight: "2rem",
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
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <TrendingUpIcon />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <DataUsageIcon />
                  </Button>
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.itemGrid}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarBlank} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  lineHeight: "2rem",
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
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <CodeIcon />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <StorageIcon />
                  </Button>
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.itemGrid}
                style={{ margin: "0 auto" }}
              >
                <img src={avatarBlank} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes.cardTitle}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  lineHeight: "2rem",
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
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <SettingsIcon />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <EqualizerIcon />
                  </Button>
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                className={classes.itemGrid}
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
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  lineHeight: "2rem",
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
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <ExtensionIcon />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="instagram-twitter"
                  title="Excepteur sint occaecat"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <CodeIcon />
                  </Button>
                </Tooltip>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
