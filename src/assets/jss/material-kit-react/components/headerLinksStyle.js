import { defaultFont } from "assets/jss/material-kit-react.js";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = (theme) => ({
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
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
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
  },
  listItemText: {
    padding: "0 !important",
    display: "inline-flex",
  },
  navLink: {
    color: "#848484",
    backgroundColor: "transparent",
    position: "relative",
    padding: "0.5rem",
    fontWeight: "300",
    fontSize: "12px",
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
    [theme.breakpoints.down("sm")]: {
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
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
    },
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
  headerNav: {
    width: "90vw",
    display: "inline-flex",
    justifyContent: "center",
  },
});

export default headerLinksStyle;
