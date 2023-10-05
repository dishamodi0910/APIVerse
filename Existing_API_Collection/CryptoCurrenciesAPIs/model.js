const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { dbConnect } = require('./database')

const Currency = new Schema({
  // Currency Data
  sBaseUnit: { type: String },
  sQuoteUnit: { type: String },
  sLowPrice: { type: String },
  sHighPrice: { type: String },
  sLastPrice: { type: String },
  sType: { type: String },
  sOpenPrice: { type: String || Number },
  sVolume: { type: String },
  sSell: { type: String },
  sBuy: { type: String },
  sName: { type: String }
},
{ timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } })


const CurrencyModel = dbConnect.model('currencies', Currency)

module.exports = CurrencyModel;