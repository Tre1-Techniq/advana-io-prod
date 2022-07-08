import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import axios from 'axios';

// Material UI Core Components
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from "../../components/Card/Card.js";
//import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
//import CardFooter from "../../components/Card/CardFooter.js";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const AddUser = () => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [parentcompany, setParentCompany] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [tier, setTier] = useState('free');
  const [role, setRole] = useState('user');
  const [segment, setSegment] = useState('brand');

  const classes = useStyles();

  const { user, getAccessTokenSilently } = useAuth0();

  const dotenv =  require("dotenv");
  dotenv.config();

  async function getAccessToken() {
    const token = await getAccessTokenSilently();
  }

  useEffect(() => {
    getAccessToken();
  },[]);

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <>
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.adminWrapper}>
        {/* <Grid container>
          <Grid item className={classes.userList} xs={12} md={12} lg={12}>
            <Card className={classes.dashCardAutoH}>
              <CardBody>
                <Grid item xs={12} md={12} lg={12}>
                  <h5 className={classes.bodyTitle}>User List</h5>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  { users.map(user => <div name={user.firstname} id={user.id} key={user.id}>
                    <>
                      <Grid item xs={12} md={12} lg={3}>
                          {user.firstname}
                      </Grid>
                      <Grid item xs={12} md={12} lg={3}>
                          {' ' + user.lastname}
                      </Grid>
                      <Grid item xs={12} md={12} lg={3}>
                          {user.email}
                      </Grid>
                      <Grid item xs={12} md={12} lg={3}>
                          {user.company}
                      </Grid>
                    </>
                  </div>) }

                </Grid>
              </CardBody>
            </Card>
          </Grid>
        </Grid> */}
        <Grid container>
          <Grid item xs={12} md={12} lg={12} className={classes.adminContainer}>
            <Grid container className={classes.formContainer}>
              <Grid item xs={12} md={12} lg={12}>
                <Card className={classes.dashCardAutoH}>
                  <CardBody>
                    <Grid item xs={12} md={12} lg={12}>
                      <h5 className={classes.bodyTitle}>Add User</h5>
                    </Grid>
                      <form onSubmit={submitHandler} className={classes.userForm} noValidate autoComplete="off">
                        <Grid container>
                          <Grid item xs={12} md={12} lg={12} className={classes.registerTextWrapper}>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="firstname"
                                onChange={event => setFirstName(event.target.value)}
                                placeholder="First Name"
                                value={firstname}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="lastname"
                                onChange={event => setLastName(event.target.value)}
                                placeholder="Last Name"
                                value={lastname}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="parentcompany"
                                onChange={event => setParentCompany(event.target.value)}
                                placeholder="Parent Company"
                                value={parentcompany}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="manufacturer"
                                onChange={event => setManufacturer(event.target.value)}
                                placeholder="Manufacturer"
                                value={manufacturer}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="email"
                                onChange={event => setEmail(event.target.value)}
                                placeholder="eMail"
                                value={email}
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
                              <RadioGroup row aria-label="segment" name="segment" value={segment} onChange={(event) => setSegment(event.target.value)}>
                                <FormControlLabel value="brand" control={<Radio />} label="Brand" />
                                <FormControlLabel value="operator" control={<Radio />} label="Operator" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                            <FormControl className={classes.formControl}>
                              <FormLabel component="legend">Role</FormLabel>
                              <RadioGroup row aria-label="role" name="role" value={role} onChange={(event) => setRole(event.target.value)}>
                                <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                <FormControlLabel value="manager" control={<Radio />} label="Manager" />
                                <FormControlLabel value="user" control={<Radio />} label="User" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                            <FormControl className={classes.formControl}>
                              <FormLabel component="legend">Tier</FormLabel>
                              <RadioGroup row aria-label="tier" name="tier" value={tier} onChange={(event) => setTier(event.target.value)}>
                                <FormControlLabel value="free" control={<Radio />} label="Free" />
                                <FormControlLabel value="pro" control={<Radio />} label="Pro" />
                                <FormControlLabel value="pro+" control={<Radio />} label="Pro+" />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
                  </form>
                    <Grid item xs={12} md={12} lg={12}>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} md={12} lg={12}>
                        <Button
                          className={classes.registerBtn}
                          variant="contained"
                          color="secondary"
                          type="submit">
                            Add User
                        </Button>
                      </Grid>
                    </Grid>
                  </CardBody>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
    </>
  )
}

export default AddUser;
