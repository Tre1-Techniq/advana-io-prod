"use strict";

const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const axios = require("axios");

const app = express();
app.use(cors());

// const verifyJwt = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://dev-tyofb4m1.us.auth0.com/.well-known/jwks.json",
//   }),
//   audience: "https://portal-data-api",
//   issuer: "https://dev-tyofb4m1.us.auth0.com/",
//   algoritms: ["RS256"],
// });

// app.use(verifyJwt);

app.get("/", (req, res) => {
  res.send("Portal Backend ROOT");
});

app.get("/homekpi", (req, res) => {
  require("dotenv").config();
  // Import the Google Cloud client library
  const { BigQuery } = require("@google-cloud/bigquery");

  async function queryHomeKpi() {
    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT *
            FROM \`advana-data-infra.portal_data_test.portal-home-kpi\`
            WHERE (Manufacturer = "Frito-Lay") AND (Month = 11)
            `;

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: "us-east1",
      params: { Manufacturer: "Frito-Lay", Month: "11" },
    };

    const [queryRes] = await bigqueryClient.query(options);

    return res.json(queryRes);
  }

  queryHomeKpi();
});

app.get("/top5skus", (req, res) => {
  require("dotenv").config();
  // Import the Google Cloud client library
  const { BigQuery } = require("@google-cloud/bigquery");

  async function queryTop5Skus() {
    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT *
            FROM \`advana-data-infra.portal_data_test.portal-top5-skus\`
            WHERE Frito_Lay_Manufacturer = "Frito-Lay"
            `;

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: "us-east1",
      params: { Frito_Lay_Manufacturer: "Frito-Lay" },
    };

    const [queryRes] = await bigqueryClient.query(options);

    return res.json(queryRes);
  }

  queryTop5Skus();
});

app.listen(4000, () => {
  console.log("Backend is started on port 4000!");
});
