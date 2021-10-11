import { container } from "./../../material-kit-react";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    color: "#FFFFFF",
    position: "relative",
    paddingTop: "40px",
    paddingBottom: "10px",
  },
  headerFont: {
    fontSize: "2.25rem",
    fontFamily: "Appetite",
    display: "flex",
    justifyContent: "center",
  },
  headerFontSm: {
    fontSize: "2rem",
    fontFamily: "Appetite",
    display: "flex",
    justifyContent: "center",
  },
  subHeader: {
    fontSize: "1.25rem",
    fontWeight: "500",
    lineHeight: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  mainLogo: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    margin: "0 auto",
  },
  cardQrWrapper: {
    width: "80%",
    margin: "20px auto",
  },
  cardQrBody: {
    padding: "1rem 0",
  },
  santikosLogoColor: {
    width: "100px",
    display: "flex",
    position: "relative",
    margin: "0 auto",
  },
  santikosQR: {
    width: "200px",
    display: "flex",
    position: "relative",
    margin: "0 auto",
  },
  promoImg: {
    width: "300px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    margin: "10px auto",
    paddingTop: '10px',
  },
  santikosForm: {
    marginTop: "20px",
  },
  santikosGoogleBTN: {
    width: "80%",
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px auto auto",
    background: "#000000",
    outline: "none",
    border: "1px solid #fff",
    borderRadius: "4px",
    color: "#ffffff",
    fontWeight: "600",
    "& a:focus": {
        background: "#000000",
        color: "#e7e7e7 !important",
    },
  },
  santikosBtnIcon: {
    height: "20px",
    marginRight: "10px",
  },
  finePrint: {
    fontSize: "0.7rem",
    lineHeight: "0.9rem",
    marginTop: "20px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "transparent",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  formBody: {
    display: "flex",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "10px !important",
    boxShadow: "none !important",
    borderRadius: "0 !important",
    background: "transparent !important",
    padding: "20px 0",
    marginBottom: "15px",
    borderBottom: "1px solid #e4e4e4",
    "&>h4": {
      marginBottom: "0",
      fontSize: "2rem",
      color: "#2e4094",
      "&>span": {
        color: "#68c3c8",
      },
    },
    "&>p": {
      fontSize: "1rem",
      color: "#848484",
    },
  },
  headerLogo: {
    width: "60px",
  },
  promoLogo: {
    width: "90%",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardBody: {
    margin: "0 1.25rem 0 1.25rem !important",
  },
  cardFooter: {
    paddingTop: "0.75rem",
    border: "0",
    borderRadius: "0",
    justifyContent: "center !important",
  },
  inputIconsColor: {
    color: "#495057",
  },
  userType: {
    marginTop: "20px",
  },
  labelRoot: {
    fontSize: "0.8rem",
  }
};

export default signupPageStyle;
