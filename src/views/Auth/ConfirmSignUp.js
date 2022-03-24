/*!
=========================================================
* ADAVNA.IO - Advana Portal Sign Up Form
=========================================================
*/

import React, { useState, useEffect, useContext } from 'react';
import { useHistory  } from "react-router-dom";
import { CognitoUser } from "amazon-cognito-identity-js";
import { AccountContext } from '../../components/Accounts/Accounts';
import Pool from '../../components/UserPool/UserPool';

// Material UI Core Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from "@material-ui/core/Toolbar";

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";

// Import Images
import bgIMG from "../../assets/img/advana-io-bg-01.jpg";
import pillLogo from "../../assets/img/advana-pill-logo.png";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const confirmSignUp = (props) => {
  const { ...rest } = props;

  const { getSession } = useContext(AccountContext);

  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');

  useEffect(() => {
    getSession().then((data) => {
      setFirstname(data["custom:firstname"]);
      // setLastname(data["custom:lastname"]);
      //setCompany(data["custom:company"]);
      setEmail(data["email"]);
      // setSegment(data["custom:segment"]);
      // setTier(data["custom:tier"]);
    });
  }, []);

  let history = useHistory();

  const classes = useStyles();

  const [code, setCode] = useState("");
  const [message, setMessage] = useState(null);
  //const email = 

  async function onSubmit(event) {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email.trim(),
      Pool
    });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.log('error', err);
        return;
      }
      
      console.log('call result: ' + JSON.stringify(result));
      setMessage("You're all set. Come on in!")
      history.push("/welcome");
    });
  };

  return (
    <>
      <div style={{backgroundImage: `url(${bgIMG})`, height: '100%'}}>
        <Grid item xs={12} md={12}>
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
        </Grid>

        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <h3>You{"'"}re prepared to launch, {firstname}</h3>
            <p>Enter you confirmation code below to confirm your email address.</p>
          </Grid>
          <Grid item xs={12} md={12} className={classes.formMain}>
          <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                <Grid style={{height: '110px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '40px', height: '40px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '40px', color: '#2e4094'}}>Submit Confirmation Code</h3>
                  </Grid>
                </Grid>
                <Grid container style={{paddingBottom: '40px'}}>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="code"
                      value={code}
                      onChange={event => setCode(event.target.value)}
                      placeholder="Confirmation Code"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      style={{width: '100%', top: '20px', margin: '20px'}}
                      variant="contained"
                      color="secondary"
                      type="submit">
                        Enter your confirmation Code
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid item>
                      {message && <p className={classes.messageFail}>{`${message}`}</p>}
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </>
    );
  }

export default confirmSignUp;
