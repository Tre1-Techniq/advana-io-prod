const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");

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

router.get("/", verifyJwt, userController.getUsers);
router.get("/setConfig", verifyJwt, userController.setConfig);
router.get("/getEmbedToken", verifyJwt, userController.getEmbedToken);

module.exports = router;
