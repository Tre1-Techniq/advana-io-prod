// Enable CORS for all methods
const whitelist = [
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "https://advana.io",
  "https://www.advana.io",
  "https://auth.advana.io",
  "https://portaldemo.d35b5g3lrc6rok.amplifyapp.com",
  "https://dev-tyofb4m1.us.auth0.com",
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
