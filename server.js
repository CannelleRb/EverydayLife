'use strict'

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let User = require('./model/users')

let app = express();
let router = express.Router();

let port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds121212.mlab.com:21212/everyday_life');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API initialised'});
});

app.use('/api', router);

app.listen(port, function() {
    console.log('Api running on port ${port}');
});