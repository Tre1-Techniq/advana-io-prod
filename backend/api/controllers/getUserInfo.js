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
    jwksUri: "https://auth.advana.io/.well-known/jwks.json",
  }),
  audience: "https://portal-users-api.io",
  issuer: "https://auth.advana.io/",
  algorithms: ["RS256"],
});

app.use(verifyJwt);

// Get Portal User Info
getUserInfo = async function (req, res) {
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

    console.log("MANU NAME: ", manuName);
    return manuName;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUserInfo;
