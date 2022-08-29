const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

var opts = {
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
