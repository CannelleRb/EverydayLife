'use strict'

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');
let Comment = require('./src/js/models/comments')

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

router.route('/comments')
    .get(function(req,res){
        Comment.find(function(error, comments){
            if (error) { res.send(error) };
            res.json(comments)
        });
    })
    .post(function(req, res) {
        let comment = new Comment();
        comment.author = req.body.author;
        comment.text = req.body.text;

        comment.save(function (error) {
            if (error) {
                res.send(error);
            }
            res.json({message: 'Comment successfully added !'});
        });
    });

router.route('/comments/:comment_id')
    .put(function(req, res) {
        Comment.findById(req.params.comment_id, function(err, comment) {
            if (err)
                res.send(err);
            (req.body.author) ? comment.author = req.body.author : null;
            (req.body.text) ? comment.text = req.body.text : null;
            comment.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Comment has been updated' });
            });
        });
    })
    .delete(function(req, res) {
        Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
            if (err)
                res.send(err);
            res.json({ message: 'Comment has been deleted' })
        })
    });

app.use('/api', router);

app.listen(port, function() {
    console.log('Api running on port '+port);
});