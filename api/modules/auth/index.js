const express = require('express');
const router = express.Router();
const {signUp, signIn} = require('./controllers/auth-controller')
const checkUser = require('../../handlers/checkUser')

router.post('/auth/signup', signUp)
router.post('/auth/signin', signIn)
router.post('/auth/private', checkUser)

module.exports = router;