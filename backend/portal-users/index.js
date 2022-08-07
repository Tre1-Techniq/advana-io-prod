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

app.get("/users", jwtCheck, async function (req, res) {
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
    console.log(userInfo);
    res.send(userInfo);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Portal Users Backend => PORT: ${port}!`);
});
