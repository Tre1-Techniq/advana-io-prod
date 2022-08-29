// Use Require and Import Together
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const axios = require("axios").default;
const dotenv = require("dotenv");
dotenv.config();

var options = {
  method: "POST",
  url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.AUTH0_M2M_CLIENT_ID,
    client_secret: process.env.AUTH0_M2M_SECRET,
    audience: "https://dev-tyofb4m1.us.auth0.com/api/v2/",
  }),
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

// app.get("/api/setConfig", verifyJwt, async function (req, res) {
//   res.header("Access-Control-Allow-Origin", "*");
//   try {
//     const accessToken = req.headers.authorization.split([" "])[1];
//     const response = await axios.get(
//       "https://dev-tyofb4m1.us.auth0.com/userInfo",
//       {
//         headers: {
//           authorization: `Bearer ${accessToken}`,
//           "Access-Control-Allow-Origin": "*",
//         },
//       }
//     );

//     const userInfo = response.data;
//     const manuEndpoint = "https://user.metadata.io/manufacturer";
//     const manufacturer = `${userInfo[manuEndpoint]}`;
//     const pbiSentryGroup = "https://user.metadata.io/pbiSentryGroup";
//     const workspaceId = `${userInfo[pbiSentryGroup]}`;
//     const pbiSentryReport = "https://user.metadata.io/pbiSentryReport";
//     const reportId = `${userInfo[pbiSentryReport]}`;

//     console.log("MANUFACTURER: ", manufacturer);
//     console.log("WORKSPACE ID: ", workspaceId);
//     console.log("REPORT ID: ", reportId);

//     const configData = {
//       authenticationMode: process.env.POWERBI_AUTH_MODE,
//       authorityUri: process.env.POWERBI_AUTH_URI,
//       scope: process.env.POWERBI_SCOPE,
//       apiUrl: process.env.POWERBI_API_URI,
//       clientId: process.env.POWERBI_CLIENT_ID,
//       workspaceId: workspaceId,
//       reportId: reportId,
//       clientSecret: process.env.POWERBI_CLIENT_SECRET,
//       tenantId: process.env.POWERBI_TENANT_ID,
//     };

//     const configJSON = JSON.stringify(configData);

//     fs.writeFile("config/config.json", configJSON, (err) => {
//       if (err) throw err;

//       console.log("CONFIG FILE WRITTEN!");
//     });
//   } catch (error) {
//     res.send(error.message);
//   }
// });
