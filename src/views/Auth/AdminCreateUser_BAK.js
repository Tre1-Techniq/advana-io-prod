//import { CognitoIdentityProviderClient, AddCustomAttributesCommand } from "@aws-sdk/client-cognito-identity-provider";

const AWS = require("aws-sdk");
const cognito = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

const { USER_POOL_ID, USER_POOL_CLIENT_ID } = process.env;
​
// userId - our user record index key
// email - the new user's email address
// password - the new user's password
function createCognitoUser(email, password, first_name, last_name, company, manufacturer, role, tier) {
  let params = {
    UserPoolId: USER_POOL_ID, // From Cognito dashboard 'Pool Id'
    Username: email,
    //MessageAction: "SUPPRESS", // Do not send welcome email
    TemporaryPassword: password,
    UserAttributes: [
      {
        // Don't verify email addresses
        Name: "email_verified",
        Value: "true"
      },
      {
        Name: "custom:first_name",
        Value: first_name
      },
      {
        Name: "custom:last_name",
        Value: last_name
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
        Name: "custom:manufacturer",
        Value: manufacturer
      },
      {
        Name: "custom:role",
        Value: role
      },
      {
        Name: "custom:tier",
        Value: tier
      },
    ]
  };
​
  return cognito
    .adminCreateUser(params)
    .promise()
    .then(data => {
      // We created the user above, but the password is marked as temporary.
      // We need to set the password again. Initiate an auth challenge to get
      // started.
      let params = {
        AuthFlow: "ADMIN_NO_SRP_AUTH",
        ClientId: USER_POOL_CLIENT_ID, // From Cognito dashboard, generated app client id
        UserPoolId: USER_POOL_ID,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password
        }
      };
      return cognito.adminInitiateAuth(params).promise();
    })
    .then(data => {
      // We now have a proper challenge, set the password permanently.
      let challengeResponseData = {
        USERNAME: email,
        NEW_PASSWORD: password
      };
​
      let params = {
        ChallengeName: "NEW_PASSWORD_REQUIRED",
        ClientId: USER_POOL_CLIENT_ID,
        UserPoolId: USER_POOL_ID,
        ChallengeResponses: challengeResponseData,
        Session: data.Session
      };
      return cognito.adminRespondToAuthChallenge(params).promise();
    })
    .catch(console.error);
}
