/*!
=========================================================
* ADAVNA.IO - User Auth Form
=========================================================
*/

import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from '../../components/Accounts/Accounts';
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
//import Footer from "../../components/Footer/Footer";

// Import Images
import bgIMG from "../../assets/img/advana-io-bg-01.jpg";
import pillLogo from "../../assets/img/advana-pill-logo.png";

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: 0,
      width: '100%',
      padding: '5px 20px',
      fontSize: '12px',
    },
    '& .MuiFormLabel-root': {
      fontSize: '14px',
      color: '#00acc1',
    },
    '& .MuiInputBase-input': {
      fontSize: '14px',
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
      width: '470px',
      margin: '0 auto',
      backgroundColor: 'rgba(255,255,255,0.25)',
      border: '1px solid #e4e4e4',
      borderRadius: '0 0 6px 6px',
    },
  },
  formControl: {
    width: '100%',
    position: 'relative',
    top: '30px',
    backgroundColor: '#f4f4f4',
    padding: '10px',
    margin: '0 20px 0 0',
    borderRadius: '6px'
  },
  formContainer: {
    position: 'relative',
    top: '160px',
    height: '83vh',
  },
  messageFail: {
    display: 'flex',
    justifyContent: 'center',
    color: '#ff0000',
    padding: '20px 0',
  },
  messageSuccess: {
    display: 'flex',
    justifyContent: 'center',
    color: '#00acc1',
    padding: '20px',
  }
}));

const initialFormState = {
 firstname: '', lastname:'', company: '', segment: '', email: '', password: '', conformPassword: '', formType: 'signIn'
}

