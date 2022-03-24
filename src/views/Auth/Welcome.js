/*!
=========================================================
* ADAVNA.IO - Advana Portal Sign Up Form
=========================================================
*/

import React, { useState, useContext, useEffect } from 'react';
import { useHistory  } from "react-router-dom";
import { AccountContext } from '../../components/Accounts/Accounts';

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

/*eslint-disable */
export default () => {
  let history = useHistory();

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  //const [message, setMessage] = useState(null);

  const { authenticate, getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((data) => {
      setFirstname(data["custom:firstname"]);
      // setLastname(data["custom:lastname"]);
      //setCompany(data["custom:company"]);
      // setEmail(data["email"]);
      // setSegment(data["custom:segment"]);
      // setTier(data["custom:tier"]);
    });
  }, []);

  function onSubmit(event) {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
      })
      .catch(err => {
        console.error('Failed to login!', err);
      })
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
            />
            <Toolbar
              style={{ position: "absolute", top: "-50px" }}
              id="back-to-top-anchor"
          />
        </Grid>

        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <h3>Welcome, {firstname}</h3>
            <p>Sing in below and get started with Advana.</p>
          </Grid>
          <Grid item xs={12} md={12} className={classes.formMain}>
          <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                <Grid style={{height: '110px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '40px', height: '40px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '40px', color: '#2e4094'}}>Sign In</h3>
                  </Grid>
                </Grid>
                <Grid container>
                  {/* <Grid item xs={12} md={12} lg={12}>
                    <Grid item>
                      {message && <p className={classes.messageSuccess}>{`${message}`}</p>}
                    </Grid>
                  </Grid> */}
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="email"
                      onChange={event => setEmail(event.target.value)}
                      placeholder="email"
                      value={email}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="password"
                      type="password"
                      value={password}
                      onChange={event => setPassword(event.target.value)}
                      placeholder="password"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      style={{width: '100%', top: '20px', margin: '20px'}}
                      variant="contained"
                      color="secondary"
                      type="submit">
                        Sign In
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    {/* <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', margin: '0 ', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8'}}>Don{"'"}t have an account?</Typography> */}
                    <Button
                      style={{width: '50%', margin: '10px 0', fontSize: '12px'}}
                      color="secondary"
                      onClick={history.push("/signup")}
                      >
                        Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    {/* <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Forgot your password?</Typography> */}
                    <Button
                      style={{width: '50%', margin: '10px 0', fontSize: '12px'}}
                      color="secondary"
                      >
                        Reset Password
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </>
    );
  };
