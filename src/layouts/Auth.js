import React, { useState, useEffect, createRef } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// Configure Amplify
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

// Material UI Core Components
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../advanaTheme";

import routes from "../routes.js";

import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";

// Import Images
import bgIMG from "../assets/img/advana-io-bg-01.jpg";
import pillLogo from "../assets/img/advana-pill-logo.png";
import bgImage from "../assets/img/advana-io-bg-02.jpg";
import fullLogo from "../assets/img/logo-full-white.png";
//import pillLogo from "../assets/img/advana-pill-logo.png";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/auth" to="/auth/dashboard" />
  </Switch>
);

const initialFormState = {
  email: '', password: '', authCode: '', formType: 'signIn'
}

const useStyles = makeStyles(styles);

function AuthPortal({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = useState(false);

  const [formState, updateFormState] = useState(initialFormState);

  // manage user state
  useEffect(() => {
    async function onAppLoad() {
      try {
        const user = await Auth.currentAuthenticatedUser();
          if (user) {
            console.log('user:', user)
            updateFormState(() => ({ ...formState, formType: "signedIn" }))
          } else {
            updateFormState(() => ({ ...formState, formType: "signIn" }))
          }
        } catch (err) {
          console.log(err);
      }
    }

    onAppLoad()
  }, []);

  function onChange(e) {
    e.persist();
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}))
  }

  const { formType } = formState

  Hub.listen('auth', (data) => {
    const event = data.payload.event;
    console.log('event:', event);
    if (event === "signOut") {
      console.log('user signed out...');
    }
  })

  async function signUp() {
    try {
      const { username, email, password } = formState;
      await Auth.signUp({ username, password, attributes: { email }}).then(
        updateFormState(() => ({ ...formState, formType: "confirmSignUp" }))
      )
    } catch (err) {
      console.log(err);
    } 
  }

  async function confirmSignUp() {
    try {
      const { username, email, authCode } = formState
      await Auth.confirmSignUp(username, email, authCode).then(
        updateFormState(() => ({ ...formState, formType: "signIn" }))
      ).then(
        console.log("Sign Up Confirmed!")
      )
    } catch (err) {
      console.log(err);
    }
  }

  async function signIn() {
    try {
      const { username, password } = formState;
      await Auth.signIn(username, password)
      updateFormState(() => ({ ...formState, formType: "signedIn" }))
    } catch (err) {
      console.log(err);
    }
  }

  async function forgotPassword() {
    try {
      const { email } = formState
      await Auth.forgotPassword(email).then(
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

  const color = "blue";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/analytics";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  useEffect(() => {
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <ThemeProvider theme={advanaTheme}>
      <div style={{backgroundImage: `url(${bgIMG})`, height: '100vh'}}>
        <Grid container className={classes.formContainer}>
          <Grid item className={classes.formWrapper} xs={12} md={12}>
          {
            formType === "signUp" && (
              <form className={classes.root} noValidate autoComplete="off">
                <Link to="/">
                  <Grid container className={classes.formHeader}>
                    <Grid item xs={12} md={12} lg={12} className={classes.formWrapper}>
                      <img src={pillLogo} />
                      <h3>Get Started with <span>ADVANA</span></h3>
                    </Grid>
                  </Grid>
                </Link>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <Typography color="primary" size="small" style={{margin: '0 0 10px 0', width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400'}}>Fill in the form below:</Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      className={classes.formInput}
                      name="username"
                      onChange={onChange}
                      placeholder="choose a username *"
                    />
                  </Grid> 
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      className={classes.formInput}
                      name="email"
                      onChange={onChange}
                      placeholder="enter a valid email *"
                    />
                  </Grid> 
                  <Grid item xs={12} md={12} lg={12}>
                    <Input
                      disabled
                      className={classes.formInput}
                      name="password"
                      type="password"
                      onChange={onChange}
                      value="T3mpP@ss!"
                      //placeholder="choose a password *"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      className={classes.formButton}
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
                  <Grid container style={{height: '135px', backgroundColor: '#e4e4e4'}} className={classes.formWrapper}>
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
                  <Grid container className={classes.formHeader}>
                    <Grid item xs={12} md={12} lg={12} className={classes.formWrapper}>
                      <img src={pillLogo} />
                      <h3>Get Started with <span>ADVANA</span></h3>
                    </Grid>
                  </Grid>
                </Link>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      className={classes.formInput}
                      name="username"
                      onChange={onChange}
                      placeholder="username *"
                    />
                  </Grid>
                  {/* <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="email"
                      onChange={onChange}
                      placeholder="email *"
                    />
                  </Grid> */}
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      className={classes.formInput}
                      name="password"
                      type="password"
                      onChange={onChange}
                      placeholder="password *"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      className={classes.formButton}
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
                  <Grid container className={classes.formHeader}>
                    <Grid item xs={12} md={12} lg={12} className={classes.formWrapper}>
                      <img src={pillLogo} />
                      <h3>Forgot your password?</h3>
                    </Grid>
                  </Grid>
                </Link>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      className={classes.formInput}
                      name="email"
                      onChange={onChange}
                      placeholder="Enter your registered email *"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      className={classes.formButton}
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
                    <Grid item xs={12} md={12} lg={12} className={classes.formWrapper}>
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
              <>
              <Sidebar
                routes={routes}
                logoText={""}
                logo={fullLogo}
                image={bgImage}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color={color}
                {...rest}
              />
              <div className={classes.mainPanel} ref={mainPanel}>
                <AdminNavbar
                  routes={routes}
                  handleDrawerToggle={handleDrawerToggle}
                  {...rest}
                />
                {/* <>
                  <p>Welcome, {user}</p>
                  <Button onClick={() => { Auth.signOut();}}>
                    Sign Out
                  </Button>
                </>  */}
                {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
                {getRoute() ? (
                  <div className={classes.content}>
                    <div className={classes.container}>{switchRoutes}</div>
                  </div>
                ) : (
                  <div className={classes.map}>{switchRoutes}</div>
                )}
                {getRoute() ? <Footer /> : null}
              </div>
              </>
            )
          }
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default AuthPortal;
