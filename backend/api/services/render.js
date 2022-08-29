const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

// Get Access Token
var options = {
  method: "POST",
  url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.AUTH0_MGMNT_CLIENT_ID,
    client_secret: process.env.AUTH0_MGMNT_CLIENT_SECRET,
    audience: "https://dev-tyofb4m1.us.auth0.com/api/v2/",
  }),
};

exports.homeRoutes = (req, res) => {
  // Make request to Auth0 user Management API v2
  axios
    .request(options)
    .then(function (response) {
      const accessToken = response.data.access_token;
      //   console.log("accessToken: ", accessToken);

      var opts = {
        method: "GET",
        url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      };

      axios
        .request(opts)
        .then(function (response) {
          //   console.log(response.data);
          res.render("index", { users: response.data });
        })
        .catch(function (error) {
          console.error(error);
        });
    })
    .catch(function (error) {
      console.error(error);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  const id = req.query.id;
  // Make request to Auth0 user Management API v2
  axios
    .request(options)
    .then(function (response) {
      const accessToken = response.data.access_token;
      //   console.log("accessToken: ", accessToken);

      var opts = {
        method: "GET",
        url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users",
        params: { id: response.data.sub },
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      };

      axios
        .request(opts)
        .then(function (userdata) {
          res.render("update_user", { user: userdata.data });
        })
        .catch(function (error) {
          console.error(error);
        });
    })
    .catch(function (error) {
      console.error(error);
    });
};
