const express = require("express");
const app = express();

const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const bodyParser = require("body-parser");

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
app.use("/js", express.static("./node_modules/bootstrap/dist/js/")); // Redirect bootstrap JS
app.use("/js", express.static("./node_modules/jquery/dist/")); // Redirect JS jQuery
app.use("/js", express.static("./node_modules/powerbi-client/dist/")); // Redirect JS PowerBI
app.use("/css", express.static("./node_modules/bootstrap/dist/css/")); // Redirect CSS bootstrap
app.use("/public", express.static("./public/")); // Use custom JS and CSS files

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

var verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-tyofb4m1.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://portal-users-api.io",
  issuer: "https://dev-tyofb4m1.us.auth0.com/",
  algorithms: ["RS256"],
});

app.get("/", (req, res) => {
  res.send("BigQuery API Root Route!");
});

app.get("/sentry", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/getEmbedToken", async function (req, res) {
  try {
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
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/users", verifyJwt, (req, res) => {
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
    // console.log("ACCESS TOKEN: ", accessToken);

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
