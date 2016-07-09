var _ = require('lodash');
var Dog = require('./../models/dog-model.js');

module.exports = function(app) {


    /*Create*/

    app.post('/dog', function(req, res){
        var newDog = new Dog(req.body);
        newDog.save(function(err){
            if (err) {
                res.json({info:'error during creating dog errors', error: err});
            }
            res.json({info:'Dogs create successfully'});
        });
    })

    /*Read*/

    app.get('/dog', function(req, res){
        Dog.find(function(err, dogs) {
            if (err) {
                res.json({info:'error during reading dogs', error: err});
            }
            res.json({info:'Dogs reads successfully', data: dogs});
        })
    })

    app.get('/dog/:id', function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if (err) {
                res.json({info:'error during reading dog', error: err});
            }
            if (dog) {
                res.json({info:'dog found successfully', data: dog});
            } else {
                res.json({info:'dog not found'});
            }

        })
    })

    /* Update */

    app.put('/dog/:id', function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if (err) {
                res.json({info:'error during reading dog', error: err});
            }
            if (dog) {
                _.merge(dog, req.body);
                dog.save(function(err){
                    if (err) {
                        res.json({info:'error during update', error: err});
                    }
                    res.json({info:'update success'});
                })
                res.json({info:'dog found successfully', data: dog});
            } else {
                res.json({info:'dog not found'});
            }

        })
    })

    /* Delete */
    app.delete('/dog/:id', function (req, res) {
        Dog.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info:'error during remove', error: err});
            }
            res.json({info:'remove success'});
        })
    })
}