const axios = require("axios");

// Get Access Token
var options = {
  method: "POST",
  url: "https://dev-tyofb4m1.us.auth0.com/oauth/token",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: new URLSearchParams({
    grant_type: "implicit",
    client_id: process.env.AUTH0_MGMNT_CLIENT_ID,
    client_secret: process.env.AUTH0_MGMNT_CLIENT_SECRET,
    audience: "https://dev-tyofb4m1.us.auth0.com/api/v2/",
  }),
};

// create and save new user
exports.create = (req, res) => {
  const id = req.query.user_id;
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  axios.request(options).then(function (response) {
    const accessToken = response.data.access_token;
    //   console.log("accessToken: ", accessToken);

    var opts = {
      method: "GET",
      url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    // save user in the Auth0 database
    axios
      .request(opts)
      .then((data) => {
        res.send(data);
        res.redirect("/");
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating a create operation",
        });
      });
  });
};

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {
  if (req.query.user_id) {
    const id = req.query.user_id;

    axios.request(options).then(function (response) {
      const accessToken = response.data.access_token;
      //   console.log("accessToken: ", accessToken);

      var opts = {
        method: "GET",
        url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users/user_id",
        headers: {
          authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
      };

      axios
        .request(opts)
        .then((data) => {
          if (!data) {
            res.status(404).send({ message: "Not found user with id " + id });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res
            .status(500)
            .send({ message: "Erro retrieving user with id " + id });
        });
    });
  } else {
    axios.request(options).then(function (response) {
      const id = req.query.user_id;
      const accessToken = response.data.access_token;
      //   console.log("accessToken: ", accessToken);

      var opts = {
        method: "GET",
        url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users/user_id",
        headers: {
          authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
      };

      axios
        .request(opts)
        .then((user) => {
          res.send(user);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Error Occurred while retriving user information",
          });
        });
    });
  }
};

// Update a new idetified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.query.user_id;

  var opts = {
    method: "GET",
    url: "https://dev-tyofb4m1.us.auth0.com/api/v2/users/user_id",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
  };

  axios
    .request(opts)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.user_id;

  axios
    .delete(`https://dev-tyofb4m1.us.auth0.com/api/v2/users/${id}`)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
