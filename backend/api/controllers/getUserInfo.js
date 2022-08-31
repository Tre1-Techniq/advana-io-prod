const express = require("express");
const app = express();
const axios = require("axios");

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

var verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-tyofb4m1.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://portal-users-api.io",
  issuer: "https://dev-tyofb4m1.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(verifyJwt);

// Get Portal User Info
getUserInfo = function (req, res) {
  const accessToken = req.headers.authorization.split([" "])[1];
  const response = axios.get("https://dev-tyofb4m1.us.auth0.com/userInfo", {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const userInfo = response.data;
  const manuEndpoint = "https://user.metadata.io/manufacturer";
  const manuName = `${userInfo[manuEndpoint]}`;

  console.log("MANU NAME: ", manuName);
  res.send("MANUFACTURER: ", manuName);
  // return manuName;
  getUserInfo();
};

// request(optionsM2M, function (error, response, body) {
//   if (error) throw new Error(error);

//   const accessTokenRaw = JSON.parse(body);
//   const accessToken = accessTokenRaw["access_token"];

//   console.log("ACCESS TOKEN: ", accessToken);

//   const optionsAPI = {
//     method: "GET",
//     url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users",
//     headers: { authorization: `Bearer ${accessToken}` },
//   };

//   axios(optionsAPI)
//     .then((response) => {
//       console.log(response.data);
//       // res.send(response.data);
//       console.log("USERS: ", response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

module.exports = getUserInfo;
