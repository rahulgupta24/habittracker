const mongoose = require('mongoose');
require('dotenv').config()

console.log('process.env.MONGODB_URI', process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database Connected !!!");
});

module.exports= db;