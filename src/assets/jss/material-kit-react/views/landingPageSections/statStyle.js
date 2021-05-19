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
  },
  advanaStat: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default productStyle;
