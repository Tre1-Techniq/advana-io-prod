import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    paddingBottom: "70px",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  teamGrid: {
    borderRight: "1px solid #e4e4e4 !important",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle: {
    ...cardTitle,
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    fontWeight: "400 !important",
  },
  smallTitle: {
    color: "#848484",
  },
  description: {
    color: "#999",
    fontSize: "0.8rem",
    lineHeight: "1rem",
  },
  justifyCenter: {
    justifyContent: "center !important",
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
  margin5: {
    margin: "5px",
  },
  grid: {
    borderRight: "1px solid #e4e4e4",
  },
  teamCard: {
    display: "flex",
  },
  tooltip: {
    height: "50px",
    position: "relative",
    bottom: "0",
  },
};

export default teamStyle;
