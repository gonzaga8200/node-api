/**
 * Created by gonzalomorenominguito on 24/6/16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs')

// Every time I receive a get ewquest for '/' I'll send Hello world
// By default , Content Type: text/html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
    }
))

var dogs = require('./routes/dog.js')(app);

var server = app.listen(3001, function () {
    console.log('listening at 127.0.0.1:3001')
})
