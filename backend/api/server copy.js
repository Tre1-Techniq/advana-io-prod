const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

dotenv.config();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Define paths for config
let path = require("path");
let embedToken = require(__dirname + "/embedConfigService.js");
const utils = require(__dirname + "/utils.js");

// Prepare server for Bootstrap, jQuery and PowerBI files
app.use("/js", express.static("./node_modules/powerbi-client/dist/")); // Redirect JS PowerBI

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

// Import the Google Cloud client library
const { BigQuery } = require("@google-cloud/bigquery");
// Create a client
const bigqueryClient = new BigQuery();

// Enable CORS for all methods
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const port = process.env.PORT || 4040;

// console.log(process.env);

var verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://auth.advana.io/.well-known/jwks.json",
  }),
  audience: "https://portal-users-api.io",
  issuer: "https://auth.advana.io/",
  algorithms: ["RS256"],
});

app.get("/setConfig", verifyJwt, async function (req, res) {
  try {
    const accessToken = req.headers.authorization.split([" "])[1];
    const response = await axios.get(
      "https://dev-tyofb4m1.us.auth0.com/userInfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const userInfo = response.data;
    const manuEndpoint = "https://user.metadata.io/manufacturer";
    const manufacturer = `${userInfo[manuEndpoint]}`;
    const pbiSentryGroup = "https://user.metadata.io/pbiSentryGroup";
    const workspaceId = `${userInfo[pbiSentryGroup]}`;
    const pbiSentryReport = "https://user.metadata.io/pbiSentryReport";
    const reportId = `${userInfo[pbiSentryReport]}`;

    console.log("MANUFACTURER: ", manufacturer);
    console.log("WORKSPACE ID: ", workspaceId);
    console.log("REPORT ID: ", reportId);

    const configData = {
      authenticationMode: process.env.POWERBI_AUTH_MODE,
      authorityUri: process.env.POWERBI_AUTH_URI,
      scope: process.env.POWERBI_SCOPE,
      apiUrl: process.env.POWERBI_API_URI,
      clientId: process.env.POWERBI_CLIENT_ID,
      workspaceId: workspaceId,
      reportId: reportId,
      clientSecret: process.env.POWERBI_CLIENT_SECRET,
      tenantId: process.env.POWERBI_TENANT_ID,
    };

    const configJSON = JSON.stringify(configData);

    fs.writeFile("config/config.json", configJSON, (err) => {
      if (err) throw err;

      console.log("CONFIG FILE WRITTEN!");
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/getEmbedToken", verifyJwt, async function (req, res) {
  try {
    const accessToken = req.headers.authorization.split([" "])[1];
    const response = await axios.get(
      "https://dev-tyofb4m1.us.auth0.com/userInfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Validate whether all the required configurations are provided in config.json
    configCheckResult = utils.validateConfig();

    if (configCheckResult) {
      return res.status(400).send({
        error: configCheckResult,
      });
    }

    // Get the details like Embed URL, Access token and Expiry
    let result = await embedToken.getEmbedInfo();

    // result.status specified the statusCode that will be sent along with the result object
    res.status(result.status).send(result);
    // console.log("RESPONSE: ", response.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/users", (req, res) => {
  try {
    // TO-DO: Transfer User CRUD Logic
    res.send("Auth0 Users Backend API");
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/homekpi", verifyJwt, async function (req, res) {
  try {
    const accessToken = req.headers.authorization.split([" "])[1];
    const response = await axios.get(
      "https://dev-tyofb4m1.us.auth0.com/userInfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const userInfo = response.data;
    const manuEndpoint = "https://user.metadata.io/manufacturer";
    const manufacturer = `${userInfo[manuEndpoint]}`;

    // const date = new Date();
    // const month = date.getMonth() + 1;

    // Query Home KPI Data from BigQuery
    async function queryHomeKpi() {
      // The SQL query to run
      const sqlQuery = `SELECT *
              FROM \`advana-data-infra.portal_data_test.portal-home-kpi\`
              WHERE Manufacturer = @Manufacturer
              AND Month = @Month
              `;

      const options = {
        query: sqlQuery,
        // Location must match the dataset(s) referenced in the query.
        location: "us-east1",
        params: { Manufacturer: `${manufacturer}`, Month: 11 },
      };

      const [queryRes] = await bigqueryClient.query(options);

      return res.json(queryRes);
    }

    queryHomeKpi();
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/top5skus", verifyJwt, async (req, res) => {
  const accessToken = req.headers.authorization.split([" "])[1];
  const response = await axios.get(
    "https://dev-tyofb4m1.us.auth0.com/userInfo",
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const userInfo = response.data;
  const manuEndpoint = "https://user.metadata.io/manufacturer";
  const manufacturer = `${userInfo[manuEndpoint]}`;

  // const date = new Date();
  // const month = date.getMonth() + 1;

  async function queryTop5Skus() {
    // Create a client
    const bigqueryClient = new BigQuery();

    // SQL query
    const sqlQuery = `SELECT *
            FROM \`advana-data-infra.portal_data_test.portal-top5-skus\`
            `;

    const options = {
      query: sqlQuery,
      // Location must match the dataset(s) referenced in the query.
      location: "us-east1",
      params: { Manufacturer: `${manufacturer}`, Month: 11 },
    };

    const [queryRes] = await bigqueryClient.query(options);

    return res.json(queryRes);
  }

  queryTop5Skus();
});

app.get("/campaigns", verifyJwt, (req, res) => {
  async function queryCampaigns() {
    // Create a client
    const bigqueryClient = new BigQuery();

    // SQL query
    const sqlQuery = `SELECT *
            FROM \`advana-data-infra.portal_data_test.portal-campaign-list\`
            `;

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: "us-east1",
    };

    const [queryRes] = await bigqueryClient.query(options);

    return res.json(queryRes);
  }

  queryCampaigns();
});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error!";
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}!`);
});
