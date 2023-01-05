const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pintu870:LIL709VUQY0S1yhm@cluster0.inxx8yi.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error conection on mongodb'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;