const express = require("express");
const router = express.Router();

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

// router.get("/getUser", verifyJwt, pbiController.pbi_get_user);

router.get("/setConfig", pbiController.pbi_set_config);

router.get("/getEmbedToken", pbiController.pbi_get_embed_token);

router.get("/sentry", pbiController.pbi_get_report);

module.exports = router;
