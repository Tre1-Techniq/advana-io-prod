// const user = require('../models/');

module.exports.getUsers = (req, res) => {
  try {
    // TO-DO: Transfer User CRUD Logic
    res.send("Auth0 Users Backend API");
  } catch (error) {
    res.send(error.message);
  }
};
