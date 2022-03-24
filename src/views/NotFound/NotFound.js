import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import ParallaxNotFound from "../../components/Parallax/ParallaxNotFound.js";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// nodejs library that concatenates classes
import classNames from "classnames";

import advanaLogo from "../../assets/img/advana-pill-logo-300.png";

import styles from "../../assets/jss/material-kit-react/views/notFound.js";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '20rem',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '-40px',
  '@media (min-width:600px)': {
    fontSize: '12rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20rem',
  },
};

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <>
    <ThemeProvider theme={theme}>
      <div>
        <Header
          color="transparent"
          brand="Advana 404"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <ParallaxNotFound
          small
        />
        <div className={classes.main}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={advanaLogo} alt="..." className={imageClasses} />
                  </div>
                </div>
                <div>
                  <Typography variant="h1">404</Typography>
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Page Not Found!</h3>
                </div>
                <div className={classes.description}>
                  <p>
                    Looks like you have managed to navigate beyond our atmosphere. Please return to Earth.
                  </p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
    </>
  );
}
