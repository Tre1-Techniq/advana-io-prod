import {
  drawerWidth,
  transition,
  container,
} from "../../material-dashboard-react.js";

const appStyle = (theme) => ({
  formContainer: {
    position: 'relative',
    top: '75px',
    width: '400px',
    margin: '0 auto',
    backgroundColor: 'rgba(255,255,255,0.25)',
    border: '1px solid #e4e4e4',
    borderRadius: '6px',
    boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.25)",
  },
  formHeader: {
    height: '135px',
    backgroundColor: '#e4e4e4',
  },
  formWrapper: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      width: '60px',
      height: '60px',
      position: 'absolute',
      margin: '20px auto',
    },
    '& h3': {
      position: 'relative',
      top: '70px',
      color: '#2e4094',
    },
    '& span': {
      color: '#68c3c8',
    },
  },
  formInput: {
    width: '90%',
    margin: '10px 20px',
  },
  formButton: {
    width: '90%',
    margin: '50px 20px 10px 20px',
  },
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      overflow: 'hidden',
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    background: "#313131 !important",
  },
  content: {
    marginTop: "0",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container,
  map: {
    marginTop: "70px",
  },
});

export default appStyle;
