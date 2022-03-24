import { defaultFont } from "../../material-dashboard-react.js";

import tooltip from "../../material-kit-react/tooltipsStyle.js";

const footerStyle = (theme) => ({
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "10px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  left: {
    width: "50vw",
    float: "left",
    display: "block",
  },
  right: {
    width: "50vw",
    padding: "15px 0",
    margin: "0",
    justifyContent: "flex-end",
    display: "flex",
    height: "40px",
    top: "10px",
    "@media (min-width: 350px)": {
      display: "flex",
      position: "relative",
      height: "20px",
      top: "0",
      width: "100%"
    },
    "@media (min-width: 768px)": {
      display: "flex",
      height: "40px",
      top: "10px",
    },
    "@media (min-width: 992px)": {
      display: "flex",
      height: "40px",
      top: "10px",
    },
    "@media (min-width: 1200px)": {
      display: "flex",
      height: "40px",
      top: "10px",
    },
  },
  footer: {
    height: "auto",
    width: "100%",
    position: "relative",
    display: "flex",
    overflow: "visible",
    justifyContent: "space-between",
    backgroundImage:
      "radial-gradient(circle, rgba(53,113,191,1) 0%, rgba(46,64,148,1) 70%, rgba(22,32,75,1) 100%)",
    textAlign: "center",
    padding: "30px",
    "@media (min-width: 350px)": {
      padding: "20px",
    },
    "@media (min-width: 768px)": {
      padding: "30px",
    },
    "@media (min-width: 992px)": {
      padding: "30px",
    },
    "@media (min-width: 1200px)": {
      padding: "30px",
    },
  },
  a: {
    color: "#4db8be",
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerA: {
    color: "#4db8be",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&:hover": {
      color: "#2e4094",
    }
  },
  footerBtn: {
    color: "#f7f7f7"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  container: {
    width: "100%",
    justifyContent: "space-between",
    margin: "0",
    padding: "20px 0",
    borderTop: "1px solid #2e4094",
    borderBottom: "1px solid #2e4094",
    display: "flex",
    "@media (min-width: 350px)": {
      display: "inline-block",
    },
    "@media (min-width: 768px)": {
      display: "flex",
    },
    "@media (min-width: 992px)": {
      display: "flex",
    },
    "@media (min-width: 1200px)": {
      display: "flex",
    },
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    [theme.breakpoints.down('md')]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
    margin: "0 25px",
    "@media (min-width: 350px)": {
      margin: "0",
    },
    "@media (min-width: 768px)": {
      margin: "0 25px",
    },
    "@media (min-width: 992px)": {
      margin: "0 25px",
    },
    "@media (min-width: 1200px)": {
      margin: "0 25px",
    },
  },
  listItemText: {
    padding: "0 !important",
    display: "inline-flex",
  },
  listItemActive: {
    position: "relative",
    margin: "0 25px",
    paddingRight: "0",
    "& span:nth-child(1)": {
      color: "#00acc1 !important",
      fontWeight: "500",
      // borderBottom: "2px solid #00acc1"
    },
    "@media (min-width: 350px)": {
      
    },
    "@media (min-width: 768px)": {
      
    },
    "@media (min-width: 992px)": {
      
    },
    "@media (min-width: 1200px)": {
      
    },
  },
  navLink: {
    color: "#848484",
    backgroundColor: "transparent",
    position: "relative",
    padding: "0.5rem",
    fontWeight: "300",
    fontSize: "0.8125rem",
    textTransform: "uppercase",
    borderRadius: "0",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "secondary",
      fontWeight: "700",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down('md')]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  customDropdown: {
    color: "#f7f7f7",
    backgroundColor: "transparent",
    position: "relative",
    fontWeight: "400",
    fontSize: "0.8125rem",
    fontFamily: "Roboto",
    textTransform: "uppercase",
    borderRadius: "0",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    width: "100%",
    display: "inline-flex",
    padding: "4px 5px",
    "&:hover,&:focus": {
      color: "#00acc1",
      fontWeight: "400",
      backgroundColor: "rgba(48, 63, 159, 0.04)",
    },
    "& > ul": {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
    [theme.breakpoints.down('md')]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "center",
      },
    },
  },
  dropdownLink: {
    color: "#848484",
    backgroundColor: "transparent",
    position: "relative",
    fontWeight: "400",
    fontSize: "0.8125rem",
    fontFamily: "Roboto",
    textTransform: "uppercase",
    borderRadius: "0",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    width: "100%",
    display: "inline-flex",
    padding: "4px 5px",
    "&:hover,&:focus": {
      color: "#00acc1",
      fontWeight: "400",
      backgroundColor: "rgba(48, 63, 159, 0.04)",
    },
    [theme.breakpoints.down('md')]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "center",
      },
    },
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px",
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "300",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "16px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: "secondary",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
  navBarBox: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
  },
  adminBtn: {
    position: "relative",
    right: "0",
  },
  btnIcon: {
    marginRight: "10px",
  },
  footerNav: {
    justifyContent: "center",
    width: "75vw",
    display: "inline-flex",
    "& button": {
      color: "#e7e7e7",
      width: "100%",
    } ,
    "@media (min-width: 350px)": {
      width: "100%",
      height: "auto",
      position: "relative",
      left: "0",
      display: "block",
    },
    "@media (min-width: 768px)": {
      display: "inline-flex",
    },
    "@media (min-width: 992px)": {
      display: "inline-flex",
    },
    "@media (min-width: 1200px)": {
      display: "inline-flex",
    },
  },
  footerNavUL: {
    width: "auto",
    display: "flex",
    flexWrap: "nowrap",
    "& li": {
      paddingRight: "0",
    },
    "@media (min-width: 350px)": {
      width: "auto",
      display: "flex",
      flexWrap: "wrap",
    },
    "@media (min-width: 768px)": {
      width: "auto",
      display: "flex",
      flexWrap: "nowrap",
    },
    "@media (min-width: 992px)": {
      width: "auto",
      display: "flex",
      flexWrap: "nowrap",
    },
    "@media (min-width: 1200px)": {
      width: "auto",
      display: "flex",
      flexWrap: "nowrap",
    },
  },
  footerLogo: {
    width: "40px",
    "& img": {
      width: "40px",
      position: "relative",
      left: "0",
      top: "0",
      margin: "0",
    },
  },
});
export default footerStyle;
