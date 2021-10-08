import { container, title, subtitle } from "../../material-kit-react";

const landingPageStyle = {
  container: {
    ...container,
    zIndex: "12",
    color: "#FFFFFF",
    position: "relative",
    top: "50px",
    "@media (min-width: 350px)": {
      top: "20px",
    },
    "@media (min-width: 768px)": {
      top: "50px",
    },
    "@media (min-width: 992px)": {
      top: "50px",
    },
    "@media (min-width: 1200px)": {
      top: "50px",
    },
  },
  titleSm: {
    ...title,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "0",
    minHeight: "32px",
    textDecoration: "none",
    "@media (min-width: 350px)": {
      top: "60px",
      textAlign: 'center',
    },
    "@media (min-width: 768px)": {
      width: "100%",
    },
    "@media (min-width: 992px)": {
      width: "100%",
    },
    "@media (min-width: 1200px)": {
      width: "100%",
    },
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    minHeight: "32px",
    margin: "1.25rem 0 0.875rem",
    textDecoration: "none",
    "@media (min-width: 350px)": {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      margin: "0.875rem 0",
    },
    "@media (min-width: 768px)": {
      fontSize: '2.25rem',
      lineHeight: '3rem',
    },
    "@media (min-width: 992px)": {
      fontSize: '2.25rem',
      lineHeight: '3rem',
    },
    "@media (min-width: 1200px)": {
      fontSize: '2.25rem',
      lineHeight: '3rem',
      margin: "1.25rem 0 0.875rem",
    },
  },
  subtitle: {
    ...subtitle,
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "10px 0",
    color: "#848484",
    "@media (min-width: 350px)": {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
    "@media (min-width: 768px)": {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
    "@media (min-width: 992px)": {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
    "@media (min-width: 1200px)": {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    paddingBottom: "50px",
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
    "@media (min-width: 350px)": {
      position: "relative",
      top: "30px",
    },
    "@media (min-width: 768px)": {
      width: "100%",
      top: "30px",
    },
    "@media (min-width: 992px)": {
      width: "100%",
      top: "30px",
    },
    "@media (min-width: 1200px)": {
      width: "100%",
      top: 0,
    },
  },
  heroImgSm: {
    width: "25vw",
    "@media (min-width: 350px)": {
      position: "relative",
      top: "20px",
      width: "100%",
    },
    "@media (min-width: 768px)": {
      width: "25vw",
    },
    "@media (min-width: 992px)": {
      width: "25vw",
    },
    "@media (min-width: 1200px)": {
      width: "25vw",
    },
  },
  navLogo: {
    width: "100px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    "@media (min-width: 350px)": {
      width: "100%",
    },
    "@media (min-width: 768px)": {
      width: "90%",
    },
    "@media (min-width: 992px)": {
      width: "90%",
    },
    "@media (min-width: 1200px)": {
      width: "90%",
    },
  },
  solidBtn: {
    width: "200px",
    "@media (min-width: 340px)": {
      width: "100%",
    },
    "@media (min-width: 768px)": {
      width: "200px",
    },
    "@media (min-width: 992px)": {
      width: "200px",
    },
    "@media (min-width: 1200px)": {
      width: "200px",
    },
  },
  parallaxSm: {
    height: "50vh",
    width: "100%",
  },
  eventHero: {
    display: "flex",
    justifyContent: "center",
  },
  outlineBtn: {
    width: "175px",
  },
  btnIcon: {
    marginRight: "10px",
  },
  scrollTop: {
    zIndex: "2000",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBackdrop: {
    backgroundColor: "rgba(0,0,0,0.9) !important",
  },
};

export default landingPageStyle;
