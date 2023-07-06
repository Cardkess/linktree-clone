const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/auth/middleware');

// Import the Link model
const Link = require('../../models/Link');

// Define route to create a new Link
router.post('/', authenticateToken, async (req, res) => {
    try {
        // Extract link data from the request body
        const { title, url, userId } = req.body;
    
        // Create a new Link instance
        const newLink = new Link({ title, url, userId});
    
        // Save the new Link to the database
        await newLink.save();
    
        // Return a success response
        res.status(201).json({ code: "201", message: "Link created successfully" });
      } catch (error) {
        // Return an error response
        if (error.code === 11000 && error.keyPattern && error.keyValue) {
          // Duplicate key error occurred
          const duplicateKey = Object.keys(error.keyValue)[0];
          const duplicateValue = error.keyValue[duplicateKey];
    
          res
            .status(400)
            .json({
              code: "400",
              error: `Link with ${duplicateKey}: ${duplicateValue} already exists.`,
            });
        } else {
          // Other error occurred
          res.status(500).json({ code: "500", error: "An error occurred" });
        }
      }
    

});

// Defining route to list all Links
router.get('/', async (req, res) => {
  try {
    // Retrieving all links from the database
    const links = await Link.find();

    // Return the list of links
    res.status(200).json(links);

  } catch (error) {
    // Return an error response
    res.status(500).json({ code: "500", error: "An error occurred" });
  }
});


module.exports = router;
