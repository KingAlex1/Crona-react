const Codes = require('../models/codes')

module.exports.search = async ({size}) => {

    const count = await Codes.estimatedDocumentCount();   
    const codes = await Codes.find({}).limit(15).skip(parseInt(size))

    return {codes, count}

}