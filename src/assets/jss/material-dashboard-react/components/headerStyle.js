import {
  container,
  defaultFont,
  primaryColor,
  //secondaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
} from "../../material-dashboard-react.js";

const headerStyle = () => ({
  appBar: {
    backgroundColor: "#313131 !important",
    boxShadow: "none",
    borderBottom: "1px solid #444444",
    marginBottom: "0",
    display: "flex",
    justifyContent: "start",
    position: "relative",
    width: "100%",
    paddingTop: "8px",
    padding: "0",
    zIndex: "1029",
    color: grayColor[7],
    border: "0",
    borderRadius: "0px",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
  },
  container: {
    ...container,
    minHeight: "64px",
    display: "flex",
    justifyContent: "space-between",
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    letterSpacing: "unset",
    lineHeight: "30px",
    fontSize: "1.5rem",
    fontWeight: "400",
    borderRadius: "3px",
    textTransform: "none",
    color: primaryColor[0],
    margin: "0",
    display: "flex",
    justifyContent: "start",
    width: "15vw",
  },
  appResponsive: {
    top: "8px",
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  dashboardNavHeader: {
    height: "50px",
    marginBottom: "0",
    display: "flex",
    justifyContent: "center",
    width: "65vw", 
    "& h5": {
      color: "#f3f3f3",
      fontSize: "1.5rem",
      display: "flex",
      alignItems: "center",
      margin: "0 10px",
      height: "50px",
    },
    "& span": {
      fontWeight: "400",
      marginRight: "0.25rem",
    },
    "@media (max-width: 1280px)": {
      width: "85vw", 
    },
  },
  userAvatar: {
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  userAvatarWrapper: {
    maxWidth: "60px",
    maxHeight: "60px",
    marginRight: "10px",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
  },
  userNameWrapper: {

  },
  userName: {
    height: "50px",
    width: "auto",
    paddingRight: "20px",
  },
  authBtn: {
    padding: "4px 5px",
  },
  navbar: {
    
  },
});

export default headerStyle;
