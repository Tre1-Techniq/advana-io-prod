const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const tokenEndpoint = "https://dev-tyofb4m1.us.auth0.com/oauth/token";
const userInfoEndpoint = "https://dev-tyofb4m1.us.auth0.com/userinfo";

const oAuth = (req, res, next) => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", process.env.AUTH0_MGMNT_CLIENT_ID);
  params.append("client_secret", process.env.AUTH0_MGMNT_CLIENT_SECRET);
  params.append("audience", "https://dev-tyofb4m1.us.auth0.com/api/v2/");
  params.append("scope", "read:users write:users");

  axios
    .post(tokenEndpoint, params)
    .then(async (response) => {
      req.oauth = response.data;
      const { access_token } = req.oauth;
      // console.log("OAUTH TOKEN: ", access_token);
      const result = await axios.get(
        "https://dev-tyofb4m1.us.auth0.com/api/v2/users",
        {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        }
      );

      const userInfo = result.data;
      //   console.log("USER INFO: ", userInfo);
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json(`REASON: ${err.message}`);
    });
};

module.exports = oAuth;
