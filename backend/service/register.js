const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1",
});
const util = require("../utils/util");
const bcrypt = require("bcryptjs");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = "UserData";

async function register(userInfo) {
  const email = userInfo.email;
  const firstname = userInfo.firstname;
  const lastname = userInfo.lastname;
  const parentcompany = userInfo.parentcompany;
  const manufacturer = userInfo.manufacturer;
  const role = userInfo.role;
  const tier = userInfo.tier;
  const segment = userInfo.segment;
  const password = userInfo.password;
  if (!firstname || !manufacturer || !email || !password) {
    return util.buildResponse(401, {
      message: "All fields are required",
    });
  }

  const dynamoUser = await getUser(email.toLowerCase().trim());
  if (dynamoUser && dynamoUser.email) {
    return util.buildResponse(401, {
      message:
        "this email address already exists in our database. please choose a different email",
    });
  }

  const encryptedPW = bcrypt.hashSync(password.trim(), 10);
  const user = {
    email: email.toLowerCase().trim(),
    firstname: firstname,
    lastname: lastname,
    parentcompany: parentcompany,
    manufacturer: manufacturer,
    role: role,
    tier: tier,
    segment: segment,
    password: encryptedPW,
  };

  const saveUserResponse = await saveUser(user);
  if (!saveUserResponse) {
    return util.buildResponse(503, {
      message: "Server Error. Please try again later.",
    });
  }

  return util.buildResponse(200, { email: email });
}

async function getUser(email) {
  const params = {
    TableName: userTable,
    Key: {
      email: email,
    },
  };

  return await dynamodb
    .get(params)
    .promise()
    .then(
      (response) => {
        return response.Item;
      },
      (error) => {
        console.error("There is an error getting user: ", error);
      }
    );
}

async function saveUser(user) {
  const params = {
    TableName: userTable,
    Item: user,
  };
  return await dynamodb
    .put(params)
    .promise()
    .then(
      () => {
        return true;
      },
      (error) => {
        console.error("There is an error saving user: ", error);
      }
    );
}

module.exports.register = register;
