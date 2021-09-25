import { container, title, subtitle } from "../../material-kit-react";

const campaingGridStyle = {
  root: {
    maxWidth: 345,
    marginTop: "40px",
    marginBottom: "40px",
    background: "#f4f4f4",
  },
  container: {
    ...container,
    zIndex: "12",
    color: "#FFFFFF",
    position: "relative",
    top: "50px",
    paddingBottom: "50px",
  },
  heroContainer: {
    zIndex: "12",
    color: "#FFFFFF",
    position: "relative",
    top: "0",
    paddingBottom: "0",
  },
  title: {
    ...title,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  titleMid: {
    ...title,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "25%",
    minHeight: "32px",
    textDecoration: "none",
  },
  subtitle: {
    ...subtitle,
    fontSize: "1.2rem",
    maxWidth: "100%",
    margin: "10px 0",
    color: "#848484",
    display: "flex",
    justifyContent: "center",
    padding: "0 0 20px 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
  },
  heroImg: {
    width: "100%",
  },
  navLogo: {
    width: "100px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
  },
  loadMore: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    padding: "0 20px",
    margin: "20px auto",
    "& span": {
      fontSize: "0.75rem",
    },
  },
  headerBtnWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  outlineBtn: {
    width: "175px",
  },
  btnIcon: {
    marginRight: "10px",
  },
  scrollTop: {
    zIndex: "2000",
  },
  selectFilter: {
    width: "200px",
  },
  filterInputs: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  filterWrapper: {
    backgroundColor: "#fafafa",
    borderTop: "1px solid #e7e7e7",
    borderBottom: "1px solid #e7e7e7",
    height: "auto",
    padding: "0",
    display: "flex",
    justifyContent: "center",
  },
  filterContainer: {
    width: "100%",
    display: "flex",
    flexWrap: 'wrap',
    margin: "0 0 10px 0",
    justifyContent: "center",
  },
  filterHeader: {
    width: "100%",
    margin: "0",
    color: "#848484",
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
  },
  filterSearch: {
    width: "25vw",
    position: "relative",
    top: "12px",
    "@media (min-width: 350px)": {
      width: "100%",
    },
    "@media (min-width: 768px)": {
    },
    "@media (min-width: 992px)": {
    },
    "@media (min-width: 1200px)": {
    },
  },
  filterSelect: {
    width: "200px",
    margin: "0 auto",
    padding: "0 0 20px 0",
    "@media (min-width: 350px)": {
      width: "100%",
    },
    "@media (min-width: 768px)": {
    },
    "@media (min-width: 992px)": {
    },
    "@media (min-width: 1200px)": {
    },
  },
  dialogWrapper: {
    width: "100vw",
  },
  dialogHeader: {

  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContent: {
    maxWidth: "90vw",
    "& img": {
      width: "100%",
    },
  },
  modalTitle: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    margin: "10px 0 0 0",
    padding: "10px 0 0 0",
    borderTop: "1px solid #303030",
  },
  modalSubtitle: {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "normal",
    width: "100%",
    textAlign: "center",
    padding: "0 0 20px 0",
    borderBottom: "1px solid #303030",
  },
  rootCard: {
    justifyContent: "center",
    margin: "30px",
    transform: "scale(1)",
      transition: "transform 0.25s",
    "&:hover": {
      transform: "scale(1.025)",
      transition: "transform 0.25s",
      boxShadow: "0px 10px 5px -5px rgb(0 0 0 / 20%), 0px 5px 5px 0px rgb(0 0 0 / 14%), 0px 5px 15px 0px rgb(0 0 0 / 12%)",
    },
    "& img": {
      transform: "scale(1)",
      transition: "transform 0.25s",
    },
    "& img:hover": {
      transform: "scale(1.125)",
      transition: "transform 0.5s",
    },
  },
  modalBackdrop: {
    backgroundColor: "rgba(0,0,0,0.9) !important",
  },
  label: {
    display: 'block',
  },
  input: {
    width: 200,
  },
  listbox: {
    width: 200,
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    top: '160px',
    listStyle: 'none',
    backgroundColor: 'rgba(0,0,0,0.8)',
    overflow: 'auto',
    maxHeight: 200,
    '& li': {
      padding: '4px 20px',
    },
    '& li[data-focus="true"]': {
      backgroundColor: 'rgba(48, 63, 159, 0.04)',
      color: 'grey',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: 'rgba(48, 63, 159, 0.04)',
      color: 'grey',
    },
  },
  searchField: {

  }
};

export default campaingGridStyle;
