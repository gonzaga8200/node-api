var _ = require('lodash');
var Cat = require('./../models/cat-model.js');

module.exports = function(app) {


    /*Create*/

    app.post('/cat', function(req, res){
        var newCat = new Cat(req.body);
        newCat.save(function(err){
            if (err) {
                res.json({info:'error during creating cat errors', error: err});
            }
            res.json({info:'cats create successfully'});
        });
    })

    /*Read*/

    app.get('/cat', function(req, res){
        Cat.find(function(err, cats) {
            if (err) {
                res.json({info:'error during reading cats', error: err});
            }
            res.json({info:'cats reads successfully', data: cats});
        })
    })

    app.get('/cat/:id', function(req, res){
        Cat.findById(req.params.id, function(err, cat){
            if (err) {
                res.json({info:'error during reading cat', error: err});
            }
            if (cat) {
                res.json({info:'cat found successfully', data: cat});
            } else {
                res.json({info:'cat not found'});
            }

        })
    })

    /* Update */

    app.put('/cat/:id', function(req, res){
        Cat.findById(req.params.id, function(err, cat){
            if (err) {
                res.json({info:'error during reading cat', error: err});
            }
            if (cat) {
                _.merge(cat, req.body);
                cat.save(function(err){
                    if (err) {
                        res.json({info:'error during update', error: err});
                    }
                    res.json({info:'update success'});
                })
                res.json({info:'cat found successfully', data: cat});
            } else {
                res.json({info:'cat not found'});
            }

        })
    })

    /* Delete */
    app.delete('/cat/:id', function (req, res) {
        Cat.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info:'error during remove', error: err});
            }
            res.json({info:'remove success'});
        })
    })
}