const mongoose = require('mongoose');

// Connecting to db
mongoose.connect('mongodb://localhost:27017/gamesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('Connected to games DB...'))
.catch(err => console.log(`Error connecting to db: ${err}`));

// Exporting all models
module.exports.Game = require('./game');