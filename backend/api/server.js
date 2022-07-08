"use strict";

const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const axios = require("axios");

const app = express();
app.use(cors());

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
            `;

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: "us-east1",
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
            `;

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: "us-east1",
    };

    const [queryRes] = await bigqueryClient.query(options);

    return res.json(queryRes);
  }

  queryTop5Skus();
});

app.get("/campaigns", (req, res) => {
  require("dotenv").config();
  // Import the Google Cloud client library
  const { BigQuery } = require("@google-cloud/bigquery");

  async function queryCampaigns() {
    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
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

app.listen(4000, () => {
  console.log("Backend is started on port 4000!");
});
