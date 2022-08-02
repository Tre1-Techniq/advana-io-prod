var express = require("express");
var app = express();
const { expressjwt: jwt } = require("express-jwt");
var jwks = require("jwks-rsa");

const cors = require("cors");
var axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

var port = process.env.PORT || 8080;

// Enable CORS for all methods
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

var jwtCheck = jwt({
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

app.get("/", function (req, res) {
  res.json({ message: "Portal Users Root!" });
});

app.get("/users", jwtCheck, function (req, res) {
  var options = {
    method: "POST",
    url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.AUTH0_MGMNT_CLIENT_ID,
      client_secret: process.env.AUTH0_MGMNT_CLIENT_SECRET,
      audience: "https://portal-users-api.io",
      grant_type: "client_credentials",
      scope:
        "openid profile email read:users create:users read:user_idp_tokens read:current_user update:current_user_metadata",
    }),
  };

  var request = require("request");

  request(options, function (error, response, body) {
    if (error) throw new Error("ERROR: ", error);
    console.log("REQUEST BODY>> ", body);
  });
});

app.listen(port, () => {
  console.log(`Portal Users Backend => PORT: ${port}!`);
});
