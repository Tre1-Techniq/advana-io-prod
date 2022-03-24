var axios = require("axios").default;

var options = {
  method: 'PATCH',
  url: 'https://dev-tyofb4m1.us.auth0.com/api/v2/tenants/settings',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer API2_ACCESS_TOKEN',
    'cache-control': 'no-cache'
  },
  data: {default_redirection_uri: 'https://dev-tyofb4m1.us.auth0.com/authorize'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
