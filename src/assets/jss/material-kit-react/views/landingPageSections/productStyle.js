import { title, container } from "../../../../../assets/jss/material-kit-react.js";
import imagesStyle from "../../../material-kit-react/imagesStyles.js";

import backgroundIMGdooh from "../../../../../assets/img/advana-io-bg-dooh-01.jpg";
import backgroundIMG2 from "../../../../../assets/img/advana-io-bg-02.jpg";

const productStyle = {
  section: {
    padding: "50px 0",
  },
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
      left: "-23px",
      padding: "0",
    },
    "@media (min-width: 768px)": {
      padding: "30px",
      left: "-53px",
      width: "100vw",
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
  doohBG: {
    backgroundImage: `url(${backgroundIMGdooh})`,
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    left: "-96.5px",
    overflow: "hidden",
    padding: "50px",
    "@media (min-width: 350px)": {
      left: "-23px",
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
    minHeight: "1.65rem",
    margin: "1.25rem 0 0.25rem",
    textDecoration: "none",
    "@media (min-width: 350px)": {
      margin: "1.25rem 0 0.25rem",
      fontSize: '1.65rem',
      lineHeight: '2rem',
    },
    "@media (min-width: 768px)": {
      margin: "1.25rem 0 0.25rem",
      fontSize: '2.25rem',
      lineHeight: '1.25em',
    },
    "@media (min-width: 992px)": {
      margin: "1.25rem 0 0.25rem",
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
    },
    "@media (min-width: 1200px)": {
      margin: "1.25rem 0 0.25rem",
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
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
      fontSize: '1.2rem',
      lineHeight: '1.5rem',
    },
    "@media (min-width: 992px)": {
      fontSize: '1.2rem',
      lineHeight: '1.5rem',
    },
    "@media (min-width: 1200px)": {
      fontSize: '1.2rem',
      lineHeight: '1.5rem',
    },
  },
  subHeader: {
    color: "#4db8be",
    marginTop: "0",
    marginBottom: "1.5rem",
    fontWeight: "400",
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    "@media (min-width: 350px)": {
      fontSize: '1.3rem',
      lineHeight: '1.5rem',
    },
    "@media (min-width: 768px)": {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
    },
    "@media (min-width: 992px)": {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
    },
    "@media (min-width: 1200px)": {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
    },
  },
  productBullets: {
    marginTop: "1.75rem",
    color: "#848484",
    "& h3": {
      color: "#2e4094",
      fontWeight: "400",
      "@media (min-width: 350px)": {
        fontSize: '1.3rem',
        lineHeight: '1.5rem',
      },
      "@media (min-width: 768px)": {
        
      },
      "@media (min-width: 992px)": {
        
      },
      "@media (min-width: 1200px)": {
        
      },
    },
    "& p": {
      fontSize: "1.2rem",
      lineHeight: "1.5rem",
      "@media (min-width: 350px)": {
        fontSize: '1rem',
        lineHeight: '1.25rem',
      },
      "@media (min-width: 768px)": {
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
      },
      "@media (min-width: 992px)": {
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
      },
      "@media (min-width: 1200px)": {
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
      },
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
    "@media (min-width: 350px)": {
      width: "100%",
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
  verifiedBadgeWrapper: {
    width: "100px",
    height: "100px",
    margin: "0",
    "@media (min-width: 350px)": {
      margin: "0 auto",
    },
    "@media (min-width: 768px)": {
      margin: "0",
    },
    "@media (min-width: 992px)": {
      margin: "0",
    },
    "@media (min-width: 1200px)": {
      margin: "0",
    },
  },
  verifiedBadge: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "start",
    margin: "0",
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
    marginTop: "40px",
    "@media (min-width: 350px)": {
      marginTop: "20px",
    },
    "@media (min-width: 768px)": {
      marginTop: "40px",
    },
    "@media (min-width: 992px)": {
      marginTop: "40px",
    },
    "@media (min-width: 1200px)": {
      marginTop: "40px",
    },
  },
  listVerifiedWrapper: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "30px",
  },
  listVerified: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    marginBottom: "20px",
    "@media (min-width: 350px)": {
      marginBottom: "20px",
    },
    "@media (min-width: 768px)": {
      marginBottom: "20px",
    },
    "@media (min-width: 992px)": {
      marginBottom: "20px",
    },
    "@media (min-width: 1200px)": {
      marginBottom: "20px",
    },
  },
  listItemVerified: {
    width: "325px",
    "@media (min-width: 350px)": {
      width: "325px",
    },
    "@media (min-width: 768px)": {
      width: "320px",
    },
    "@media (min-width: 992px)": {
      width: "325px",
    },
    "@media (min-width: 1200px)": {
      width: "325px",
    },
  },
  listItemIcon: {
    fontSize: "2rem",
  },
  listItemText: {
    fontFamily: `"Roboto", sans-serif`,
    fontSize: "1rem",
    fontWeight: "300",
    color: "#848484",
    "& span": {
      fontSize: "1rem",
      "@media (min-width: 350px)": {
        fontSize: "1rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "1rem",
      },
      "@media (min-width: 992px)": {
        fontSize: "1rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "1rem",
      },
    },   
  },
  sectionBoxWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  sectionBox: {
    width: "47%",
    marginRight: "30px",
    "@media (min-width: 350px)": {
      width: "100%",
      marginRight: "0",
    },
    "@media (min-width: 768px)": {
      width: "100%",
      marginRight: "0",
    },
    "@media (min-width: 992px)": {
      width: "90vw",
      marginRight: "30px",
    },
    "@media (min-width: 1200px)": {
      width: "47%",
      marginRight: "30px",
    },
  },
};

export default productStyle;
