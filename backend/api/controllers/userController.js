const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
// const user = require('../models/');
const dotenv = require("dotenv");
dotenv.config();

// const { expressjwt: jwt } = require("express-jwt");
// const jwks = require("jwks-rsa");

// var verifyJwt = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://auth.advana.io/.well-known/jwks.json",
//   }),
//   audience: "https://portal-users-api.io",
//   issuer: "https://auth.advana.io/",
//   algorithms: ["RS256"],
// });

// Define paths for config
let path = require("path");
let embedToken = require("./embedConfigService.js");
const utils = require("./utils.js");

// Prepare server for Bootstrap, jQuery and PowerBI files
app.use("/js", express.static("./node_modules/powerbi-client/dist/")); // Redirect JS PowerBI

module.exports.getUsers = (req, res) => {
  try {
    // TO-DO: Transfer User CRUD Logic
    res.send("Auth0 Users Backend API");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports.setConfig = async function (req, res) {
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

    fs.writeFile("controllers/config/config.json", configJSON, (err) => {
      if (err) throw err;

      console.log("CONFIG FILE WRITTEN!");
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports.getEmbedToken = async function (req, res) {
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
};
