const express = require('express');
const router = express.Router();

// Import the User model
const User = require('../models/User');

// Define route to create a new user
router.post('/users', async (req, res) => {
  try {
    // Extract user data from the request body
    const { email, password } = req.body;

    // Create a new User instance
    const newUser = new User({ email, password });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Add more routes and endpoints as needed

module.exports = router;
