const express = require('express');
const router = express.Router();
const auth = require('./auth')
const news = require('./news')
const users = require('./users')

router.use(auth)
router.use(news)
router.use(users)

module.exports = router