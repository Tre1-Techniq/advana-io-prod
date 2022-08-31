const dotenv = require("dotenv");
dotenv.config();

// Import the Google Cloud client library
const { BigQuery } = require("@google-cloud/bigquery");
// Create a client
const bigqueryClient = new BigQuery();

// Define paths for config
let path = require("path");
let embedToken = require(__dirname + "/embedConfigService.js");
let embedTokenFL = require(__dirname + "/embedConfigServiceFL.js");
let embedTokenAW = require(__dirname + "/embedConfigServiceAW.js");
const utils = require(__dirname + "/utils.js");

const pbi_get_user = (req, res) => {};

// Set Generic PBI User Config
const pbi_set_config = async (req, res) => {
  try {
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
  } catch (error) {
    res.send(error.message);
  }
};

// Set Frito-Lay PBI User Config
const pbi_set_config_fl = async (req, res) => {
  try {
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
  } catch (error) {
    res.send(error.message);
  }
};

// Set Frito-Lay PBI User Config
const pbi_set_config_aw = async (req, res) => {
  try {
    const sqlQuery = `SELECT *
                          FROM \`advana-data-infra.portal_data_test.config-pbi\`
                          Where Manufacturer = @Manufacturer
                          `;

    const opt = {
      query: sqlQuery,
      // Location must match the dataset(s) referenced in the query.
      location: "us-east1",
      params: { Manufacturer: "Awake" },
      // params: { Manufacturer: `${manufacturer}` },
    };

    const [queryRes] = await bigqueryClient.query(opt);

    // Set config based on Auth0 user attr
    const result = await queryRes[0];

    res.send(result);

    // return result;
  } catch (error) {
    res.send(error.message);
  }
};

// Get Generic PBI Embed token from
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

// Get Frito-Lay PBI Embed token from
const pbi_get_embed_token_fl = async (req, res) => {
  try {
    // Validate whether all the required configurations are provided in config.json
    configCheckResult = utils.validateConfig();
    if (configCheckResult) {
      return res.status(400).send({
        error: configCheckResult,
      });
    }
    // Get the details like Embed URL, Access token and Expiry
    let result = await embedTokenFL.getEmbedInfo();

    // result.status specified the statusCode that will be sent along with the result object
    res.status(result.status).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// Get Awake PBI Embed token from
const pbi_get_embed_token_aw = async (req, res) => {
  try {
    // Validate whether all the required configurations are provided in config.json
    configCheckResult = utils.validateConfig();
    if (configCheckResult) {
      return res.status(400).send({
        error: configCheckResult,
      });
    }
    // Get the details like Embed URL, Access token and Expiry
    let result = await embedTokenAW.getEmbedInfo();

    // result.status specified the statusCode that will be sent along with the result object
    res.status(result.status).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

// Generic PBI Embed HTML Template
const pbi_get_report = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
  } catch (error) {
    res.send(error.message);
  }
};

// Get Frito-Lay PBI Embed HTML Template
const pbi_get_report_fl = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname + "/../views/frito-lay.html"));
  } catch (error) {
    res.send(error.message);
  }
};

// Get Awake PBI Embed HTML Template
const pbi_get_report_aw = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname + "/../views/awake.html"));
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  // pbi_get_user,
  pbi_set_config,
  pbi_set_config_fl,
  pbi_set_config_aw,
  pbi_get_embed_token,
  pbi_get_embed_token_aw,
  pbi_get_embed_token_fl,
  pbi_get_report,
  pbi_get_report_fl,
  pbi_get_report_aw,
};
