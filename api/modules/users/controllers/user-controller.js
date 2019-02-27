const UserService = require('../services/user-service')
const News = require('../../news/models/news')

module.exports.getCurrentUser = async (req, res) => {
    const {user: {_id}} = req
    const user = await UserService.getUserWithPublicFields({_id})

    res.send({data: user})
}

module.exports.getNewsByUserHash = async (req, res) => {
    const {user: {hash: userHash}} = req
    console.log('fffffffffffffffffffffffffffffffffffff');
    const news = await News.find({userHash})

    res.send({data: news})
}
