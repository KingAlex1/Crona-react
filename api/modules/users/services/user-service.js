const User = require('../models/user')

module.exports.createUser = async (data) => {
    try {
        return await User.create(data)
    } catch (e) {
        // throw new Error({status: 400, ...e})
    }
}

module.exports.getUserWithPublicFields = (params) => {
    return User.findOne(params).select({
        password: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    })
}



