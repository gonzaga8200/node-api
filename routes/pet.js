var r = require('request').defaults({
    json: true
});

module.exports = function(app) {
    app.get('/pets', function(req, res){
        r({uri: 'http://localhost:3001/dog'}, function(error, response, body){
            console.log(response);
            if (!error && response.statusCode === 200) {
                res.json(body)
            } else {
                res.send(response.statusCode);

            }
        });
    })
}
