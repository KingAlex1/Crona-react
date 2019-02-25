const {MONGO_URI} = require('../config');
const mongooseConnector = require('./mongoose-connector');



function connectorsInit() {
    mongooseConnector(MONGO_URI);
}

module.exports = {
    mongooseConnector,
    connectorsInit
};


