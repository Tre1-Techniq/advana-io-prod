"use strict";

// Use Require and Import Together
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const { google } = require("googleapis");

const cors = require("cors");
// const jwt = require("express-jwt");
// const jwks = require("jwks-rsa");
// const axios = require("axios");

const bodyParser = require("body-parser");

import userRoutes from "./routes/users.js";

const app = express();

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require("dotenv").config();

var request = require("request");

var options = {
  method: "POST",
  url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
  headers: { "content-type": "application/json" },
  body: '{"client_id":"UpBvv8QrA8G0YctuDtYWW8xstoPju6zX","client_secret":"2eI_QweMKxScycQyOVqQCwCtAHv8bWxnhqu4hhfU5vFbsw6hZKts4Y8ZunmeXxcc","audience":"https://dev-tyofb4m1.us.auth0.com/api/v2/","grant_type":"client_credentials"}',
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Portal Backend ROOT");
});

// app.all("*", (req, res) => res.send("Route does not exist!"));

app.get("/user-reg-form", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "../keys/portal-bigquery-key.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1HiLtvS_CqfSmtDzcgDRm831l6JZLCbJ2myv0SyT7WUU";

  // Get spreadsheet metadata
  // const userRegMetaData = await googleSheets.spreadsheets.get({
  //   auth,
  //   spreadsheetId,
  // });

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "user_dim!A:J",
  });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "user_dim!A:J",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [
          // "f",
          // "angela@advana.io",
          // "Angela",
          // "Quiterio",
          // "Brand",
          // "Operations",
          // "555-555-5555",
          // "fawake20",
          // "Nicole",
          // "Admin"
        ],
      ],
    },
  });

  res.send(getRows.data);
});

app.get("/homekpi", (req, res) => {
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

app.get("/campaigns", (req, res) => {
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

app.listen(port, () => {
  console.log(`Backend is running on port ${port}!`);
});
