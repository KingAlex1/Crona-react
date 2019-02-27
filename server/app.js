const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const PORT = 4200;


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://alex5000:mars5000@ds349065.mlab.com:49065/crona');
require('./models/user')

const reg = require('./routes/reg');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());

app.use(session({
    secret: 'crona',
    key: 'keys',
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: null
    },
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

require('./config/config-passport');
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/signup', reg);




app.listen(PORT, function(){
    console.log('Server is running on Port: ',PORT);
});