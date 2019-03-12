const Codes = require('../modules/codes/models/codes')
const codes = require('../mock/TNVED4')

module.exports = () => {

    console.log('codes', codes)

    const promises = [];

    codes.map((el) => {
        const codesPromise = Codes.create(el)
        promises.push(codesPromise)

    })

    return Promise.all(promises);
}