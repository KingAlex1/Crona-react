const config = require('config');
const {envs} = require('./constants/envs');
const {ENV} = require('./utils/env');
const dotenv = require('dotenv');

if (!envs[ENV]) {
    throw Error(`unknown env '${ENV}'`);
}

const PORT = process.env.PORT || config.get('port');
const MONGO_URI = process.env.MONGO_URI || config.get('mongo.uri');


module.exports = {
    PORT, MONGO_URI
}