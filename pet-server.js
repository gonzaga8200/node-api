var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
    }
));

var pets = require('./routes/pet.js')(app);

var server = app.listen(3002, function(){
    console.log('Escuchando pets en el 3002')
});

