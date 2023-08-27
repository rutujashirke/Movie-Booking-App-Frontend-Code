const express = require('express');
const app = express();

// Other configurations...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookmymovie', { useNewUrlParser: true, useUnifiedTopology: true });

// Handle connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
const Movie = require('./models/movie'); // Import the Movie model

app.get('/movies', async (req, res) => {
    const status = req.query.status; // Get the status parameter from the query

    try {
        const movies = await Movie.find({ status }); // Find movies with the specified status
        res.json({ movies });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

