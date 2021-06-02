/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';

import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import { withStyles } from "@material-ui/core/styles";

const Form = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="username"
        formFields={[
          {
            type: "username",
            label: "USERNAME*",
            placeholder: "create a username",
            inputProps: { required: true, autocomplete: "username" },
          },
          {
            type: "email",
            label: "EMAIL*",
            placeholder: "enter your email",
            inputProps: { required: true, autocomplete: "email" },
          },
          {
            type: "password",
            label: "PASSWORD*",
            placeholder: "create a password",
            inputProps: { required: true, autocomplete: "new-password" },
          },
        ]} 
      />
      <AmplifySignIn slot="sign-in" usernameAlias="username" />
    </AmplifyAuthenticator>
  );
};

const useStyles = (theme) => ({
  toast: {
    display: 'flex',
    top: theme.spacing(3),
    left: "0px",
    margin: "0 auto !important",
    width: "40% !important",
  },
});

export default withStyles(useStyles)(Form);
