const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

// Import the Google Cloud client library
const { BigQuery } = require("@google-cloud/bigquery");
// Create a client
const bigqueryClient = new BigQuery();

// Define paths for config
let path = require("path");
let embedToken = require(__dirname + "/embedConfigService.js");
const utils = require(__dirname + "/utils.js");

// Get Access Token
var options = {
  method: "POST",
  url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.AUTH0_MGMNT_CLIENT_ID,
    client_secret: process.env.AUTH0_MGMNT_CLIENT_SECRET,
    audience: "https://dev-tyofb4m1.us.auth0.com/api/v2/",
  }),
};

// Set PBI User Config
const pbi_set_config = async (req, res) => {
  try {
    async function setTenant() {
      // Make request to Auth0 user Management API v2
      axios
        .request(options)
        .then(function (response) {
          const accessToken = response.data.access_token;

          var opts = {
            method: "GET",
            url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users/user_id",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${accessToken}`,
            },
          };

          axios
            .request(opts)
            .then(function (response) {
              console.log("RES DATA: ", response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
        })
        .catch(function (error) {
          console.error(error);
        });

      const sqlQuery = `SELECT *
                          FROM \`advana-data-infra.portal_data_test.config-pbi\`
                          Where Manufacturer = @Manufacturer
                          `;

      const opt = {
        query: sqlQuery,
        // Location must match the dataset(s) referenced in the query.
        location: "us-east1",
        params: { Manufacturer: "Frito-Lay" },
        // params: { Manufacturer: `${manufacturer}` },
      };

      const [queryRes] = await bigqueryClient.query(opt);

      // Set config based on Auth0 user attr
      const result = await queryRes[0];

      res.send(result);

      // return result;
    }

    setTenant();
  } catch (error) {
    res.send(error.message);
  }
};

// Get PBI Embed token from
const pbi_get_embed_token = async (req, res) => {
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
};

// Get PBI Embed token from
const pbi_get_report = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  // pbi_get_user,
  pbi_set_config,
  pbi_get_embed_token,
  pbi_get_report,
};
