var AuthenticationClient = require("auth0").AuthenticationClient;

var auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  client_id: process.env.AUTH0_MGMNT_CLIENT_ID,
  client_secret: process.env.AUTH0_MGMNT_CLIENT_SECRET,
});

// Make request to Auth0 user Management API v2
// axios
//   .request(options)
//   .then(function (response) {
//     const accessToken = response.data.access_token;

//     var opts = {
//       method: "GET",
//       url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users/user_id",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${accessToken}`,
//       },
//     };

//     axios
//       .request(opts)
//       .then(function (req) {
//         console.log("RES DATA: ", req.data);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// auth0.clientCredentialsGrant(
//   {
//     client_id: process.env.AUTH0_MGMNT_CLIENT_ID,
//     client_secret: process.env.AUTH0_MGMNT_CLIENT_SECRET,
//     audience: "https://dev-tyofb4m1.us.auth0.com/api/v2/",
//     scope:
//       "openid email profile read:client_grants create:client_grants delete:client_grants update:client_grants read:users update:users delete:users create:users read:users_app_metadata update:users_app_metadata delete:users_app_metadata create:users_app_metadata read:user_idp_tokens",
//   },
//   function (err, response) {
//     if (err) {
//       console.log(err.message);
//     }
//     const accessToken = response.access_token;

//     var options = {
//       method: "GET",
//       url: "https://dev-tyofb4m1.us.auth0.com/userinfo",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${accessToken}`,
//       },
//     };

//     axios
//       .request(options)
//       .then(function (response) {
//         console.log("RES DATA: ", response.data);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });

//     // console.log(accessToken);
//   }
// );

async function setTenant() {
  // Initialize the Auth0 application
  const auth0 = new AuthenticationClient({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
    scope: "openid email profile",
  });

  // Request the Access Token
  auth0.clientCredentialsGrant(
    {
      client_id: process.env.AUTH0_MGMNT_CLIENT_ID,
      client_secret: process.env.AUTH0_MGMNT_CLIENT_SECRET,
      audience: "https://dev-tyofb4m1.us.auth0.com/api/v2/",
      scope:
        "read:client_grants create:client_grants delete:client_grants update:client_grants read:users update:users delete:users create:users read:users_app_metadata update:users_app_metadata delete:users_app_metadata create:users_app_metadata read:user_idp_tokens",
    },
    function (err, response) {
      if (err) {
        console.log(err.message);
      }
      const accessToken = response.access_token;
      console.log("//---- BEGIN ACCESS TOKEN ----//");
      console.log("ACCESS TOKEN: ", accessToken);
      console.log("//---- END ACCESS TOKEN ----//");
    }
  );
}
