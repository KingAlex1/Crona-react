const User = require('../../users/models/user')
const pick = require('lodash')
const jwtService = require('../../../services/jwt-service')
const UserService = require('../../users/services/user-service')

const signUp = async (req, res) => {

    // const userData = pick(({...req.body}),User.createFields)
    const userData = {...req.body}

    const {_id} = await UserService.createUser(userData);
    const user = await UserService.getUserWithPublicFields({_id});
    res.status(201)
    res.send({data: user})
}


const signIn = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        res.send('Введите данные');
    }

    const user = await User.findOne({email})

    if (!user) {
        res.send('Пользователь не найден');
    }

    if (!user.comparePasswords(password)) {
        res.send('Не верный пароль');
    }

    const token = await jwtService.genToken({email});

    res.send({data: token})
}


module.exports = {
    signUp,
    signIn
}
