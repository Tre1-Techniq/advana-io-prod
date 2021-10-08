import { title, container } from "../../../material-kit-react.js";

const contactStyle = {
  container: {
    ...container,
  },
  section: {
    padding: "50px 0 100px 0",
    "@media (min-width: 350px)": {
      padding: "0 0 50px 0",
    },
    "@media (min-width: 768px)": {
      padding: "50px 0 100px 0",
    },
    "@media (min-width: 992px)": {
      padding: "50px 0 100px 0",
    },
    "@media (min-width: 1200px)": {
      padding: "50px 0 100px 0",
    },
  },
  title: {
    ...title,
    marginBottom: "20px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    "@media (min-width: 350px)": {
      marginBottom: "1rem",
      marginTop: "1rem",
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
    "@media (min-width: 768px)": {
      marginBottom: "1rem",
      marginTop: "1rem",
      fontSize: '2.25rem',
      lineHeight: '3rem',
    },
    "@media (min-width: 992px)": {
      marginBottom: "1rem",
      marginTop: "1rem",
      fontSize: '2.25rem',
      lineHeight: '3rem',
    },
    "@media (min-width: 1200px)": {
      marginBottom: "1rem",
      marginTop: "1rem",
      fontSize: '2.25rem',
      lineHeight: '3rem',
    },
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
    width: "200px",
  },
  contactBtns: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 100px",
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

export default contactStyle;
