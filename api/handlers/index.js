const bodyParser = require('body-parser');
const logger = require('morgan');
const {IS_DEV} = require('../utils/env');
const error = require('./error');
const error404 = require('./404');

module.exports = function (app) {
    if (IS_DEV) {
        app.use(logger('dev'));
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(error404)
    app.use(error);

};