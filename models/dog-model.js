/**
 * Created by gonzalomorenominguito on 28/6/16.
 */
var mongoose = require ('mongoose');
var dogSchema = mongoose.Schema({
    name: String,
    age: Number,
    type: String
});

module.exports = mongoose.model('Dog', dogSchema);