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
    width: "90vw",
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
    display: "flex",
    justifyContent: "center",
    "@media (min-width: 350px)": {
      padding: "10px",
      width: "90vw",
    },
    "@media (min-width: 768px)": {
      padding: "30px 100px",
    },
    "@media (min-width: 992px)": {
      padding: "30px 100px",
    },
    "@media (min-width: 1200px)": {
      padding: "10px",
      width: "250px",
      display: "flex",
      justifyContent: "center",
    },
  },
  contactBtn: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 100px",
    "@media (min-width: 350px)": {
      padding: "30px",
      width: "90vw",
    },
    "@media (min-width: 768px)": {
      padding: "30px 100px",
    },
    "@media (min-width: 992px)": {
      padding: "30px 100px",
    },
    "@media (min-width: 1200px)": {
      padding: "30px 100px",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBackdrop: {
    backgroundColor: "rgba(0,0,0,0.9) !important",
  },
  contactSection: {
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    left: "-96.5px",
    overflow: "hidden",
    padding: "50px 100px",
    "@media (min-width: 350px)": {
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 768px)": {
      padding: "30px 50px",
    },
    "@media (min-width: 992px)": {
      padding: "100px 50px",
    },
    "@media (min-width: 1200px)": {
      padding: "50px 100px",
      position: "relative",
      left: "-75px",
    },
  },
};

export default contactStyle;
