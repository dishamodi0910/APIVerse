const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const app = express();
const validateRouter = require('./routers/validateRouter');
const getDetailsRouter = require('./routers/getDetailsRouter');

app.use(parser.json());
app.use(cors());

app.use('/',validateRouter);
app.use('/',getDetailsRouter);


module.exports = app;