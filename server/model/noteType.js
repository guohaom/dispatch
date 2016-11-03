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

var NoteTypeSchema = Schema({
    type: String,
    types: Schema.Types.Mixed
},{collection: 'noteType'});

var NoteType = mongoose.model('noteType', NoteTypeSchema);

module.exports =  NoteType;