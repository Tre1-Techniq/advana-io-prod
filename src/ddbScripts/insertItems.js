const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB({ region: "us-east-1" });

const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, "./items.json"));
const portalData = JSON.parse(data);

const requests = portalData.map((kpi) => {
  return {
    PutRequest: {
      Item: kpi,
    },
  };
});

DynamoDB.batchWriteItem(
  {
    RequestItems: {
      AdvanaPortalData: requests,
    },
  },
  function (err, data) {
    if (err) console.log(`Error creating items: ${err}`);
    else if (data.UnprocessedItems.AdvanaPortalData)
      console.log(
        `Unprocessed items. Run again. ${JSON.stringify(data.UnprocessedItems)}`
      );
    else console.log(`Movie role items created successfully!`);
  }
);
