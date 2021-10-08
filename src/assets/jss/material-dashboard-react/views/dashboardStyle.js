import {
  defaultFont,
  primaryColor,
  secondaryColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "../../material-dashboard-react";

import imagesStyle from "../../material-kit-react/imagesStyles.js";

const dashboardStyle = () => ({
  root: {
    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
      {
        outline: "none",
      },
  },
  MuiListItemAvatar: {
    root: {
      minWidth: "40px !important",
    },
  },
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
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    borderTop: "1px solid #e7e7e7",
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
  successIcon: {
    color: successColor[0],
    fontSize: "1.25rem",
    position: "relative",
    top: "5px"
  },
  warningIcon: {
    color: warningColor[0],
    fontSize: "1.25rem",
    position: "relative",
    top: "5px"
  },
  dangerIcon: {
    color: dangerColor[0],
    fontSize: "1.25rem",
    position: "relative",
    top: "5px"
  },
  linearProgress: {
    height: "10px",
    borderRadius: "5px",
  },
  campaignDetailsTitle: {
    color: primaryColor[0],
    fontSize: "1.25rem",
    fontWeight: "400",
    marginTop: "10px",
    "& span": {
      fontSize: "1rem",
      color: grayColor[0],
      marginLeft: "20px",
    },
  },
  campaignDetails: {
    display: "flex",
    justifyContent: "start",
    "& img": {
      width: "100%",
    },
  },
  campaignProgressBarTitle: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    padding: "10px 0",
    marginBottom: "0",
    display: "flex",
    justifyContent: "start",
    "& span": {
      color: primaryColor[0],
      margin: "0 8px",
      fontSize: "1.25rem",
      fontWeight: "400",
    },
  },
  campaignProgressBar: {
    paddingBottom: "30px",
    borderBottom: "1px solid #e7e7e7",
  },
  redemptionsProgressBar: {
    width: "85%",
    padding: "10px 0",
  },
  dashboardHeader: {
    width: "100%",
    height: "60px",
    marginBottom: "0",
    paddingBottom: "0.75rem",
    display: "inline-flex",
    justifyContent: "start",
    "& h5": {
      color: secondaryColor[0],
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      margin: "0 10px",
      height: "50px",
    },
    "& span": {
      fontWeight: "500",
      marginRight: "0.25rem",
    },
  },
  insightTitle: {
    color: primaryColor[0],
    fontSize: "1.25rem",
    fontWeight: "400",
    marginTop: "10px",
    marginBottom: "0",
    "& span": {
      fontSize: "0.8rem",
      color: grayColor[0],
      marginLeft: "5px",
    },
  },
  insightLI: {
    paddingTop: "0",
    height: "55px",
  },
  insightAvatarWrapper: {
    marginRight: "15px",
    width: "60px",
    height: "35px",
  },
  insightAvatar: {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
  },
  campaignTableHeader: {
    width: "100%",
    height: "60px",
    marginBottom: "0",
    paddingBottom: "0",
    display: "inline-flex",
    justifyContent: "start",
    alignItems: "center",
    "& h5": {
      color: secondaryColor[0],
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      margin: "0 10px",
      height: "50px",
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
    maxWidth: "50px",
    maxHeight: "50px",
    marginRight: "10px",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
  },
  userNameWrapper: {},
  userName: {
    height: "40px",
    paddingRight: "20px",
  },
  btnIcon: {
    marginRight: "10px",
  },
  addBtnIcon: {
    fontSize: "1.25rem",
  },
  addCampaignBTN: {
    width: "160px",
    height: "40px",
    padding: "0 10px",
    margin: "0.5rem 1.25rem 0 0",
    fontSize: "0.7rem",
    borderRadius: "4px !important",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    position: "absolute",
    right: "0",
    "& p": {
      color: "#ffffff",
      fontSize: "0.7rem",
      fontWeight: "500",
      lineHeight: "1.25rem",
      marginLeft: "10px",
      marginBottom: "0",
    },
    "& svg": {
      margin: "0",
    },
    "&:hover": {
      "& p": {
        color: primaryColor[0],
      },
    },
  },
  campaignTable: {
    top: "-30px",
  },
  addFundsBTNWrapper: {
    alignItems: "center",
    position: "relative",
    marginLeft: "20px",
  },
  addFundsBTN: {
    margin: "0",
    width: "45px",
    height: "45px",
    "& p": {
      fontSize: "0.5rem !important",
    },
    "& svg": {
      fontSize: "1.5rem !important",
    },
  },
  addFundsBTNLabel: {
    display: "inline-flex",
    height: "auto",
    position: "relative",
    margin: "0",
    top: "0px",
    fontSize: "8px !important",
    "& p": {
      fontSize: "8px !important",
    },
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
    ...defaultFont,
    marginRight: "8px",
  },
  messagesBody: {
    height: "auto",
  },
  tasksIcon: {
    fontSize: "2rem",
    display: "flex",
    position: "relative",
    top: "-5px",
    justifyContent: "start",
    marginRight: "10px",
    color: primaryColor[0],
  },
  cardDetailsWrapper: {
    width: "100%",
    marginBottom: "1.25rem",
  },
  cardCategoryWrapper: {
    width: "100%",
    borderBottom: "1px solid #e7e7e7",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "16px",
    marginTop: "0",
    paddingTop: "0",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "start",
    alignItems: "baseline",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "16px",
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
  cardKPIWrapper: {
    width: "100%",
  },
  cardKPI: {
    color: secondaryColor[0],
    margin: "-10px 0 0 6px",
    minHeight: "auto",
    fontSize: "2.25rem",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: secondaryColor[0],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardAvatarWrapper: {
    display: "flex",
    justifyContent: "start",

  },
  cardAvatar: {
    width: "30px",
    height: "30px",
    backgroundColor: warningColor[0],
    marginRight: "10px",
    "& svg": {
      width: "1.25rem",
      height: "1.25rem",
    },
  },
  cardUserInfo: {
    borderBottom: "1px solid #f7f7f7",
    padding: "1.25rem 1.25rem !important",
  },
  cardConnections: {
    borderBottom: "1px solid #f7f7f7",
  },
  cardPercentChange: {
    borderTop: "1px solid #e7e7e7",
    display: "flex",
    justifyContent: "end",
    paddingTop: "0",
    width: "100%",
    height: "20px",
    color: successColor[0],
    fontWeight: "400",
    alignItems: "baseline",
    "& p": {
      fontSize: "1rem",
    },
    "& span": {
      marginLeft: "5px",
      color: grayColor[0],
      fontSize: "0.8rem",
      fontWeight: "300",
    }
  },
  cardInstructions: {
    color: grayColor[0],
    fontSize: "0.8rem",
    marginTop: "10px",
    marginLeft: "1.25rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    "& svg": {
      color: primaryColor[0],
      marginRight: "5px",
    },
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
  },
  dataGridHeader: {
    // color: "#ffffff",
    // backgroundColor: secondaryColor[0],
    "& focus": {
      outline: "none",
    },
  },
  horizontalList: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "0 !important",
    borderBottom: "1px solid #e7e7e7",
  },
  dashCard55vh: {
    // height: "55vh",
    height: "auto",
  },
  campaignCard55vh: {
    // height: "55vh",
    height: "auto",
  },
  controls: {
    display:"flex",
    justifyContent: "end",
    position: "relative",
    bottom: "60px",
    right: "20px",
  },
});

export default dashboardStyle;
