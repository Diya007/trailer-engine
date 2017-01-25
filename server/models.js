var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
        local: {
            email: String,
            movies: Array
        }
});

module.exports = mongoose.model('User', UserSchema);
