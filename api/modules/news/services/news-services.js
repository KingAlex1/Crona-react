const News = require('../models/news')

module.exports.createNews = async (data) => {

    const {userId} = data
    const newsCountByUserId = await News.count({userId})

    if (newsCountByUserId === 10) {
        throw Error('The user cannot create more 3 Summary');
    }
    return News.create(data)


}

module.exports.updateNews =  (data, news) => {
    news.set(data)
    try {
        return  news.save()
    } catch (e) {
        const err = new Error(e)
        next(err)
    }
}


