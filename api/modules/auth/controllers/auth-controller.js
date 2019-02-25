const User = require('../../users/models/user')
const pick = require('lodash')
const jwtService = require('../../../services/jwt-service')

const signUp = async (req, res) => {
    const {_id} = await User.create(req.body);
    console.log('fff', req.body)
    const user = await User.findOneWithPublicFields({_id});
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

    const token = await jwtService.genToken({ email });

    res.send({data: token})
}


module.exports = {
    signUp,
    signIn
}
