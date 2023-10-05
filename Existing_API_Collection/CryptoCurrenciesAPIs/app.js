const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
global.appRootPath = __dirname
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
/* global appRootPath */
app.use(express.static(path.join(appRootPath, 'public')))
app.set('view engine', 'ejs')
app.use('/', require('./routes'))
require('dotenv').config();     


app.listen(process.env.PORT, () => {
    console.log('Magic happens on port :' + process.env.PORT)
});
