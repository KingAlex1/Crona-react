const express = require('express');
const router = express.Router();
const {create} = require('./controllers/news-controller')
const checkUser = require('../../handlers/checkUser')
// const checkNews = require('./handlers/checkNews')
const News = require('./models/news')


router.post('/news',checkUser, create)



module.exports = {News}
module.exports = router

