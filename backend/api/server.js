"use strict";

// Use Require and Import Together
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

// const bodyParser = require("body-parser");

const app = express();

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

// Enable CORS for all methods
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const port = process.env.PORT || 4040;

// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

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
}).unless({ path: ["/"] });

app.use(verifyJwt);

app.get("/", (req, res) => {
  res.send("BigQuery API Root Route!");
});

// app.all("*", (req, res) => res.send("Route does not exist!"));

app.get("/homekpi", (req, res) => {
  console.log(res.data);
  // Import the Google Cloud client library
  const { BigQuery } = require("@google-cloud/bigquery");

  async function queryHomeKpi() {
    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT *
            FROM \`advana-data-infra.portal_data_test.portal-home-kpi\`
            `;

    const options = {
      query: sqlQuery,
      // Location must match the dataset(s) referenced in the query.
      location: "us-east1",
    };

    const [queryRes] = await bigqueryClient.query(options);

    return res.json(queryRes);
  }

  queryHomeKpi();
});

app.get("/top5skus", (req, res) => {
  // Import Google Cloud client library
  const { BigQuery } = require("@google-cloud/bigquery");

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
    };

    const [queryRes] = await bigqueryClient.query(options);

    return res.json(queryRes);
  }

  queryTop5Skus();
});

app.get("/campaigns", verifyJwt, (req, res) => {
  // Import Google Cloud client library
  const { BigQuery } = require("@google-cloud/bigquery");

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
