"use strict";

// Use Require and Import Together
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const { google } = require("googleapis");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
// const jwt = require("express-jwt");
// const jwks = require("jwks-rsa");
// const axios = require("axios");

const bodyParser = require("body-parser");

import userRoutes from "./routes/users.js";

var request = require("request");

var options = {
  method: "POST",
  url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    client_id: process.env.AUTH0_M2M_CLIENT_ID,
    client_secret: process.env.AUTH0_M2M_SECRET,
    audience: "https://dev-tyofb4m1.us.auth0.com/api/v2/",
    grant_type: "client_credentials",
  }),
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

const app = express();

// Enable CORS for all methods
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const port = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("dotenv").config();

app.use("/", userRoutes);

app.get("/user-reg-form", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
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

  app.listen(port, () => {
    console.log(`Backend is running on port ${port}!`);
  });
});
