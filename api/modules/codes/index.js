const express = require('express')
const router = express.Router()
const {searchCodes} = require('./controllers/codes-controllers')
const Codes = require('./models/codes')

router.get('/table', searchCodes)

module.exports = {Codes}
module.exports = router


