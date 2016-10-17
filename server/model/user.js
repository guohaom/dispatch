var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/dispatch');
mongoose.set('debug', true) 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongo connection succ');
});

var UserSchema = mongoose.Schema({
    name: String,
    password: String
},{collection: 'user'});
//UserSchema.set('collection', 'user');

// UserSchema.methods.login = function(username,password){
    
// }

var User = mongoose.model('user', UserSchema);

module.exports =  User;