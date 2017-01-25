var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
        local: {
            email: String,
            movies: Array
        }
});

module.exports = mongoose.model('User', UserSchema);
