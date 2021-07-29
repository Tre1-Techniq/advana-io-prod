/*!
=========================================================
Material Kit - v2.0.7
=========================================================

Product Page: https://www.creative-tim.com/product/material-kit
Copyright 2020 Creative Tim (https://www.creative-tim.com/)

Coded by Creative Tim

=========================================================

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
//import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes
//import classNames from "classnames";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Parallax from "../../components/Parallax/Parallax";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

// @material-ui/lab components
import Pagination from '@material-ui/lab/Pagination';

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// @material-ui/icons
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks";

// Import Images
import campaignsPageHero from "../../assets/img/campaigns-page-hero.png";
import brandsHint from "../../assets/img/clients/brands-hint-1024.jpg";
import brandsLifeWTR from "../../assets/img/clients/brands-lifeWTR-600.jpg";
import brandsCheezIt from "../../assets/img/clients/brands-cheezIt-1024.jpg";
import brandsCelsius from "../../assets/img/clients/brands-celsius-1024.jpg";
import brandsYerbae from "../../assets/img/clients/brands-yerbae-1024.jpg";
import brandsMightySpark from "../../assets/img/clients/brands-mightySpark-1024.jpg";
import opsCompanyKitchen from "../../assets/img/clients/ops-companyKitchen-sq.jpg";
import ops365rmAustralia from "../../assets/img/clients/ops-365rm-australia-sq.jpg";
import ops365rmDetroit from "../../assets/img/clients/ops-365rm-detroit-sq.jpg";
import opsCanteenCorp from "../../assets/img/clients/ops-canteen-corporate-sq.jpg";
import opsCanteenCysco from "../../assets/img/clients/ops-canteen-cysco-sq.jpg";

import styles from "../../assets/jss/material-kit-react/views/clientGrid";

function ScrollTop(props) {
  const { children, window } = props;
  const useScrollStyles = makeStyles((styles) => ({
    root: {
      position: "fixed",
      bottom: styles.spacing(2),
      right: styles.spacing(2),
      zIndex: "20",
    },
  }));
  const scrollClasses = useScrollStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={scrollClasses.root}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles(styles);

export default function Campaigns(props) {
  //let history = useHistory();
  const classes = useStyles();
  const { ...rest } = props;

    // const [campaigns, setCampaigns] = useEffect([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [campaignsPerPage, setCampaignsPerPage] = useState(1);

    // const indexOfLastCampaign = currentCampaign * indexOfLastCampaign;
    // const indexOfFirstCampaign = indexOLastCampaign - campaignsPerPage;
    // const currentCampaigns = 

    // useEffect(() => {

    // });

  return (
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.heroContainer}>
        <Header
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "white",
          }}
          {...rest}
        />
        <Toolbar
          style={{ position: "absolute", top: "-50px" }}
          id="back-to-top-anchor"
        />
        <Parallax image={require("../../assets/img/advana-io-bg-01.jpg").default}>
          <div className={classes.container}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                    <h2 className={classes.titleMid}>CAMPAIGNS</h2>
                    <h4 className={classes.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </h4>
                </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <img className={classes.heroImg} src={campaignsPageHero} />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Hint Fruit-Infused Water"
                            height="140"
                            image={brandsHint}
                            title="Hint"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Hint
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Fruit-Infused Water
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Company Kitchen Micro Market" 
                            height="140"
                            image={opsCompanyKitchen}
                            title="Company Kitchen"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Company Kitchen
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Micro Market
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="LifeWTR Premium Bottled Water"
                            height="140"
                            image={brandsLifeWTR}
                            title="LifeWTR"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                LifeWTR
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Premium Bottled Water
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="365 Retail - Austrailia Micro Market"
                            height="140"
                            image={ops365rmAustralia}
                            title="365 Retail - Austrailia"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                365 Retail - Austrailia
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Micro Market
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Cheez-It Baked Snack Crackers"
                            height="140"
                            image={brandsCheezIt}
                            title="Cheez-It"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Cheez-It
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Baked Snack Crackers
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="365 Retail - Detroit Micro Market"
                            height="140"
                            image={ops365rmDetroit}
                            title="365 Retail - Detroit"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                365 Retail - Detroit
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Micro Market
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Celsius Fitness Drinks"
                            height="140"
                            image={brandsCelsius}
                            title="Celsius"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Celsius
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Fitness Drinks
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Canteen Corporate Micro Market"
                            height="140"
                            image={opsCanteenCorp}
                            title="Canteen Corporate"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Canteen Corporate
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Micro Market
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Yerbae Sparlking Water"
                            height="140"
                            image={brandsYerbae}
                            title="Yerbae"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Yerbae
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Sparlking Water
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Canteen - Cysco Systems Micro Market"
                            height="140"
                            image={opsCanteenCysco}
                            title="Canteen - Cysco Systems"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Canteen - Cysco Systems
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Micro Market
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Mighty Spark Chicken Stick Snacks"
                            height="140"
                            image={brandsMightySpark}
                            title="Mighty Spark"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Mighty Spark
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Chicken Stick Snacks
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="medium" color="primary" aria-label="More Information">
                                <InfoIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                    <Box className={classes.pagination}>
                        <Pagination count={3} color="primary" page={1} />
                    </Box>
                </GridItem>
              </GridContainer>
          </div>
          <ScrollTop
            style={{ zIndex: "2000" }}
            className={classes.scrollTop}
            {...props}
          >
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon color="inherit" />
            </Fab>
          </ScrollTop>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
