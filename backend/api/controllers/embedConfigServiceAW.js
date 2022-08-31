// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------
const axios = require("axios");

// const config = require("./config/config.json");
const auth = require(__dirname + "/authentication.js");
const utils = require(__dirname + "/utils.js");
const PowerBiReportDetails = require(__dirname +
  "/../models/embedReportConfig.js");
const EmbedConfig = require(__dirname + "/../models/embedConfig.js");

const fetch = require("node-fetch");

/**
 * Generate embed token and embed urls for reports
 * @return Details like Embed URL, Access token and Expiry
 */

async function getEmbedInfo(req, res) {
  // Get the Report Embed details
  try {
    const response = await axios.get("http://localhost:4000/pbi/setConfigAW");

    const config = response.data;
    // console.log("RID: ", config.reportId);

    const embedParams = await getEmbedParamsForSingleReport(
      config.workspaceId,
      config.reportId
    );

    return {
      accessToken: embedParams.embedToken.token,
      embedUrl: embedParams.reportsDetail,
      expiry: embedParams.embedToken.expiration,
      status: 200,
    };
  } catch (err) {
    return {
      status: err.status,
      error: `Error while retrieving report embed details\r\n${
        err.statusText
      }\r\nRequestId: \n${err.headers.get("requestid")}`,
    };
  }
}

/**
 * Get embed params for a single report for a single workspace
 * @param {string} workspaceId
 * @param {string} reportId
 * @param {string} additionalDatasetId - Optional Parameter
 * @return EmbedConfig object
 */
async function getEmbedParamsForSingleReport(
  workspaceId,
  reportId,
  additionalDatasetId
) {
  const reportInGroupApi = `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports/${reportId}`;
  const headers = await getRequestHeader();

  // Get report info by calling the PowerBI REST API
  const result = await fetch(reportInGroupApi, {
    method: "GET",
    headers: headers,
  });

  if (!result.ok) {
    throw result;
  }

  // Convert result in json to retrieve values
  const resultJson = await result.json();

  // Add report data for embedding
  const reportDetails = new PowerBiReportDetails(
    resultJson.id,
    resultJson.name,
    resultJson.embedUrl
  );
  const reportEmbedConfig = new EmbedConfig();

  // Create mapping for report and Embed URL
  reportEmbedConfig.reportsDetail = [reportDetails];

  // Create list of datasets
  let datasetIds = [resultJson.datasetId];

  // Append additional dataset to the list to achieve dynamic binding later
  if (additionalDatasetId) {
    datasetIds.push(additionalDatasetId);
  }

  // Get Embed token multiple resources
  reportEmbedConfig.embedToken =
    await getEmbedTokenForSingleReportSingleWorkspace(
      reportId,
      datasetIds,
      workspaceId
    );
  return reportEmbedConfig;
}

/**
 * Get Embed token for single report, multiple datasets, and an optional target workspace
 * @param {string} reportId
 * @param {Array<string>} datasetIds
 * @param {string} targetWorkspaceId - Optional Parameter
 * @return EmbedToken
 */
async function getEmbedTokenForSingleReportSingleWorkspace(
  reportId,
  datasetIds,
  targetWorkspaceId
) {
  // Add report id in the request
  let formData = {
    reports: [
      {
        id: reportId,
      },
    ],
  };

  // Add dataset ids in the request
  formData["datasets"] = [];
  for (const datasetId of datasetIds) {
    formData["datasets"].push({
      id: datasetId,
    });
  }

  // Add targetWorkspace id in the request
  if (targetWorkspaceId) {
    formData["targetWorkspaces"] = [];
    formData["targetWorkspaces"].push({
      id: targetWorkspaceId,
    });
  }

  const embedTokenApi = "https://api.powerbi.com/v1.0/myorg/GenerateToken";
  const headers = await getRequestHeader();

  // Generate Embed token for single report, workspace, and multiple datasets. Refer https://aka.ms/MultiResourceEmbedToken
  const result = await fetch(embedTokenApi, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(formData),
  });

  if (!result.ok) throw result;
  return result.json();
}

/**
 * Get Request header
 * @return Request header with Bearer token
 */
async function getRequestHeader() {
  // Store authentication token
  let tokenResponse;

  // Store the error thrown while getting authentication token
  let errorResponse;

  // Get the response from the authentication request
  try {
    tokenResponse = await auth.getAccessToken();
  } catch (err) {
    if (
      err.hasOwnProperty("error_description") &&
      err.hasOwnProperty("error")
    ) {
      errorResponse = err.error_description;
    } else {
      // Invalid PowerBI Username provided
      errorResponse = err.toString();
    }
    return {
      status: 401,
      error: errorResponse,
    };
  }

  // Extract AccessToken from the response
  const token = tokenResponse.accessToken;
  return {
    "Content-Type": "application/json",
    Authorization: utils.getAuthHeader(token),
  };
}

module.exports = {
  getEmbedInfo: getEmbedInfo,
};
