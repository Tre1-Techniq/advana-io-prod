const express = require("express");
const router = express.Router();

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

const pbiController = require("../controllers/pbiController");

const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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

router.get("/setConfig", pbiController.pbi_set_config);

router.get("/setConfigFL", pbiController.pbi_set_config_fl);

router.get("/setConfigAW", pbiController.pbi_set_config_aw);

router.get("/getEmbedToken", pbiController.pbi_get_embed_token);

router.get("/getEmbedTokenFL", pbiController.pbi_get_embed_token_fl);

router.get("/getEmbedTokenAW", pbiController.pbi_get_embed_token_aw);

router.get("/sentry", pbiController.pbi_get_report);

router.get("/sentry/frito-lay", pbiController.pbi_get_report_fl);

router.get("/sentry/awake", pbiController.pbi_get_report_aw);

module.exports = router;
