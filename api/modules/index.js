const express = require('express');
const router = express.Router();
const auth = require('./auth')
const news = require('./news')

router.use(auth)
router.use(news)

module.exports = router