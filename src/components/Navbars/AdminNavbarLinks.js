import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

// core components
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const { logout } = useAuth0();
  const classes = useStyles();

  const logoutWithRedirect = () =>
    logout({
    returnTo: window.location.origin,
  });

  return (
    <div className={classes.headerLinksWrapper}>
      <Button
          id="qsLogoutBtn"
          onClick={() => logoutWithRedirect()}
      >
          <PowerSettingsNewIcon className="mr-3" /> Log
          Out
      </Button>
    </div>
  );
}
