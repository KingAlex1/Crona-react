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

CodesSchema.index({name: 'text', 'name': 'text'})

module.exports = mongoose.model('codes', CodesSchema)