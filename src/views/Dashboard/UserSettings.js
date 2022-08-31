import React, { useState, useEffect } from 'react';

import { useAuth0 } from "@auth0/auth0-react";

//Material UI Styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../advanaTheme";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

const useStyles = makeStyles(styles);

const UserSettings = () => {
  const classes = useStyles();

  const { user } = useAuth0();
  const { name, picture, email } = user;
  const [ newBio, setNewBio ] = useState("");

  const { getAccessTokenSilently } = useAuth0();

  async function getAccessToken() {
    const token = await getAccessTokenSilently();
  }

  useEffect(() => {
    getAccessToken();
  },[]);
  
  const namespace = 'https://user.metadata';
  const company = `${namespace}/manufacturer`;
  const fName= `${namespace}/givenname`;
  const lName= `${namespace}/familyname`;
  const metaBio= `${namespace}/bio`;
  const metaTitle= `${namespace}/title`;
  const access = `${namespace}/access`;
  const userAccess = `${user[access]}`;
  const companyName = `${user[company]}`;
  const firstName = `${user[fName]}`;
  const lastName = `${user[lName]}`;
  const bio = `${user[metaBio]}`;
  const title = `${user[metaTitle]}`;

  const roles = `${namespace}/roles`;
  const rolesList = `${user[roles]}`;

  const handleSubmit = function() {
    setNewBio();
  }

  return (
    <ThemeProvider theme={advanaTheme}>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div className="author" lg="6" md="6" xs="6">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className={classes.cardProfileImg}
                        src={picture}
                      />
                      <h5 className="title"><strong>{firstName} {lastName}</strong></h5>
                    </a>
                    <p className="description text-left">
                     {title}
                    </p>
                    <p className="description">{email}</p>
                  </div>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="6" md="6" xs="6">
                        <h5>
                          Company <br />
                          <small>{companyName}</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="6" md="6" xs="6">
                        <h5>
                          Access <br />
                          <small>{userAccess}</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit User Profile <small>(Disabled)</small></CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Company</label>
                          <Input
                            defaultValue={companyName}
                            disabled
                            placeholder={companyName}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input disabled defaultValue={email} placeholder={email} type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            disabled
                            defaultValue={firstName}
                            placeholder={firstName}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            disabled
                            defaultValue={lastName}
                            placeholder={lastName}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue="Melbourne"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="Australia"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="92618" type="number" />
                        </FormGroup>
                      </Col>
                    </Row> */}
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Title</label>
                          <Input
                            disabled
                            type="text"
                            defaultValue={title}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          disabled
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onSubmit={() => handleSubmit()}
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
    </ThemeProvider>
  );
};

export default UserSettings;
