var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
        
        email: String,
        movies: [String]
      
});

module.exports = mongoose.model('User', UserSchema);
