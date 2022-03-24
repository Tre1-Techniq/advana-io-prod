/*!
=========================================================
* ADAVNA.IO - User Auth Form
=========================================================
*/

import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

// Material UI Core Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

// Amplify Components
import { Auth } from "aws-amplify";
// import awsconfig from "../../aws-exports";

// Amplify.configure(awsconfig);

// Import Images
import bgIMG from "../../assets/img/advana-io-bg-01.jpg";
import pillLogo from "../../assets/img/advana-pill-logo.png";

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      padding: '5px 20px',
      fontSize: 'small',
    },
    '& .MuiInputBase-input': {
      fontSize: 'small',
    },
    '& .MuiGrid-grid-lg-12': {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    '& .MuiGrid-grid-lg-6': {
      display: 'contents',
      justifyContent: 'center',
    },
    '& .MuiGrid-container': {
      top: '75px',
      width: '400px',
      margin: '0 auto',
      backgroundColor: 'rgba(255,255,255,0.25)',
      border: '1px solid #e4e4e4',
    },
  },
  formContainer: {
    position: 'relative',
    top: '60px',
  }
}));

const initialFormState = {
  username: '', email: '', password: '', authCode: "", formType: 'signUp'
}

function Form() {
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null);

  const classes = useStyles();

  let history = useHistory();

  useEffect(() => {
    checkUser(user)
    updateUser(user)
  }, [])

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      updateUser(user).then(
      updateFormState(() => ({ ...formState, formType: "signedIn" }))
      )
    } catch (err) {
      updateUser(null)
    }
  }

  function onChange(e) {
    e.persist();
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}));
  }

  const { formType } = formState

  async function signUp() {
    try {
      const { username, email, password } = formState;
      await Auth.signUp({ username, password, attributes: { email } }).then(
        updateFormState(() => ({ ...formState, formType: "confirmSignUp" }))
      )
    } catch (err) {
      console.log(err);
    } 
  }

  async function confirmSignUp() {
    try {
      const { username, authCode } = formState
      await Auth.confirmSignUp(username, authCode).then(
        updateFormState(() => ({ ...formState, formType: "signIn" }))
      ).then(
        updateUser(user)
      )
    } catch (err) {
      console.log(err);
    }
  }

  async function signIn() {
    try {
      const { username, password } = formState
      await Auth.signIn(username, password)
      history.push("/admin")
    } catch (err) {
      console.log(err);
    } 
  }

  async function forgotPassword() {
    try {
      const { username } = formState
      await Auth.forgotPassword(username).then(
        updateFormState(() => ({ ...formState, formType: "forgotPasswordConfirm" }))
      )
    } catch (err) {
      console.log(err);
    }
  }

  async function forgotPasswordConfirm() {
    try {
      const { authCode, password } = formState
      await Auth.forgotPasswordConfirm(authCode, password).then(
        updateFormState(() => ({ ...formState, formType: "signIn" }))
      )
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div style={{backgroundImage: `url(${bgIMG})`, height: '100vh'}}>
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} md={12}>
        {
          formType === "signUp" && (
            <form className={classes.root} noValidate autoComplete="off">
              <Link to="/">
                <Grid style={{height: '135px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '60px', height: '60px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '70px', color: '#2e4094'}}>Get Started with <span style={{color: '#68c3c8'}}>ADVANA</span></h3>
                  </Grid>
                </Grid>
              </Link>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography color="primary" size="small" style={{margin: '0 0 10px 0', width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400'}}>Fill in the form below:</Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="username"
                    onChange={onChange}
                    placeholder="create a username *"
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="password"
                    type="password"
                    onChange={onChange}
                    placeholder="choose a password *"
                  />
                </Grid> 
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="email"
                    onChange={onChange}
                    placeholder="enter a valid email *"
                  />
                </Grid> 
                <Grid item xs={12} md={12} lg={12}>
                  <Button
                    style={{width: '100%', margin: '20px', top: '20px'}}
                    variant="contained"
                    color="secondary"
                    onClick={signUp}>
                      Sign Up
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', margin: '0 20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8'}}>Already have an account?</Typography>
                  <Button
                    style={{width: '100%', margin: '20px'}}
                    color="secondary"
                    onClick={() => updateFormState(() => ({
                    ...formState, formType: "signIn"
                    }))}>
                      Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          )
        }

        {
          formType === "confirmSignUp" && (
            <form className={classes.root} noValidate autoComplete="off">
              <Link to="/">
                <Grid style={{height: '135px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '60px', height: '60px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '70px', color: '#2e4094'}}>Enter your confirmation code</h3>
                  </Grid>
                </Grid>
              </Link>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography color="primary" size="small" style={{margin: '0 0 10px 0', width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400'}}>Check your email for a Confirmation Code:</Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="authCode"
                    onChange={onChange}
                    placeholder="Enter Your Confirmation Code *"
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Button
                    style={{width: '100%', top: '20px', margin: '20px'}}
                    variant="contained"
                    color="secondary"
                    onClick={confirmSignUp}>
                      Confirm Sign Up
                  </Button>
                </Grid>
              </Grid>
            </form>
          )
        }

        {
          formType === "signIn" && (
            <form className={classes.root} noValidate autoComplete="off">
              <Link to="/">
                <Grid style={{height: '135px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '60px', height: '60px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '70px', color: '#2e4094'}}>Get Started with <span style={{color: '#68c3c8'}}>ADVANA</span></h3>
                  </Grid>
                </Grid>
              </Link>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="username"
                    onChange={onChange}
                    placeholder="username *"
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="password"
                    type="password"
                    onChange={onChange}
                    placeholder="password *"
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Button
                    style={{width: '100%', top: '20px', margin: '20px'}}
                    variant="contained"
                    color="secondary"
                    onClick={signIn}>
                      Sign In
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid item>
                    <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Don{"'"}t have an account?</Typography>
                      <Button
                        style={{width: '100%', margin: '20px 0'}}
                        color="secondary"
                        onClick={() => updateFormState(() => ({
                        ...formState, formType: "signUp"
                        }))}>
                          Sign Up
                      </Button>
                  </Grid>
                  <Grid item>
                    <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Forgot your password?</Typography>
                    <Button
                      style={{width: '100%', margin: '20px 0'}}
                      color="secondary"
                      onClick={() => updateFormState(() => ({
                      ...formState, formType: "forgotPassword"
                      }))}>
                        Reset Password
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )
        }

        {
          formType === "forgotPassword" && (
            <form className={classes.root} noValidate autoComplete="off">
              <Link to="/">
                <Grid style={{height: '135px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '60px', height: '60px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '70px', color: '#2e4094'}}>Forgot your password?</h3>
                  </Grid>
                </Grid>
              </Link>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="email"
                    onChange={onChange}
                    placeholder="Enter your registered email *"
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Button
                    style={{width: '100%', top: '20px', margin: '20px'}}
                    variant="contained"
                    color="secondary"
                    onClick={forgotPassword}>
                      Reset your password
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid item>
                    <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Don{"'"}t have an account?</Typography>
                      <Button
                        style={{width: '100%', margin: '20px 0'}}
                        color="secondary"
                        onClick={() => updateFormState(() => ({
                        ...formState, formType: "signUp"
                        }))}>
                          Sign Up
                      </Button>
                  </Grid>
                  <Grid item>
                    <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Remember your old password?</Typography>
                    <Button
                      style={{width: '100%', margin: '20px 0'}}
                      color="secondary"
                      onClick={() => updateFormState(() => ({
                      ...formState, formType: "signIn"
                      }))}>
                        Sign In
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )
        }

        {
          formType === "forgotPasswordConfirm" && (
            <form className={classes.root} noValidate autoComplete="off">
              <Link to="/">
                <Grid style={{height: '135px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '60px', height: '60px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '70px', color: '#2e4094'}}>Reset your password</h3>
                  </Grid>
                </Grid>
              </Link>
              <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="authCode"
                    onChange={onChange}
                    placeholder="Enter Conformation Code *"
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    name="password"
                    onChange={onChange}
                    placeholder="Enter your new password *"
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Button
                    style={{width: '100%', top: '20px', margin: '20px'}}
                    variant="contained"
                    color="secondary"
                    onClick={forgotPasswordConfirm}>
                      Confirm Password Reset
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid item>
                    <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Don{"'"}t have an account?</Typography>
                      <Button
                        style={{width: '100%', margin: '20px 0'}}
                        color="secondary"
                        onClick={() => updateFormState(() => ({
                        ...formState, formType: "signUp"
                        }))}>
                          Sign Up
                      </Button>
                  </Grid>
                  <Grid item>
                    <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Remember your old password?</Typography>
                    <Button
                      style={{width: '100%', margin: '20px 0'}}
                      color="secondary"
                      onClick={() => updateFormState(() => ({
                      ...formState, formType: "signIn"
                      }))}>
                        Sign In
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )
        }

        {
          formType === "signedIn" && (
            updateUser(user),
            history.push("/admin")
          )
        }
        </Grid>
      </Grid>
    </div>
    );
  }

export default Form;
