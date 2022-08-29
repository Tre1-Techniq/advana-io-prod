const express = require("express");
const router = express.Router();

const bqController = require("../controllers/bqController");

const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Prepare server for Bootstrap, jQuery and PowerBI files
router.use("/js", express.static("./node_modules/powerbi-client/dist/")); // Redirect JS PowerBI

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

// Import the Google Cloud client library
const { BigQuery } = require("@google-cloud/bigquery");
// Create a client
const bigqueryClient = new BigQuery();

// Enable CORS for all methods
// router.use(cors());
// router.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// });

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

// router.options("*", cors());

router.get("/homekpi", verifyJwt, bqController.bq_get_home_kpi);

router.get("/top5skus", verifyJwt, bqController.bq_get_top5_skus);

router.get("/campaigns", verifyJwt, bqController.bq_get_campaigns);

module.exports = router;