const userAuth = (props) => {
  const { ...rest } = props;
  
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [segment, setSegment] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [formState, updateFormState] = useState(initialFormState);
  const [code, setCode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  let history = useHistory();

  const classes = useStyles();

  function onSignUpSubmit(event) {
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
        setMessage(err)
      });
      updateFormState(() => ({
        ...formState, formType: "confirmSignUp"
      }))
    } catch (err) {
      console.log(err);
      setMessage(err);
    }
  };

  function onSignInSubmit(event) {
    event.preventDefault();

    try {
      authenticate(email, password)
      .then(data => {console.log('Logged in! ', data)}
      );
      history.push("/admin")
    } catch (err) {
      console.log('Failed to login! ', err);
      setMessage(err);
    }
  };

  async function onConfirmSignUpSubmit(event) {
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
    });
    
    setMessage("Registration was successful. Come on in!")
    updateFormState(() => ({
      ...formState, formType: "signIn"
    }))
  };

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool
    });
  };

  const sendCode = event => {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: data => {
        console.log("onSuccess:", data);
      },
      onFailure: err => {
        console.error("onFailure:", err);
      },
      inputVerificationCode: data => {
        console.log("Input code:", data);
        setStage(2);
      }
    });
  };

  const resetPassword = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords are not the same");
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: data => {
        console.log("onSuccess:", data);
      },
      onFailure: err => {
        console.error("onFailure:", err);
      }
    });
  };

  const { formType } = formState

  return (
    <>
      <div style={{backgroundImage: `url(${bgIMG})`, height: '100vh'}}>
        <Grid item xs={12} md={12}>
          <Header
              color="transparent"
              rightLinks={<HeaderLinks />}
              fixed
              {...rest}
            />
            <Toolbar
              style={{ position: "absolute", top: "-50px" }}
              id="back-to-top-anchor"
          />
        </Grid>
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} md={12}>
          {
            formType === "signUp" && (
              <form onSubmit={onSignUpSubmit} className={classes.root} noValidate autoComplete="off">
                <Grid style={{height: '80px', backgroundColor: '#e4e4e4', borderRadius: '6px 6px 0 0'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '40px', height: '40px', position: 'absolute', margin: '20px auto'}} />
                    {/* <h3 style={{position: 'relative', top: '40px', color: '#2e4094'}}>Sign Up</h3> */}
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
                    {/* <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', margin: '0 20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8'}}>Already have an account?</Typography> */}
                    <Button
                      style={{width: '100%', margin: '10px 0', fontSize: '12px'}}
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
              <>
              <form onSubmit={onConfirmSignUpSubmit} className={classes.root} noValidate autoComplete="off">
                <Grid style={{height: '110px', backgroundColor: 'transparent'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <p>We emailed your confirmation code to {email}</p>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <p>Please check your email, then enter the code in the form below.</p>
                  </Grid>
                </Grid>
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
                        Enter Confirmation Code
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid item>
                      {message && <p className={classes.messageFail}>{`${message}`}</p>}
                    </Grid>
                  </Grid>
                </Grid>
              </form>
              </>
            )
          }
          {
            formType === "signIn" && (
              <form onSubmit={onSignInSubmit} className={classes.root} noValidate autoComplete="off">
                <Grid style={{height: '110px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '40px', height: '40px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '40px', color: '#2e4094'}}>Sign In</h3>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid item>
                      {message && <p className={classes.messageSuccess}>{`${message}`}</p>}
                    </Grid>
                  </Grid>
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
                      onClick={() => updateFormState(() => ({
                      ...formState, formType: "signUp"
                      }))}>
                        Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    {/* <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Forgot your password?</Typography> */}
                    <Button
                      style={{width: '50%', margin: '10px 0', fontSize: '12px'}}
                      color="secondary"
                      onClick={() => updateFormState(() => ({
                      ...formState, formType: "forgotPassword"
                      }))}>
                        Reset Password
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )
          }

          {
            formType === "forgotPassword" && stage === 1 && (
              <form onSubmit={sendCode} className={classes.root} noValidate autoComplete="off">
                <Grid style={{height: '110px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '40px', height: '40px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '40px', color: '#2e4094'}}>Forgot Password</h3>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="email"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      placeholder="Enter your email"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      style={{width: '100%', top: '20px', margin: '20px'}}
                      variant="contained"
                      color="secondary"
                      type="submit">
                        Send verification code
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid item>
                      {/* <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Remember your old password?</Typography> */}
                      <Button
                        style={{width: '100%', margin: '10px 0', fontSize: '12px'}}
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
            formType === "forgotPasswordConfirm" && stage === 2 && (
              <form onSubmit={resetPassword} className={classes.root} noValidate autoComplete="off">
                <Grid style={{height: '110px', backgroundColor: '#e4e4e4'}} container>
                  <Grid item xs={12} md={12} lg={12}>
                    <img src={pillLogo} style={{width: '40px', height: '40px', position: 'absolute', margin: '20px auto'}} />
                    <h3 style={{position: 'relative', top: '40px', color: '#2e4094'}}>Reset Your Password</h3>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="code"
                      value={code}
                      onChange={event => setCode(event.target.value)}
                      placeholder="Enter Conformation Code"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="password"
                      onChange={event => setPassword(event.target.value)}
                      placeholder="Enter your new password"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <TextField
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={event => setConfirmPassword(event.target.value)}
                      placeholder="Confirm your new password"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      style={{width: '100%', top: '20px', margin: '20px'}}
                      variant="contained"
                      color="secondary"
                      type="submit">
                        Change your password
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Grid item>
                      {/* <Typography color="primary" size="small" style={{width: '100%', textAlign: 'center', position: 'relative', top: '20px', fontSize: '0.8rem', fontWeight: '400', color: '#68c3c8', margin: '0'}}>Remember your old password?</Typography> */}
                      <Button
                        style={{width: '100%', margin: '10px 0', fontSize: '12px'}}
                        color="secondary"
                        onClick={() => updateFormState(() => ({
                        ...formState, formType: "signIn"
                        }))}>
                          Sign In
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                {message && <p className={classes.messageFail}>{`${message}`}</p>}
              </form>
            )
          }

          </Grid>
        </Grid>
      </div>
      {/* <Grid container>
        <Grid item  xs={12} md={12} lg={12}>
          <Footer />
        </Grid>
      </Grid> */}
      </>
    );
  }

export default userAuth;
