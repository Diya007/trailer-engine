var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var User = require('./user');

var MovieSchema = new mongoose.Schema({
        _user: { type: String, ref: 'User'},
        title: String
      
});

module.exports = mongoose.model('Movie', MovieSchema);