const User = require('../../users/models/user')
const pick = require('lodash')

const signUp = async (req, res) => {


    const {_id} = await User.create(req.body);
    console.log('fff',req.body)
    const user = await User.findOneWithPublicFields({ _id });
    res.send({ data: user })
}


module.exports =   signUp
