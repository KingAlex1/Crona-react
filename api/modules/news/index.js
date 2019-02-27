const express = require('express');
const router = express.Router();
const {create, update, del,getNews } = require('./controllers/news-controller')
const checkUser = require('../../handlers/checkUser')
const News = require('./models/news')
const checkNews = require('./handlers/checkNews')


router.post('/news',checkUser, create)
router.put('/news/:hash', checkUser, update)
router.delete('/news/:hash', checkUser, del)
router.get('/news/:hash', getNews)



module.exports = {News}
module.exports = router

