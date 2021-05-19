import { container, title } from "assets/jss/material-kit-react";

const landingPageStyle = {
  container: {
    ...container,
    zIndex: "12",
    color: "#FFFFFF",
    position: "relative",
    top: "50px",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.2rem",
    maxWidth: "475px",
    margin: "10px 0",
    color: "#848484",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  // heroWrapper: {
  //   display: "flex",
  //   justifyContent: "space-evenly",
  // },
  heroImg: {
    width: "100%",
  },
  navLogo: {
    width: "100px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
  },
  solidBtn: {
    width: "175px",
  },
  outlineBtn: {
    width: "175px",
  },
};

export default landingPageStyle;
