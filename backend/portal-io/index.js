var express = require("express");
var app = express();
// var jwt = require("express-jwt");
const { expressjwt: expressJwt } = require("express-jwt");
var jwks = require("jwks-rsa");

var port = process.env.PORT || 8000;

var jwtCheck = expressJwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-tyofb4m1.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://portal-inputs",
  issuer: "https://dev-tyofb4m1.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(jwtCheck);

app.get("/user/portalinputs", function (req, res) {
  var request = require("request");

  var options = {
    method: "POST",
    url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
    headers: { "content-type": "application/json" },
    body: '{"client_id":"UpBvv8QrA8G0YctuDtYWW8xstoPju6zX","client_secret":"2eI_QweMKxScycQyOVqQCwCtAHv8bWxnhqu4hhfU5vFbsw6hZKts4Y8ZunmeXxcc","audience":"https://dev-tyofb4m1.us.auth0.com/api/v2/","grant_type":"client_credentials"}',
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});

app.get("/", function (req, res) {
  res.json("OK");
});

app.listen(port);
