import React from 'react';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';

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

export default Form;
