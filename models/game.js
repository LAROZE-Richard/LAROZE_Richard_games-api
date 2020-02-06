const mongoose = require('mongoose');

var categoriesCheckEmpty = function(categories){
    if(categories.length === 0){return false}
    else {return true};
}

// Schema
const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 350
    },
    editor: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 250
    },
    categories: {
        type: [String],
        required: true,
        validate: [categoriesCheckEmpty, 'Add at least one categorie'],
        enum: ['adventure', 'action', 'multiplayer', 'race', 'role games', 'simulation', 'shooting', 'sports', 'strategy']
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    releaseDate: {
        type: Date,
        default: Date.now
    },
    isAwardWinner: {
        type: Boolean,
        default: false
    }
});

// Model
const Game = mongoose.model('Game', gameSchema);

// Export
module.exports = Game;

