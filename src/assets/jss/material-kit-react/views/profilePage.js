import { container, gridContainer, title, adminTitle } from "../../../../assets/jss/material-kit-react.js";

import imagesStyle from "../../../../assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container,
  gridContainer,
  profile: {
    textAlign: "center",
    marginBottom: "40px",
    borderBottom: "1px solid #e7e7e7",
    "& img": {
      maxWidth: "50px",
      width: "100%",
      margin: "0 auto",
    },
    "& h6": {
      margin: "0 0 15px 0",
    },
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  name: {
    marginTop: "5px",
    "& h3": {
      margin: "0",
    },
  },
  ...imagesStyle,
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
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  adminTitle: {
    ...adminTitle,
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
};

export default profilePageStyle;
