import { title } from "../../../material-kit-react.js";

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
    position: "relative",
    top: "-50px",
    "@media (min-width: 350px)": {
      top: 0,
    },
    "@media (min-width: 768px)": {
      top: 0,
      "& img": {
        width: "90vw",
      },
    },
    "@media (min-width: 992px)": {
      top: 0,
      "& img": {
        width: "90vw",
      },
    },
    "@media (min-width: 1200px)": {
      top: 0,
      "& img": {
        width: "90vw",
      },
    },
  },
  statImg: {
    width: "70%",
    "@media (min-width: 350px)": {
      width: "100%",
    },
    "@media (min-width: 768px)": {
      width: "70%",
    },
    "@media (min-width: 992px)": {
      width: "70%",
    },
    "@media (min-width: 1200px)": {
      width: "70%",
    },
  },
  advanaStat: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default productStyle;
