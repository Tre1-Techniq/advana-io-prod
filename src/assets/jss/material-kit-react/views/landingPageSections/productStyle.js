import { title } from "../../../../../assets/jss/material-kit-react.js";
import imagesStyle from "../../../material-kit-react/imagesStyles.js";

import backgroundIMG2 from "../../../../../assets/img/advana-io-bg-02.jpg";

const productStyle = {
  section: {
    padding: "50px 0",
  },
  sectionBG: {
    padding: "0 50px",
    "@media (min-width: 350px)": {
      padding: "30px",
    },
    "@media (min-width: 768px)": {
      padding: "30px",
    },
    "@media (min-width: 992px)": {
      padding: "50px",
    },
    "@media (min-width: 1200px)": {
      padding: "0 50px",
    },
  },
  campaignsBG: {
    backgroundImage: `url(${backgroundIMG2})`,
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    left: "-96.5px",
    overflow: "hidden",
    padding: "50px",
    "@media (min-width: 350px)": {
      left: "-35px",
      padding: "0",
    },
    "@media (min-width: 768px)": {
      padding: "30px",
      left: "-96.5px",
    },
    "@media (min-width: 992px)": {
      padding: "30px",
      left: "-96.5px",
    },
    "@media (min-width: 1200px)": {
      padding: "50px",
      left: "-96.5px",
    },
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
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
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  subtitle: {
    color: "#848484",
    textAlign: "left",
    maxWidth: "600px",
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
  solidBtn: {
    width: "200px",
    margin: "1.25rem 0",
    "@media (min-width: 350px)": {
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
  btnIcon: {
    marginRight: "10px",
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
  verifiedBadge: {
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "start",
    margin: "0 auto",
    "@media (min-width: 350px)": {
      
    },
    "@media (min-width: 768px)": {

    },
    "@media (min-width: 992px)": {
      
    },
    "@media (min-width: 1200px)": {
      
    },
  },
  badgePro: {
    color: "#fff",
    backgroundColor: "#2e4094",
    padding: "5px 8px",
    borderRadius: "10px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBackdrop: {
    backgroundColor: "rgba(0,0,0,0.9) !important",
  },
  caseStudyImg: {
    width: "100%",
    marginTop: "80px",
  },
};

export default productStyle;
