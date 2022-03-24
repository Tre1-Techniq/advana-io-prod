import React, { useEffect, useContext, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "../../components/Accounts/Accounts";

// nodejs library to set properties for components
// import PropTypes from "prop-types";

// nodejs library that concatenates classes
//import classNames from "classnames";

// @mui/material components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@mui/InputLabel";
// core components
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
//import CustomInput from "../../components/CustomInput/CustomInput.js";
import Card from "../../components/Card/Card.js";
//import CardHeader from "../../components/Card/CardHeader.js";
//import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
//import CardFooter from "../../components/Card/CardFooter.js";
import UserSettings from '../../components/Settings/UserSettings';

//import List from '@material-ui/core/List';
// import Avatar from '@material-ui/core/Avatar';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';

// @mui/icons-material
//import ConnectionsIcon from "@material-ui/icons/People";

// import images
//import avatar from "../../assets/img/faces/avatar-blank.jpg";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js"

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

const useStyles = makeStyles(styles);

function Settings() {
  const classes = useStyles();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState("");
  const [tier, setTier] = useState("free");
  //const [message, setMessage] = useState(null);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((data) => {
      console.log("DATA: ", data);
    });
  }, []);

  const submitUserAttributes = (event) => {
    event.preventDefault();

    getSession().then(({ user }) => {
      const attributes = [
        new CognitoUserAttribute(
          {
            Name: "custom:firstname",
            Value: firstname 
          },
          {
            Name: "custom:lastname",
            Value: lastname 
          },
          {
            Name: "email",
            Value: email
          },
          {
            Name: "custom:company",
            Value: company
          },
          {
            Name: "custom:segment",
            Value: segment
          },
          {
            Name: "custom:tier",
            Value: tier 
          },
        ),
      ];

      user.updateAttributes(attributes[0,1,2,3,4,5], (err, result) => {
        if (err) console.error(err);
        console.log(result);
      });
    });
  }

  return (
    <ThemeProvider theme={advanaTheme}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card className={classes.userCardAutoH}>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <Grid item xs={12} md={12} lg={12}>
                  <h5 className={classes.bodyTitle}>User Information</h5>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <p className={classes.bodyCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </Grid>
                  <form onSubmit={submitUserAttributes} className={classes.userForm}>
                        <Grid container>
                          <Grid item xs={12} md={12} lg={12} className={classes.registerTextWrapper}>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                onChange={event => setFirstname(event.target.value)}
                                name="firstname"
                                placeholder="First Name"
                                value={firstname}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                onChange={event => setLastname(event.target.value)}
                                name="lastname"
                                placeholder="Last Name"
                                value={lastname}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                onChange={event => setEmail(event.target.value)}
                                name="email"
                                placeholder="eMail"
                                value={email}
                                disabled
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="company"
                                onChange={event => setCompany(event.target.value)}
                                placeholder="Company"
                                value={company}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      <Grid container>
                      <Grid item xs={12} md={12} lg={12}>
                        <div className={classes.registerRadioGroup}>
                          <Grid item xs={12} md={12} lg={12}>
                            <FormControl className={classes.formControl}>
                              <FormLabel component="legend">Segment</FormLabel>
                              <RadioGroup row aria-label="segment" name="segment" value={segment} onChange={event => setSegment(event.target.value)}>
                                <FormControlLabel value="brand" control={<Radio />} label="Brand" />
                                <FormControlLabel value="operator" control={<Radio />} label="Operator" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                            <FormControl className={classes.formControl}>
                              <FormLabel component="legend">Tier</FormLabel>
                              <RadioGroup row aria-label="tier" name="tier" value={tier}  onChange={event => setTier(event.target.value)}>
                                <FormControlLabel value="free" control={<Radio />} label="Free" />
                                <FormControlLabel value="pro" disabled control={<Radio />} label="Pro" />
                                <FormControlLabel value="pro+" disabled control={<Radio/>} label="Pro+" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
                  </form>
                </GridItem>
                <Grid item xs={12} md={12} lg={12}>
                  {/* {message && <p className={classes.message}>{message}</p>} */}
                </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      style={{margin: '20px 10px', width: '96%'}}
                      className={classes.registerBtn}
                      variant="contained"
                      color="secondary"
                      type="submit">
                        Update User Information
                    </Button>
                  </Grid>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card className={classes.userCardAutoH}>
            <CardBody>
              <Grid item xs={12} md={12} lg={12}>
                <h5 className={classes.bodyTitle}>Account Settings</h5>
              </Grid>
              <UserSettings />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
}
export default Settings;
