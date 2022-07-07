var axios = require("axios").default;
require("dotenv").config();

var options = {
  method: "POST",
  url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_M2M_SECRET,
    audience: "https://dev-tyofb4m1.us.auth0.com/api/v2/",
  }),
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
