const express = require('express');
const router = express.Router();
const auth = require('./auth')
const news = require('./news')
const users = require('./users')
const blog = require('./blog')
const codes = require('./codes')

router.use(auth)
router.use(news)
router.use(users)
router.use(blog)
router.use(codes)

module.exports = router