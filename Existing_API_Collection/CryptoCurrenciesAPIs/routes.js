const router = require('express').Router()
const axios = require('axios')
const { addWazirxData, test, viewWazirxData } = require('./controllers')

router.get('/test', test)
router.get('/api/add/wazirx/data', addWazirxData)


router.get('/api/view/wazirx/data', viewWazirxData)

module.exports = router