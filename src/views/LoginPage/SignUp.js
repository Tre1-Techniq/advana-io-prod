import React from "react";
import Form from "../../views/Forms/Form";
import "../Forms/Form.css";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";

import styles from "../../assets/jss/material-kit-react/views/loginPage";

import image from "../../assets/img/advana-io-bg-01.jpg";
//import pillLogo from "../../assets/img/advana-pill-logo.png";

const useStyles = makeStyles(styles);

export default function GetStarted(props) {

  const classes = useStyles();

  const { ...rest } = props;

  return (
    <ThemeProvider theme={advanaTheme}>
      <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundColor: "transparent",
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
            <Form />
        </div>
        <Footer whiteFont />
      </div>
    </div>
    </ThemeProvider>
  );
}
