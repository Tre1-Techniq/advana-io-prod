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
  content: {
    padding: "0 15px 30px 15px !mportant",
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
  campaignHealthBox: {
    
  },
  campaignHealthDiv: {
    height: "40px",
  },
  successIconHealth: {
    color: successColor[0],
    fontSize: "3rem",
    position: "relative",
    top: "0",
    display: "flex",
    justifyContent: "center",
  },
  successIconRecomend: {
    color: successColor[0],
    fontSize: "2rem",
    position: "relative",
    top: "0",
    display: "flex",
    justifyContent: "center",
  },
  warningIconHealth: {
    color: warningColor[0],
    fontSize: "3rem",
    position: "relative",
    top: "0",
    display: "flex",
    justifyContent: "center",
  },
  dangerIconHealth: {
    color: dangerColor[0],
    fontSize: "3rem",
    position: "relative",
    top: "0",
    display: "flex",
    justifyContent: "center",
  },
  linearProgress: {
    height: "10px",
    borderRadius: "5px",
  },
  campaignDetailsWrapper: {
    display: "block",
  },
  campaignDetailsTitle: {
    color: primaryColor[0],
    fontSize: "1.25rem",
    fontWeight: "400",
    marginTop: "0",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "10px",
    borderBottom: "1px solid #e7e7e7",
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
    justifyContent: "center",
    "& span": {
      color: primaryColor[0],
      margin: "0 8px",
      fontSize: "1.25rem",
      fontWeight: "400",
    },
  },
  campaignProgressBar: {
    width: "100%",
    paddingBottom: "10px",
    borderTop: "1px solid #e7e7e7",
  },
  redemptionsProgressBar: {
    width: "100%",
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
    marginTop: "0",
    marginBottom: "0",
    "& span": {
      fontSize: "0.8rem",
      color: grayColor[0],
      marginLeft: "5px",
    },
  },
  insightLiWrapper: {
    padding: "0",
  },
  insightLI: {
    marginLeft: "0",
    paddingTop: "0",
    height: "auto",
    borderBottom: '1px solid #e7e7e7',
  },
  insightRank: {
    color: "#ffffff",
    fontSize: "0.7rem",
    fontWeight: "400",
    marginTop: "0",
    marginRight: "10px",
    marginBottom: "0",
    marginLeft: "6px",
    padding: "2px 7px",
    width: "20px",
    height: "20px",
    borderRadius: "10px",
    backgroundColor: primaryColor[0],
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
    padding: "20px",
    display: "inline-flex",
    justifyContent: "start",
    alignItems: "center",
    background: primaryColor[0],
    borderRadius: "6px",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    "& p": {
      color: "#ffffff",
      fontSize: "1.25rem",
      fontWeight: "400",
      alignItems: "center",
      marginBottom: "0",
      marginRight: "7px",
    },
    "& span": {
      color: secondaryColor[0],
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      fontWeight: "500",
      marginRight: "0.25rem",
      height: "50px",
    },
  },
  campaignTableBody: {
    display: "flex",
    justifyContent: "center",
  },
  campaignTableFooter: {
    borderTop: "1px solid #e7e7e7",
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
    fontWeight: "300",
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
    
  },
  addFundsBTN: {
    margin: "0",
    padding: "7px",
    "& p": {
      fontSize: "0.5rem !important",
      fontWeight: "400",
    },
    "& svg": {
      fontSize: "2.5rem !important",
    },
  },
  addFundsBTNLabel: {
    display: "inline-flex",
    height: "auto",
    position: "relative",
    margin: "0",
    top: "0px",
    fontSize: "0.8rem !important",
    "& p": {
      fontSize: "0.8rem !important",
    },
  },
  noActionLabel: {
    
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
    paddingTop: "10px",
    paddingBottom: "10px",
    "& li:nth-child(odd)": {
      background: "#f7f7f7"
    },
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
  cardHeaderOffset: {
    width: "100%",
    marginTop: "-25px",
    marginBottom: "10px",
  },
  cardDetailsWrapper: {
    width: "100%",
    marginBottom: "1.25rem",
  },
  cardCategoryWrapper: {
    width: "100%",
    borderBottom: "1px solid #2e4094",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: "10px",
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
    margin: "-5px 0 0 6px",
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
    width: "40px !important",
    height: "40px !important",
    backgroundColor: warningColor[0] + "!important",
    marginRight: "0 !important",
    marginBottom: "10px",
  },
  cardAvatarDetails: {
    width: "30px",
    height: "30px",
    backgroundColor: warningColor[0],
    marginRight: "10px",
    // marginLeft: "30px",
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
    border: "1px solid #e7e7e7",
    borderRadius: "6px",
    background: "#f7f7f7",
  },
  horizontalListDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
    paddingLeft: "0 !important",
    marginTop: "0",
    "& p": {
      color: "#848484",
    },
    "& span": {
      fontSize: "0.75rem",
      fontWeight: "400",
      lineHeight: "3rem",
      color: successColor[0],
    },
    "& li:nth-child(1)": {
      borderRight: "1px solid #e7e7e7",
    },
  },
  horizontalLiDiv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& h5": {
      
    },
  },
  verticalList: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "0 !important",
    // border: "1px solid #e7e7e7",
    // borderRadius: "6px",
    // background: "#f7f7f7",
  },
  verticalListDiv: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
    paddingLeft: "0 !important",
    marginTop: "20px",
    "& p": {
      color: "#848484",
    },
    "& span": {
      fontSize: "0.75rem",
      fontWeight: "400",
      lineHeight: "3rem",
      color: successColor[0],
    },
    "& li:nth-child(1)": {
      borderRight: "1px solid #e7e7e7",
    },
  },
  verticalLiDiv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& h5": {
      
    },
  },
  dashCardAutoH: {
    // height: "55vh",
    height: "auto",
  },
  campaignAutoVh: {
    height: "auto",
  },
  controls: {
    display:"flex",
    justifyContent: "end",
    position: "relative",
    bottom: "60px",
    right: "20px",
  },
  mapLegend: {
    height: "30px",
  },
  mapLegendValueList: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    padding: "0 !important",
    width: "95%",
    marginLeft: "7%",
  },
  mapLegendValueListItem: {
    paddingTop: "0",
    fontSize: "0.7rem",
  },
  mapLegendGrad: {
    padding: "0",
    height: "15px",
    width: "100%",
    background: "linear-gradient(to right, #C4F5F0 10%, #93EAE7 10% 20%, #62DDDE 20% 30%, #31C7D0 30% 40%, #00ACC1 40% 50%, #079DBA 50% 60%, #0E8FB4 60% 70%, #1483AD 70% 80%, #1B79A6 80%)",
  },
  mapLegendDesc: {
    fontSize: "0.7rem",
    margin: "0 0 0 10px",
    paddingTop: "9px",
    color: "#00ACC1",
  },
  loader: {
    width: "10px",
    height: "10px",
    margin: "40px auto",
    borderRadius: "50%",
    background: primaryColor[0],
  }
});

export default dashboardStyle;
