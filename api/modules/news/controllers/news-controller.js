const pick = require('lodash')
const News = require('../models/news')

const create = async (req, res) => {

    console.log(req.user)
    const {_id} = await News.create({
        ...req.body,
        userId: '1' 
    })

    const news = await News.findOne({_id})

    res.send({data: news})
}

module.exports = {
    create
}