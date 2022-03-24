const AWS = require('aws-sdk');
/*Initializing CognitoIdentityServiceProvider from AWS SDK JS*/
const cognito = new AWS.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-18",
});

exports.handler = async (event) => {
  let date = new Date();
  const firstname = event.request.userAttributes['custom:firstname'];
  const lastname = event.request.userAttributes['custom:lastname'];
  const email = event.request.userAttributes.email;
  const company = event.request.userAttributes['custom:company'];
  const manufacturer = event.request.userAttributes['custom:manufacturer'];
  const tier = event.request.userAttributes['custom:tier'];
    const cognitoParams = {
        UserPoolId: 'us-east-1_ugO1KMyxn',
        DesiredDeliveryMediums: [ "EMAIL" ],
        Username: email,
        TemporaryPassword: 'T3mpP@ss!',
        ForceAliasCreation: 'True',
        UserAttributes: [
          {
            // Don't verify email addresses
            Name: "email_verified",
            Value: "true"
          },
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
            Name: "custom:manufacturer",
            Value: manufacturer
          },
          {
            Name: "custom:tier",
            Value: tier
          },
        ],
    };

    let response = await cognito.adminCreateUser(cognitoParams).promise();
    console.log(JSON.stringify(response, null, 2));
}
