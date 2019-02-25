const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const uuid = require('uuid/v4')

const NewsSchema = new Schema({
    // userHash: {
    //     type: String,
    //     required: 'User hash is required',
    // },
    userId: {
        type: String,
        required: 'User id is required'
    },
    title: {
        type: String,
        required: 'Title is required',
        trim: true,
    },
    description: {
        type: String,
        required: 'Description is required',
        trim: true,
    },
    date: {
        type: Date,
        required: 'Date is required',
        trim: true,
    },
    link: {
        type: String,
        required: 'Link is required',
        trim: true,
    }

}, {timestamps: true})

NewsSchema.statics.createFields = ['title', 'description', 'date', 'link']

// NewsSchema.virtual('user', {
//     ref: 'user',
//     localField: 'userHash',
//     foreignField: 'hash',
//     justOne: true,
//
// })
//
// NewsSchema.pre('save', function (next) {
//     if (!this.hash) {
//         this.hash = uuid()
//     }
//     next()
//
// })

module.exports = mongoose.model('news', NewsSchema);