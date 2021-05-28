import { container } from "./../../material-kit-react";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "225px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "transparent",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  formBody: {
    display: "flex",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "10px !important",
    boxShadow: "none !important",
    borderRadius: "0 !important",
    background: "transparent !important",
    padding: "20px 0",
    marginBottom: "15px",
    borderBottom: "1px solid #e4e4e4",
    "&>h4": {
      marginBottom: "0",
      fontSize: "2rem",
      color: "#2e4094",
      "&>span": {
        color: "#68c3c8",
      },
    },
    "&>p": {
      fontSize: "1rem",
      color: "#848484",
    },
  },
  headerLogo: {
    width: "60px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0.75rem",
    border: "0",
    borderRadius: "0",
    justifyContent: "center !important",
  },
  inputIconsColor: {
    color: "#495057",
  },
  userType: {
    marginTop: "20px",
  },
  labelRoot: {
    fontSize: "0.8rem",
  }
};

export default signupPageStyle;
