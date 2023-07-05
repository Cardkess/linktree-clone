const express = require('express');
const router = express.Router();

// Import the User model
const User = require('../models/User');

// Define route to create a new user
router.post('/users', async (req, res) => {
  try {
    // Extract user data from the request body
    const {name, email, password } = req.body;
    
    // Create a new User instance
    const newUser = new User({name, email, password });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    res.status(201).json({code:'201', message: 'User created successfully' });

  } catch (error) {
    // Return an error response
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      // Duplicate key error occurred
      const duplicateKey = Object.keys(error.keyValue)[0];
      const duplicateValue = error.keyValue[duplicateKey];
      
      res.status(200).json({code:'400', error: `User with ${duplicateKey}: ${duplicateValue} already exists.` });
    } else {
      // Other error occurred
      res.status(200).json({code:'500', error: 'An error occurred' });
    }
  }
});

// Add more routes and endpoints as needed

module.exports = router;
