import {
  defaultFont,
  primaryColor,
  secondaryColor,
  successColor,
  // warningColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "../../material-dashboard-react";

import imagesStyle from "../../../../assets/jss/material-kit-react/imagesStyles.js";

const dashboardStyle = (theme) => ({
  successText: {
    color: successColor[0],
  },
  ...imagesStyle,
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  campaignStats: {
    color: secondaryColor[0],
    display: "inline-flex",
    "& h5": {
      fontSize: "12px",
      fontWeight: "300",
      lineHeight: "12px",
      "& span": {
        fontWeight: "500",
        marginRight: "5px",
      },
    },
    "& svg": {
      top: "4px",
      width: "20px",
      height: "20px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  dashboardHeader: {
    width: "100%",
    height: "60px",
    marginBottom: "0",
    paddingBottom: "1.25rem",
    borderBottom: "1px solid #e7e7e7",
    display: "inline-flex",
    justifyContent: "center",
    "& h5": {
      color: secondaryColor[0],
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      margin: "0 10px",
      height: "40px",
    },
    "& span": {
      fontWeight: "500",
      marginRight: "0.25rem",
    },
  },
  userAvatar: {
    "& img": {
      width: "100%",
      height: "auto",
    },
  },
  userAvatarWrapper: {
    maxWidth: "40px",
    maxHeight: "40px",
    marginRight: "10px",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
  },
  userNameWrapper: {

  },
  userName: {
    height: "40px",
    paddingRight: "20px",
  },
  btnIcon: {
    marginRight: "10px",
  },
  createCampaignBTN: {
    margin: "0 1.25rem",
  },
  campaignCountWrapper: {
    paddingLeft: "10px",
    borderLeft: "1px solid #d7d7d7",
    "& h5": {
      height: "40px",
    },
  },
  campaignCount: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      top: "0",
      right: "0",
      marginLeft: "10px",
      fontSize: "12px",
      background: secondaryColor[0],
      color: whiteColor,
      minWidth: "20px",
      height: "20px",
      width: "20px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "20px",
      verticalAlign: "middle",
      display: "inline-flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "12px",
      marginRight: "8px",
    },
  },
  messagesBody: {
    height: "410px",
    overflowY: "scroll"
  },
  notificationsIcon: {
    display: "flex",
    justifyContent: "start",
    marginRight: "10px",
    color: secondaryColor[0],
  },
  cardDetailsWrapper: {
    width: "100%",
    marginBottom: "1.25rem",
  },
  cardCategoryWrapper: {
    width: "100%",
    borderBottom: "1px solid" + secondaryColor[0],
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    display: "flex",
    justifyContent: "start",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardKPI: {
    color: secondaryColor[0],
    marginTop: "0px",
    minHeight: "auto",
    fontSize: "2.5rem",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: secondaryColor[0],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardUserInfo: {
    borderBottom: "1px solid #f7f7f7",
    padding: "1.25rem 1.25rem !important",
  },
  cardConnections: {
    borderBottom: "1px solid #f7f7f7",
  },
  connectionsIcon: {
    width: "30px",
    height: "30px",
    position: "relative",
    top: "7px",
    marginRight: "5px",
    "& path": {
      fill: primaryColor[0],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  tableResponsive: {
    "& campaignListTable": {
      marginTop: "0",
    },
  }
});

export default dashboardStyle;
