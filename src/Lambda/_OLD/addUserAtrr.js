/* eslint-disable-line */ 
const aws = require('aws-sdk');
exports.handler = async (event, context, callback) => {
    const cisp = new aws.CognitoIdentityServiceProvider({
      apiVersion: '2016-04-18',
    });
    const updateParams = {
      UserAttributes: [
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
      ],
      UserPoolId: 'us-east-1_BLIvGOWaC',
      Username: event.email,
    };
    try {
      await cisp.adminUpdateUserAttributes(updateParams).promise();
      callback(null, event);
    } catch (e) {
      callback(e);
    }
  };
