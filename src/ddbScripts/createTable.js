const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB({ region: "us-east-1" });

DynamoDB.createTable(
  {
    TableName: "AdvanaPortalData",
    AttributeDefinitions: [
      {
        AttributeName: "ParentCompany",
        AttributeType: "S",
      },
      {
        AttributeName: "Manufacturer",
        AttributeType: "S",
      },
    ],
    KeySchema: [
        { AttributeName: "ParentCompany", KeyType: "HASH" },
        { AttributeName: "Manufacturer", KeyType: "RANGE" },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  },
  function (err) {
    if (err) console.log(`Error creating table: ${err}`);
    else console.log("Table created succesfully!");
  }
);
