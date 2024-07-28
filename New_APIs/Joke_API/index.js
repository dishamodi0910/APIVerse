require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const data = require("./src/db");

const app = express();
const router = express.Router();

app.use(cors());
app.use(compression());
app.use(helmet());

app.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the Jokes Rest API",
    apiVersion: "1.0.1",
    author: "https://github.com/sivaprasath2004",
    language: {
      english: "/v1/en"
    },
    time: new Date().getTime(),
  });
});
app.get("/v1/en", (req, res) => {
    if(req.query._limit){
        let result=data.en.slice(0,parseInt(req.query._limit))
        res.send(result)
    }
    else if(req.query.id ){
        let result=data.en.slice(parseInt(req.query.id[0])===0?0:parseInt(req.query.id[0])-1,parseInt(req.query.id[1]))
        res.send(result)
    }
    else{
    res.json({ message: "Welcome to English jokes section!" });
    }
  })
  app.get("/v1/in", (req, res) => {
    if(req.query._limit){
        let result=data.in.slice(0,parseInt(req.query._limit))
        res.send(result)
    }
    else if(req.query.id ){
        let result=data.in.slice(parseInt(req.query.id[0])===0?0:parseInt(req.query.id[0])-1,parseInt(req.query.id[1]))
        res.send(result)
    }
    else{
    res.json({ message: "Welcome to Indonessia jokes section!" });
    }
  })
const apiRequestLimit = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  handler: (req, res) => {
    return res.status(429).json({
      status: "Error",
      message:
        "Please wait 5 minutes.",
    });
  },
});

app.use("/v1", apiRequestLimit, router);
const port=5000
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});