const axios = require('axios')
require('dotenv').config()
const CurrencyModel = require('./model')
const fs = require('fs')
const ejs = require('ejs')

async function addWazirxData(req, res) {
    try {

        // Take Data from WazirX for Data
        let response = await axios.get(process.env.WAZIR_URL)
        response = Object.values(response.data).slice(0,10)

        // Create DB Object
        
        const aCurrencyData = []
        for (const data of response) {
            aCurrencyData.push({
                        sBaseUnit: data.base_unit,
                        sQuoteUnit: data.quote_unit,
                        sLowPrice: data.low,
                        sHighPrice: data.high,
                        sLastPrice: data.last,
                        sType: data.type,
                        sOpenPrice: data.open,
                        sVolume: data.volume,
                        sSell: data.sell,
                        sBuy: data.buy,
                        sName: data.name
            })
        }

        // Insert WazirX Data in Bulk
        const result = await CurrencyModel.create(aCurrencyData)

        res.status(201).send(result)
    } catch (error) {
        console.log(error)
        throw Error(error)
    }
}

async function viewWazirxData(req, res) {
    try {
        // Fetch Data from DB
        const aCurrencyData = await CurrencyModel.find({}).limit(10).lean()
        console.log(aCurrencyData[0])
        var iAverage;
        var iSum= 0 ;
        aCurrencyData.forEach(element => {
            iSum += parseInt(element.sBuy);
        });
        iAverage = iSum/10;
        const template = fs.readFileSync('views/' + 'home.ejs', {
            encoding: 'utf-8' // Unicode Transformation Format (UTF).
          })
        const renderedData = ejs.render(template, { average:iAverage, response: aCurrencyData, title: 'Vikram Patel' })
        return res.status(201).send(renderedData)
    } catch (error) {
        console.log(error)
        throw Error(error)
    }
}

async function test(req, res) {
    console.log('test')
}
module.exports = { addWazirxData, viewWazirxData, test }
