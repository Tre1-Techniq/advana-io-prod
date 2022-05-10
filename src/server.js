const axios = require("axios");

const options = { 
  method: "GET",
  url: "https://bq-kpi-api/",
  headers: { "authorization": "Bearer TOKEN" },
};

axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
