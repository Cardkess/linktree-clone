// auth.routes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const router = express.Router();

// User registration route
router.post('/signup', async (req, res, next) => {
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

// User login route
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h'
    });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
