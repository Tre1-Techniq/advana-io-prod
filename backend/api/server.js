const express = require("express");
const app = express();

const fetch = require("node-fetch");

const axios = require("axios");

const bodyParser = require("body-parser");
let path = require("path");

const pbiRoutes = require("./routes/pbiRoutes");
const bqRoutes = require("./routes/bqRoutes");
const userRoutes = require("./routes/userRoutes");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
// Enable CORS for all methods
const whitelist = [
  "http://localhost:3000",
  "http://localhost:4000",
  "http://127.0.0.1:5500",
  "https://advana.io",
  "https://www.advana.io",
  "https://auth.advana.io",
  "https://portaldemo.d35b5g3lrc6rok.amplifyapp.com",
  "https://dev-tyofb4m1.us.auth0.com",
  "https://content.powerapps.com",
  "https://app.powerbi.com",
  "https://api.powerbi.com",
  "https://www.googleapis.com",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS!"));
      console.log("Origin not allowed by CORS!");
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views/crud"));

// Prepare server for Bootstrap, jQuery and PowerBI files
app.use("/js", express.static("./node_modules/bootstrap/dist/js/"));
app.use("/js", express.static("./node_modules/jquery/dist/"));
app.use("/js", express.static("./node_modules/powerbi-client/dist/"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css/"));
app.use("/public", express.static("./public/"));

// Load assets for user CRUD operations
app.use("/css", express.static(path.resolve(__dirname, "users/css")));
app.use("/img", express.static(path.resolve(__dirname, "users/img")));
app.use("/js", express.static(path.resolve(__dirname, "users/js")));

const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

var verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-tyofb4m1.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://portal-users-api.io",
  issuer: "https://dev-tyofb4m1.us.auth0.com/",
  algorithms: ["RS256"],
});

const port = process.env.PORT || 4000;

// get User Info
// app.use("/userInfo", verifyJwt, async function (req, res) {
//   try {
//     const accessToken = req.headers.authorization.split([" "])[1];
//     const response = await axios.get(
//       "https://dev-tyofb4m1.us.auth0.com/userInfo",
//       {
//         headers: {
//           authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     const userInfo = response.data;
//     res.send(userInfo);
//     // return userInfo;
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.use("/getUser", () => {
//   // let sub = [];

//   axios.get("http://localhost:4000/postUser");
// });

// app.use("/postUser", async (req, res) => {
//   const userObj = await req.body.data;
//   console.log("USER OBJ: ", await req.body.data);

//   res.send(userObj);
// });

// app.use("/getUser", async (req, res) => {
//   const url = "http://localhost:4000/postUser";
//   const options = {
//     method: "GET",
//   };
//   const response = await fetch(url, options)
//     .then((req) => req.json())
//     .catch((err) => {
//       console.log(err.message);
//     });
//   console.log("RESPONSE: ", response);
//   res.json(response.data);
// });

// User Routes
app.use("/", userRoutes);

// PowerBI Routes
app.use("/pbi", pbiRoutes);

// BigQuery Routes
app.use("/bq", bqRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error!";
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}!`);
});
