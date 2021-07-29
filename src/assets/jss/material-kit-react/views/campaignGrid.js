import { container, title, subtitle } from "../../material-kit-react";

const clientPageStyle = {
  root: {
    maxWidth: 345,
    marginTop: "40px",
    marginBottom: "40px",
    background: "#f4f4f4",
  },
  container: {
    ...container,
    zIndex: "12",
    color: "#FFFFFF",
    position: "relative",
    top: "50px",
    paddingBottom: "50px",
  },
  heroContainer: {
    zIndex: "12",
    color: "#FFFFFF",
    position: "relative",
    top: "0",
    paddingBottom: "0",
  },
  MuiCardActionArea: {
    "&:hover": {
      hover: "0.5",
    },
  },
  title: {
    ...title,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  titleMid: {
    ...title,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "25%",
    minHeight: "32px",
    textDecoration: "none",
  },
  subtitle: {
    ...subtitle,
    fontSize: "1.2rem",
    maxWidth: "100%",
    margin: "10px 0",
    color: "#848484",
    display: "flex",
    justifyContent: "center",
    padding: "0 0 20px 0",
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
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
  },
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
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
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
  selectFilter: {
    width: "200px",
  },
  filterInputs: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  }
};

export default clientPageStyle;
