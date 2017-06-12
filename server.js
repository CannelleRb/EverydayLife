'use strict'

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
let User = require('./model/users')

let app = express();
let router = express.Router();

let port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://CannelleRb:hello@ds121212.mlab.com:21212/everyday_life');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options('*',cors());

router.get('/', function(req, res) {
    res.json({ message: 'API initialised'});
});

router.route('/users')
    .get(function(req,res){
        User.find(function(error, users){
            if (error) { res.send(error) };
            res.json(users)
        });
    })
    .post(function(req,res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;

        user.save(function (error) {
            if (error) {
                res.send(error);
            }
            res.json({message: 'User successfully added !'});
        });
    });

app.use('/api', router);

app.listen(port, function() {
    console.log('Api running on port '+port);
});