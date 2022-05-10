"use strict";

function main() {
  // Import the Google Cloud client library
  const { BigQuery } = require("@google-cloud/bigquery");

  async function queryHomekpi() {
    // Queries a Advana Portal Home KPI dataset.

    // Create a client
    const bigqueryClient = new BigQuery();

    // The SQL query to run
    const sqlQuery = `SELECT *
            FROM \`advana-data-infra.portal-data-test.sportal-home-kpi\`
            ORDER BY SalesCount DESC`;

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: "US",
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);

    console.log("Rows:");
    rows.forEach((row) => console.log(row));
  }

  queryHomekpi();
}

main();
