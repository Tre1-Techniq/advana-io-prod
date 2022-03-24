const parallaxStyle = {
  parallax: {
    height: "80vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    "@media (min-width: 350px)": {
      height: "100vh",
    },
    "@media (min-width: 768px)": {
      height: "100vh",
    },
    "@media (min-width: 992px)": {
      height: "80vh",
    },
    "@media (min-width: 1200px)": {
      height: "80vh",
    },
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "25vh",
  },
};

export default parallaxStyle;
