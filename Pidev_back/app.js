var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/PIDEV_API_db',()=>{
    console.log('connected to database')
})

var usersRouter = require('./routes/users');
var authRoute = require('./routes/auth.route');
var profileRoute = require('./routes/profile.route');
var blogueRouter = require('./routes/blogues');
var chienChasseRouter = require('./routes/chienChasse');
var commentaireRouter = require('./routes/commentaire');
var especeChasseRouter = require('./routes/especeChasse');
var localisationChasseRouter = require('./routes/localisationChasse');
var trucAstuceChasseRouter = require('./routes/trucAstuceChasse');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200/"]

}))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/users', usersRouter);
app.use('/auth',authRoute);
app.use('/profile',profileRoute);
app.use('/blogues',blogueRouter)
app.use('/chienChasse',chienChasseRouter)
app.use('/commentaire',commentaireRouter)
app.use('/especeChasse',especeChasseRouter)
app.use('/localisationChasse',localisationChasseRouter)
app.use('/trucAstuceChasse',trucAstuceChasseRouter)

module.exports = app;
