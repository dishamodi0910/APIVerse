const server = require("json-server");
const clone = require("clone");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const data = require("./data/db.json");

const app = server.create();
const router = server.router(clone(data), { _isFake: true });

app.use(cors());
app.use(compression());
app.use(helmet());

app.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the Jokes Rest API",
    apiVersion: "1.0.1",
    author: "https://github.com/sivaprasath2004",
    language: {
      english: "/v1/en",
    },
    time: new Date().getTime(),
  });
});

const apiRequestLimit = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    return res.status(429).json({
      status: "Error",
      message:
        "You sent too many requests. Please wait 5 minutes then try again.",
    });
  },
});

app.use("/v1", router, apiRequestLimit);

module.exports = app;