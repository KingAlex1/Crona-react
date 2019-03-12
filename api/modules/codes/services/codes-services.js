const Codes = require('../models/codes')

module.exports.search = async ({size, search}) => {

    const query = (search && search !== "undefined") ? {$text: {$search: search}} : {};
    
    const count = await Codes.estimatedDocumentCount();
    const codes = await Codes.find(query).limit(15).skip(parseInt(size))

    return {codes, count}

}