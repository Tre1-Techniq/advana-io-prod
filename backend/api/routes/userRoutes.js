const express = require("express");
const router = express.Router();

const { requiresAuth } = require("express-openid-connect");

const userController = require("../controllers/userController");

const services = require("../services/render");

/**
 *  @description Root Route
 *  @method GET /
 */
router.get("/", services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
router.get("/add-user", services.add_user);

/**
 *  @description for update user
 *  @method GET /update-user
 */
router.get("/update-user", services.update_user);

// API
router.post(
  "https://dev-tyofb4m1.us.auth0.com/api/v2/users",
  userController.create
);
router.get(
  "https://dev-tyofb4m1.us.auth0.com/api/v2/users",
  userController.find
);
router.put(
  "https://dev-tyofb4m1.us.auth0.com/api/v2/users/:id",
  userController.update
);
router.delete(
  "https://dev-tyofb4m1.us.auth0.com/api/v2/users/:id",
  userController.delete
);

module.exports = router;
