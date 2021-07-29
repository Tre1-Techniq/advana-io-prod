import { title } from "../../../../../assets/jss/material-kit-react.js";
import imagesStyle from "../../../material-kit-react/imagesStyles.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  subtitle: {
    color: "#848484",
    textAlign: "left",
    maxWidth: "600px",
  },
  description: {
    color: "#999",
  },
  advanaStatBox: {
    display: "flex",
    justifyContent: "space-between",
    "& > img": {
      width: "75%",
    },
  },
  advanaStatGrid: {
    margin: "0 10vw",
  },
  advanaStat: {
    display: "flex",
    justifyContent: "space-between",
  },
  heroImg: {
    width: "100%",
  },
  textLink: {
    fontWeight: "bold",
    color: "#2e4094",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  badgePro: {
    color: "#fff",
    backgroundColor: "#2e4094",
    padding: "5px 8px",
    borderRadius: "10px",
  }
};

export default productStyle;
