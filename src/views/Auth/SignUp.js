/*!
=========================================================
* ADAVNA.IO - Advana Portal Sign Up Form
=========================================================
*/

import React, { useState } from 'react';
import { useHistory  } from "react-router-dom";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import Pool from '../../components/UserPool/UserPool';


// Material UI Core Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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

const signUp = (props) => {
  const { ...rest } = props;

  let history = useHistory();

  const classes = useStyles();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [segment, setSegment] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const attributes = [
      new CognitoUserAttribute({Name: "custom:firstname",Value: firstname}),
      new CognitoUserAttribute({Name: "custom:lastname",Value: lastname}),
      new CognitoUserAttribute({Name: "email",Value: email}),
      new CognitoUserAttribute({Name: "custom:company",Value: company}),
      new CognitoUserAttribute({Name: "custom:segment",Value: segment}),
    ];

    if (password !== confirmPassword) {
      setMessage("Passwords are not the same");
      return;
    };

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      setMessage("All fields are required");
      return;
    }

    try {
      Pool.signUp(email, password, attributes, null, (err, data) => {
        if (err) console.error("ERROR MESSAGE: ", err);
        console.log("DATA: ", data);

        setMessage(err);

        history.push("/confirmsignup");
      });
    } catch (err) {
      console.log(err);
      setMessage(err);
    }
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
          <Grid item xs={12} md={12} className={classes.formMain}>
            <form onSubmit={onSubmit} className={classes.root}>
              <Grid container style={{height: '110px', backgroundColor: '#e4e4e4', borderRadius: '6px 6px 0 0'}}>
                <Grid item xs={12} md={12} lg={12}>
                  <img src={pillLogo} style={{width: '40px', height: '40px', position: 'absolute', margin: '20px auto'}} />
                  <h3 style={{position: 'relative', top: '40px', color: '#2e4094'}}>Sign Up</h3>
                </Grid>
              </Grid>
                <Grid container style={{paddingBottom: '10px'}}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                          name="firstname"
                          value={firstname}
                          onChange={event => setFirstname(event.target.value)}
                          placeholder="First Name"
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <TextField
                          name="lastname"
                          value={lastname}
                          onChange={event => setLastname(event.target.value)}
                          placeholder="Last Name"
                        />
                    </Grid>
                  </Grid> 
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid item xs={12} md={12} lg={6}>
                      <TextField
                        name="company"
                        value={company}
                        onChange={event => setCompany(event.target.value)}
                        placeholder="Company"
                      />
                    </Grid> 
                    <Grid item xs={12} md={12} lg={6}>
                      <FormControl className={classes.formControl}>
                        <FormLabel component="legend">Segment</FormLabel>
                        <RadioGroup row aria-label="segment" name="segment" value={segment} onChange={event => setSegment(event.target.value)}>
                          <FormControlLabel value="Brand" control={<Radio />} label="Brand" />
                          <FormControlLabel value="Operator" control={<Radio />} label="Operator" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="email"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      placeholder="eMail"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                        name="password"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        placeholder="Password"
                      />
                  </Grid> 
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={event => setConfirmPassword(event.target.value)}
                      placeholder="Confirm Password"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      style={{width: '100%', margin: '20px', top: '20px'}}
                      variant="contained"
                      color="secondary"
                      type="submit">
                        Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid item>
                      {message && <p className={classes.messageFail}>{`${message}`}</p>}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <p>Already have an account?</p>
                    <Button
                      style={{width: '100%', margin: '10px 0', fontSize: '12px'}}
                      color="secondary"
                      >
                        Sign In
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
  }

export default signUp;
