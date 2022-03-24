'use strict';

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});    

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});
 
var eventdata;
var role;

const USER_POOL_ID = process.env.USER_POOL_ID;
const APP_CLIENT_ID = process.env.APP_CLIENT_ID;
 
exports.handler = function(event, context, callback) { 
    let date = new Date();
                            
    console.log(event);

    eventdata = event.bodyjson;
    role = eventdata.role;
    var params = {
        UserPoolId: USER_POOL_ID,
        Username: eventdata.email, 
        DesiredDeliveryMediums: ["EMAIL"],
        //TemporaryPassword: eventdata.temppass,
        UserAttributes: [
          {
            // Don't verify email addresses
            Name: "email_verified",
            Value: "true"
          },
          {
            Name: "email",
            Value: email
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
            Name: "custom:parentcompany",
            Value: parentcompany
          },
          {
            Name: "custom:manufacturer",
            Value: manufacturer
          },
          {
            Name: "custom:tier",
            Value: tier
          },
          {
            Name: "custom:role",
            Value: role
          },
          {
            Name: "custom:segment",
            Value: segment
          },
        ],
      };
      /*Cognito Admin User Add Function*/
      cognitoidentityserviceprovider.adminCreateUser(params, function(err, data) {
        if (err){
                console.log(err, err.stack);
        }else{
                console.log(data);
        }           
      });
};
