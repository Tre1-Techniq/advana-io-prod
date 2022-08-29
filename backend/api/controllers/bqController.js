const axios = require("axios");

// Import the Google Cloud client library
const { BigQuery } = require("@google-cloud/bigquery");
// Create a client
const bigqueryClient = new BigQuery();

const bq_get_home_kpi = async function (req, res) {
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
    const manuName = `${userInfo[manuEndpoint]}`;

    // const date = new Date();
    // const month = date.getMonth() + 1;

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
        params: { Manufacturer: `${manuName}`, Month: 11 },
      };

      const [queryRes] = await bigqueryClient.query(options);

      return res.json(queryRes);
    }

    queryHomeKpi();
  } catch (error) {
    res.send(error.message);
  }
};

const bq_get_top5_skus = async (req, res) => {
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
  const manuName = `${userInfo[manuEndpoint]}`;

  // const date = new Date();
  // const month = date.getMonth() + 1;

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
      params: { Manufacturer: `${manuName}`, Month: 11 },
    };

    const [queryRes] = await bigqueryClient.query(options);

    return res.json(queryRes);
  }

  queryTop5Skus();
};

const bq_get_campaigns = (req, res) => {
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
};

module.exports = {
  bq_get_home_kpi,
  bq_get_top5_skus,
  bq_get_campaigns,
};
