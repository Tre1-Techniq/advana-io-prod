/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { useHistory, useLocation } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ThemeProvider, Button } from "@material-ui/core";

import LoginBtn from "../Auth/Buttons/LoginBtn";

//Modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { FormControl } from '@material-ui/core';
// import { InputLabel } from '@material-ui/core';
// import { FormHelperText } from '@material-ui/core';
// import { Input } from '@material-ui/core';

import advanaTheme from "../../advanaTheme";

// @material-ui/icons
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import { Apps } from "@material-ui/icons";

// import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  let history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split("/");

  // const [openSignIn, setOpenSignIn] = useState(false);

  // const handleOpenSignIn = () => {
  //   console.log("OPEN SIGN IN!");
  //   setOpenSignIn(true);
  // };

  // const handleCloseSignIn = () => {
  //   setOpenSignIn(false);
  // };

  return (
    <ThemeProvider theme={advanaTheme}>
      <List className={classes.headerNav}>
          <ListItem className={splitLocation[1] === "dooh" ? classes.listItemActive : classes.ListItem}>
            <Button
              className={classes.headerLink}
              onClick={() => history.push("/dooh")}
              variant="text"
              color= "primary"
              size="small"
            >
              DOOH
            </Button>
          </ListItem>
          <ListItem className={splitLocation[1] === "sentry" ? classes.listItemActive : classes.ListItem}>
            <Button
              className={classes.headerLink} 
              onClick={() => history.push("/sentry")} 
              variant="text" 
              color="primary" 
              size="small">
              SENTRY
            </Button>
          </ListItem>
          <ListItem className={splitLocation[1] === "insight" ? classes.listItemActive : classes.ListItem}>
            <Button
              className={classes.headerLink} 
              onClick={() => history.push("/insight")} 
              variant="text" 
              color="primary" 
              size="small">
              INSIGHT
            </Button>
          </ListItem>
          <ListItem className={splitLocation[1] === "promote" ? classes.listItemActive : classes.ListItem}>
            <Button
              className={classes.headerLink}
              onClick={() => history.push("/promote")}
              variant="text"
              color="primary"
              size="small">
              PROMOTE
            </Button>
          </ListItem>
          {/* <ListItem className={classes.listItem}>
            <Button
              className={classes.headerLink}
              onClick={() => history.push("/campaigns")}
              variant="text"
              color="primary"
              size="small"
            >
              CAMPAIGNS
            </Button>
          </ListItem> */}
          {/* <ListItem className={classes.listItem}>
            <Button href="/home#about" variant="text" color="primary" size="small">
              ABOUT
            </Button>
          </ListItem> */}
          {/* <ListItem className={classes.listItem}>
            <Button
              type="submit"
              //onClick={() => handleOpenSignIn()}
              onClick={() => history.push("/admin/home")}
              variant="contained"
              color="secondary"
            >
              <ExitToAppIcon className={classes.btnIcon} />
              PORTAL
            </Button>
          </ListItem> */}
          <ListItem className={classes.listItem}>
            <LoginBtn />
          </ListItem>
        </List>
    </ThemeProvider>
  );
}
