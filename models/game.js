const mongoose = require('mongoose');

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
        minLength: 1,
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

