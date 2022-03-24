'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { id , firstname, lastname, email, password, segment, company, role, tier } = JSON.parse(event.body);

  const params = {
    TableName: "PortalUsers",
    Item: {
      id: id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      segment: segment,
      company: company,
      role: role,
      tier: tier
    }
  };
  
  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(err) {
    responseBody = `Unable to put product: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*"
    },
    body: responseBody
  }

  return response;
};
