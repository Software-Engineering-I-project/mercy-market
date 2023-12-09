const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB (replace with your actual MongoDB URI)
mongoose.connect('mongodb://localhost:27017/your-database', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Create a User model
const User = mongoose.model('User', {
    email: String,
    password: String,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Create a new user in the database
        const user = new User({ email, password });
        await user.save();

        res.send('Account created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});