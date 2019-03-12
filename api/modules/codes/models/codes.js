const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const CodesSchema = new Schema({
    code: {
        type: String,
        require: "Code is required"
    },
    name: {
        type: String,
        require: "Name is required"
    }
})

module.exports = mongoose.model('codes', CodesSchema)