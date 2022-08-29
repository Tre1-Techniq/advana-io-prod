const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

// Import the Google Cloud client library
const { BigQuery } = require("@google-cloud/bigquery");
// Create a client
const bigqueryClient = new BigQuery();

// Define paths for config
let embedToken = require("./embedConfigService.js");
const utils = require("./utils.js");

const pbi_set_config = async function (req, res) {
  try {
    // Get Access Token
    var opts = {
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

    axios
      .request(opts)
      .then(function (response) {
        const accessToken = response.data.access_token;
        console.log("accessToken: ", accessToken);

        var opt = {
          method: "GET",
          url: "https://dev-tyofb4m1.us.auth0.com/userinfo",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
        };

        axios
          .request(opt)
          .then(function (res) {
            console.log(res.data);
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
                        WHERE Manufacturer = @Manufacturer
                        `;

    const options = {
      query: sqlQuery,
      // Location must match the dataset(s) referenced in the query.
      location: "us-east1",
      params: { Manufacturer: "Frito-Lay" },
      //   params: { Manufacturer: `${manufacturer}` },
    };

    const [queryRes] = await bigqueryClient.query(options);

    // Set config based on Auth0 user attr
    let result = await queryRes[0];

    res.status(200).send(result);
    return result;
  } catch (error) {
    res.status(result.status).send(error.message);
  }
};

const pbi_get_embed_token = async function (req, res) {
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

module.exports = {
  pbi_set_config,
  pbi_get_embed_token,
};
