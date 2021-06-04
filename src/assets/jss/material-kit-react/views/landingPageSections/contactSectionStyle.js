import { title, container } from "../../../material-kit-react.js";

const contactStyle = {
  container: {
    ...container,
    "& .contactGrid": {
      display: "flex",
      justifyContent: "space-evenly",
      width: "100%",
    },
  },
  section: {
    padding: "0 0 70px 0",
  },
  title: {
    ...title,
    marginBottom: "20px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  subtitle: {
    color: "#848484",
    textAlign: "center",
    width: "100%",
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  contactGrid: {
    borderTop: "1px solid #e4e4e4",
  },
  actionBtn: {
    width: "250px",
  },
  contactBtns: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 100px",
  },
};

export default contactStyle;
