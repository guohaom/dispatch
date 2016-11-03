var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/dispatch');
mongoose.set('debug', true) 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongo connection succ');
});

var DiarySchema = Schema({
    date: String,
    records: Schema.Types.Mixed
},{collection: 'diary'});
//UserSchema.set('collection', 'user');

// UserSchema.methods.login = function(username,password){
    
// }

var Diary = mongoose.model('diary', DiarySchema);

module.exports =  Diary;