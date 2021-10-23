import { defaultFont } from "../../material-kit-react.js";
import tooltip from "../../material-kit-react/tooltipsStyle.js";

const headerLinksStyle = () => ({
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
    padding: "0",
    margin: "0 25px",
    "@media (min-width: 350px)": {
      margin: "0",
      padding: "10px",
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
  },
  headerLink: {
    "&:hover,&:focus": {
      color: "#00acc1",
      fontWeight: "400",
      backgroundColor: "rgba(48, 63, 159, 0.04)",
    },
  },
  customDropdown: {
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
    "& > ul": {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
    "& button span": {
      justifyContent: "flex-start",
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
  headerNav: {
    justifyContent: "center",
    width: "75vw",
    height: "50px",
    display: "inline-flex",
    "& button": {
      width: "100%",
      marginLeft: "0",
    },
    "& li": {
      borderBottom: "1px solid transparent",
      "@media (min-width: 350px)": {
        width: "100%",
        margin: "10px 0",
        borderBottom: "1px solid #e7e7e7",
      },
      "@media (min-width: 768px)": {
        borderBottom: "1px solid transparent",
      },
      "@media (min-width: 992px)": {
        borderBottom: "1px solid transparent",
      },
      "@media (min-width: 1200px)": {
        borderBottom: "1px solid transparent",
      },
    },
    "@media (min-width: 350px)": {
      width: "100%",
      height: "100%",
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBackdrop: {
    backgroundColor: "rgba(0,0,0,0.9) !important",
  },
});

export default headerLinksStyle;
