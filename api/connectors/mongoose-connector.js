const mongoose = require('mongoose');

mongoose.Promise = Promise;

module.exports = function (mongoUri) {
   
    if (!mongoUri) {
        throw Error('Mongo uri is undefined');
    }
    return mongoose
        .connect(mongoUri)
        .then((mongodb) => {
            console.log('Mongo connected');
        })
        .catch((err) => {
            console.log(err);
        });

}