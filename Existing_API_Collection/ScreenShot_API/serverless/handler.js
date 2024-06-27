"use strict";
const admin = require("firebase-admin");

const serviceAccount = require("../hello.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://uploadimage-cdb0f.firebaseio.com"
});

const puppeteer = require("puppeteer");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/image", express.static("image"));

var bucket = admin.storage().bucket("gs://uploadimage-cdb0f.appspot.com");

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

const requestApi = async (req, res) => {
  const width = 1280;
  const height = 600;
  const { url } = req.query;
  const browser = await puppeteer.launch({
    args: [`--window-size=${width},${height}`]
  });
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(url);
  const hostName = new URL(url).hostname;
  const screenshot = await page.screenshot({ path: `image/${hostName}.png` });
  //await browser.close();
  const ImgUrl = `http://${req.headers.host}/image/${hostName}.png`;

  bucket
    .file(`screenshot/${hostName}.png`)
    .save(screenshot, {
      resumable: false,
      metadata: {
        contentType: "image/jpeg"
      }
    })
    .then(() => {
      const ImgUrl = `https://storage.googleapis.com/uploadimage-cdb0f.appspot.com/screenshot/${hostName}.png`;

      return {
        url: hostName,
        status: "200",
        image: ImgUrl
      };
    });
};

module.exports.screenShoot = async (req, res) => {
  const width = 1280;
  const height = 600;
  const { url } = req.query;
  const browser = await puppeteer.launch({
    args: [`--window-size=${width},${height}`]
  });
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(url);
  const hostName = new URL(url).hostname;
  const screenshot = await page.screenshot({ path: `image/${hostName}.png` });
  //await browser.close();
  const ImgUrl = `http://${req.headers.host}/image/${hostName}.png`;

  bucket
    .file(`screenshot/${hostName}.png`)
    .save(screenshot, {
      resumable: false,
      metadata: {
        contentType: "image/jpeg"
      }
    })
    .then(() => {
      const ImgUrl = `https://storage.googleapis.com/uploadimage-cdb0f.appspot.com/screenshot/${hostName}.png`;

      return {
        url: hostName,
        status: "200",
        image: ImgUrl
      };
    });
};
