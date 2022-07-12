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
  const [ gsUsers, setGsUsers ] = useState([]);
  const [gsUserId, setGsUserId] = useState('');
  const [gsUserEmail, setGsUserEmail] = useState('');
  const [gsUserFName, setGsUserFName] = useState('');
  const [gsUserLName, setGsUserLName] = useState('');
  const [gsUserAccess, setGsUserAccess] = useState('brand');
  const [gsUserTitle, setGsUserTitle] = useState('');
  const [gsUserPhone, setGsUserPhone] = useState('');
  const [gsUserCustId, setGsUserCustId] = useState('');
  const [gsUserIsAdmin, setGsUserIsAdmin] = useState(false);

  const classes = useStyles();

  const { user, getAccessTokenSilently } = useAuth0();

  const dotenv =  require("dotenv");
  dotenv.config();

  async function getAccessToken() {
    const token = await getAccessTokenSilently();
  }

  useEffect(() => {
    getAccessToken();
    getGsUsers();
  },[]);

  async function getGsUsers() {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get("http://localhost:4000/user-reg-form", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setGsUsers(res.data.values);
      };

      console.log("GS USERS: ", res.data.values);
    } catch (error) {
      console.log("API ERROR: ", error.message)
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <>
    <ThemeProvider theme={advanaTheme}>
      <div className={classes.adminWrapper}>
        <Grid container>
          <Grid item className={classes.userList} xs={12} md={12} lg={12}>
            <Card className={classes.dashCardAutoH}>
              <CardBody>
                <Grid item xs={12} md={12} lg={12}>
                  <h5 className={classes.bodyTitle}>User List</h5>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  { gsUsers.map((item, index) => <div name={item.user_first_name} id={item.user_last_name} key={index}>
                    <>
                      <Grid item xs={12} md={12} lg={3}>
                          {gsUsers.gsUserFName}
                      </Grid>
                      <Grid item xs={12} md={12} lg={3}>
                          {' ' + gsUsers.gsUserLName}
                      </Grid>
                      <Grid item xs={12} md={12} lg={3}>
                          {gsUsers.gsUserEmail}
                      </Grid>
                      <Grid item xs={12} md={12} lg={3}>
                          {gsUsers.gsUserCustId}
                      </Grid>
                    </>
                  </div>) }

                </Grid>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
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
                                name="gsUserFName"
                                onChange={event => setGsUserFName(event.target.value)}
                                placeholder="First Name"
                                value={gsUserFName}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="gsUserLName"
                                onChange={event => setGsUserLName(event.target.value)}
                                placeholder="Last Name"
                                value={gsUserLName}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="gsUserTitle"
                                onChange={event => setGsUserTitle(event.target.value)}
                                placeholder="Title"
                                value={gsUserTitle}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="gsUserId"
                                onChange={event => setGsUserId(event.target.value)}
                                placeholder="User ID"
                                value={gsUserId}
                              />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Input
                                className={classes.registerText}
                                name="gsUserEmail"
                                onChange={event => setGsUserEmail(event.target.value)}
                                placeholder="eMail"
                                value={gsUserEmail}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      <Grid container>
                      <Grid item xs={12} md={12} lg={12}>
                        <div className={classes.registerRadioGroup}>
                          <Grid item xs={12} md={12} lg={12}>
                            <FormControl className={classes.formControl}>
                              <FormLabel component="legend">Access</FormLabel>
                              <RadioGroup row aria-label="gsUserAccess" name="gsUserAccess" value={gsUserAccess} onChange={(event) => setGsUserAccess(event.target.value)}>
                                <FormControlLabel value="brand" control={<Radio />} label="Brand" />
                                <FormControlLabel value="operator" control={<Radio />} label="Operator" />
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
