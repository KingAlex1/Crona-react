const pick = require('lodash')
const News = require('../models/news')
const NewsService = require('../services/news-services')

const create = async (req, res) => {

    const newsData = {...req.body, userId: req.user._id}

    try {
        const {_id} = await NewsService.createNews(newsData)
        const news = await News.findOne({_id})
        res.status(201)
        res.send({data: news})
    } catch (e) {
        throw new Error(e)
    }
}

const update = async (req, res, next) => {

    const {
        params: {hash} , body, user: {_id: userId,},
    } = req;
    console.log('ttttttttttttt', hash)
    const news = await News.findOne({hash})
    

    if (!news) {
        const err = new Error('Новость не найдена')
        return next(err)
    }

    if (news.userId !== userId.toHexString()) {
        const err = new Error('Не ваше новость')
        return next(err)
    }

    const newsData = {...body}
    const updatedNews = await NewsService.updateNews(newsData, news)

    res.send({data: updatedNews})
}

const del = async (req, res, next) => {

    const {user: {_id: userId,}, params: {hash}} = req

    const news = await News.findOne({hash})

    if (!news) {
        const err = new Error("Не найдено")
        return next(err)
    }

    if (news.userId !== userId.toHexString()) {
        const err = new Error("Не ваше новость")
        return next(err)
    }

    await news.remove()

    res.send({data: {id: news._id}})


}

const getNews = async (req, res, next) => {
    const {params:hash} = req
    const news = await News.findOne(hash)
    console.log(news)
    res.send({data: news})
}


module.exports = {
    create, update, del, getNews
}