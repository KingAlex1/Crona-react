const Codes = require('../models/codes')
const CodesService = require('../services/codes-services')


const searchCodes = async (req, res) => {



    const {size,search} = req.query
    console.log('query',size)
    
    const {codes, ...rest} = await CodesService.search({size,search})

    res.send({data: codes, ...rest})
}

module.exports = {
    searchCodes
}