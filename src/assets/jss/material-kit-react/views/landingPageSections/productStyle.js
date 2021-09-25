import { title } from "../../../../../assets/jss/material-kit-react.js";
import imagesStyle from "../../../material-kit-react/imagesStyles.js";

// Import Images
import backgroundIMG2 from "../../../../../assets/img/advana-io-bg-02.jpg";

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
    width: "100%",
    paddingLeft: "50px", 
    textAlign: "left",
    "@media (min-width: 350px)": {
      paddingLeft: "0",
    },
    "@media (min-width: 768px)": {
    },
    "@media (min-width: 992px)": {
    },
    "@media (min-width: 1200px)": {
    },
  },
  formHeader: {
    ...title,
    marginBottom: "30px",
    marginTop: "20px",
    minHeight: "20px",
    textDecoration: "none",
    textAlign: "center",
    padding: "0 0 20px 0",
    borderBottom: "1px solid #e7e7e7",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  subtitle: {
    color: "#848484",
    textAlign: "left",
    maxWidth: "700px",
    paddingLeft: "50px",
    "& span": {
      fontSize: "0.8rem",
    },
    "@media (min-width: 350px)": {
      paddingLeft: "0",
    },
    "@media (min-width: 768px)": {
    },
    "@media (min-width: 992px)": {
    },
    "@media (min-width: 1200px)": {
    },
  },
  bulletTitle: {
    color: "#2e4094",
    fontWeight: "400",
    padding: "0 0 0 30px",
    height: "40px",
    "@media (min-width: 350px)": {
      paddingLeft: "0",
      height: "auto",
      fontSize: "1.25rem",
    },
    "@media (min-width: 768px)": {
    },
    "@media (min-width: 992px)": {
    },
    "@media (min-width: 1200px)": {
    },
  },
  bulletBody: {
    padding: "0 0 0 30px",
    "@media (min-width: 350px)": {
      paddingLeft: "0",
    },
    "@media (min-width: 768px)": {
    },
    "@media (min-width: 992px)": {
    },
    "@media (min-width: 1200px)": {
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
      position: "relative",
      top: '60px'
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
  heroImgSm: {
    width: "25vw",
    "@media (min-width: 350px)": {
      position: "relative",
      top: '60px',
      width: "100%",
    },
    "@media (min-width: 768px)": {
      width: "25vw",
    },
    "@media (min-width: 992px)": {
      width: "25vw",
    },
    "@media (min-width: 1200px)": {
      width: "25vw",
    },
  },
  sectionImg: {
    width: "100%",
    "@media (min-width: 350px)": {
      position: "relative",
      top: '0'
    },
    "@media (min-width: 768px)": {
      width: "100%",
      padding: "0",
    },
    "@media (min-width: 992px)": {
      width: "100%",
    },
    "@media (min-width: 1200px)": {
      width: "100%",
    },
  },
  textLink: {
    fontWeight: "bold",
    color: "#2e4094",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#4db8be",
    },
  },
  badgePro: {
    color: "#fff",
    backgroundColor: "#2e4094",
    padding: "5px 8px",
    borderRadius: "10px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "50px",
    marginTop: "30px",
    "@media (min-width: 350px)": {
      marginLeft: "0",
    },
    "@media (min-width: 768px)": {
      marginLeft: "50px",
    },
    "@media (min-width: 992px)": {
      marginLeft: "50px",
    },
    "@media (min-width: 1200px)": {
      marginLeft: "50px",
    },
  },
  solidBtn: {
    width: "200px",
    marginLeft: "50px",
    "@media (min-width: 350px)": {
      width: "100%",
      marginLeft: "0",
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBackdrop: {
    backgroundColor: "rgba(0,0,0,0.9) !important",
  },
  campaignsSection: {
    backgroundImage: `url(${backgroundIMG2})`,
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    padding: "50px 100px",
    left: "-96.5px",
    "@media (min-width: 350px)": {
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 768px)": {
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 992px)": {
      padding: "30px",
      left: "-96.5px",
    },
    "@media (min-width: 1200px)": {
      padding: "50px 100px",
      left: "-96.5px",
    },
  },
  retailSection: {
    backgroundImage: `url(${backgroundIMG2})`,
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    padding: "100px",
    left: "-96.5px",
    "@media (min-width: 350px)": {
      width: "100vw",
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 768px)": {
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 992px)": {
      padding: "30px",
      left: "-96.5px",
    },
    "@media (min-width: 1200px)": {
      padding: "100px",
      left: "-96.5px",
    },
  },
  productsSection: {
    padding: "100px 50px",
    "@media (min-width: 350px)": {
      padding: "20px",
    },
    "@media (min-width: 768px)": {
      padding: "30px 50px",
    },
    "@media (min-width: 992px)": {
      padding: "100px 50px",
    },
    "@media (min-width: 1200px)": {
      padding: "100px 50px",
    },
  },
  categorySection: {
    padding: "100px 50px",
    "@media (min-width: 350px)": {
      width: "100%",
      padding: "20px 0",
    },
    "@media (min-width: 768px)": {
      padding: "30px 50px",
    },
    "@media (min-width: 992px)": {
      padding: "100px 50px",
    },
    "@media (min-width: 1200px)": {
      padding: "100px 50px",
    },
  },
  audienceSection: {
    padding: "50px 100px",
    width: "100vw",
    "@media (min-width: 350px)": {
      padding: "20px 0",
      position: "relative",
      left: "-18px",
      width: "90vw",
    },
    "@media (min-width: 768px)": {
      padding: "30px 50px",
    },
    "@media (min-width: 992px)": {
      padding: "100px 50px",
    },
    "@media (min-width: 1200px)": {
      padding: "50px 100px",
      width: "100vw",
      position: "relative",
      left: "-92.5px"
    },
  },
  caseSection: {
    backgroundImage: `url(${backgroundIMG2})`,
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    padding: "50px 100px",
    left: "-96.5px",
    "@media (min-width: 350px)": {
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 768px)": {
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 992px)": {
      padding: "30px",
      left: "-96.5px",
    },
    "@media (min-width: 1200px)": {
      padding: "50px 100px",
      left: "-96.5px",
    },
  },
  trendSection: {
    backgroundImage: `url(${backgroundIMG2})`,
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    padding: "50px",
    left: "-96.5px",
    "@media (min-width: 350px)": {
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 768px)": {
      padding: "20px",
      left: "-35px",
    },
    "@media (min-width: 992px)": {
      padding: "30px",
      left: "-96.5px",
    },
    "@media (min-width: 1200px)": {
      padding: "50px 100px",
    },
  },
  optimizeSection: {
    padding: "100px 50px",
    "@media (min-width: 350px)": {
      padding: "20px",
      position:"relative",
      width: "100vw",
      left: '-35px',
    },
    "@media (min-width: 768px)": {
      padding: "30px 50px",
    },
    "@media (min-width: 992px)": {
      padding: "100px 50px",
    },
    "@media (min-width: 1200px)": {
      padding: "100px 50px",
    },
  },
  zombieSection: {
    padding: "100px 50px",
    "@media (min-width: 350px)": {
      padding: "20px",
      position: "relative",
      left: "-35px",
      width: "100vw"
    },
    "@media (min-width: 768px)": {
      padding: "30px 50px",
    },
    "@media (min-width: 992px)": {
      padding: "100px 50px",
    },
    "@media (min-width: 1200px)": {
      padding: "100px 50px",
    },
  },
  impressionsSection: {
    padding: "100px 50px",
    "@media (min-width: 350px)": {
      padding: "20px",
      width: "90vw",
      position: "relative",
      left: "-18px",
    },
    "@media (min-width: 768px)": {
      padding: "30px 50px",
    },
    "@media (min-width: 992px)": {
      padding: "100px 50px",
    },
    "@media (min-width: 1200px)": {
      padding: "100px 50px",
    },
  },
  inventorySection: {
    backgroundImage: `url(${backgroundIMG2})`,
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    padding: "50px 100px",
    left: "-96.5px",
    "@media (min-width: 350px)": {
      padding: "40px",
      position: 'relative',
      left: "-35px",
      width: "100vw",
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
      padding: "50px 100px",
    },
  },
  returnsSection: {
    padding: "100px 50px",
    "@media (min-width: 350px)": {
      padding: "40px",
      position: "relative",
      left: "-35px",
      width: "100vw"
    },
    "@media (min-width: 768px)": {
      padding: "30px 50px",
    },
    "@media (min-width: 992px)": {
      padding: "100px 50px",
    },
    "@media (min-width: 1200px)": {
      padding: "100px 50px",
    },
  },
  intelligenceSection: {
    backgroundImage: `url(${backgroundIMG2})`,
    backgroundSize: "cover",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    padding: "50px 100px",
    left: "-96.5px",
    "@media (min-width: 350px)": {
      padding: "40px",
      position: 'relative',
      left: "-35px",
      width: "100vw",
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
      padding: "50px 100px",
    },
  },
  formLogoWrapper: {
    padding: "25px",
    display: "flex",
    justifyContent: "center",
  },
  formLogoImg: {
    width: "70px",
  },
};

export default productStyle;
