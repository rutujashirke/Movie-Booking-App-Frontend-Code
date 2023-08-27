const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    status: String, // PUBLISHED or RELEASED
    // Other fields...
});

module.exports = mongoose.model('Movie', movieSchema);
