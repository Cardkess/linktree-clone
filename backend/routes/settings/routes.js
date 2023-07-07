const express = require("express");
const router = express.Router();
const fs = require("fs");
const authenticateToken = require("../../middleware/auth/middleware");

// Importing models
const Image = require("../../models/Image");
const Settings = require("../../models/Settings");

// Define route to create a new Link
router.post("/", authenticateToken, async (req, res) => {
  try {
    // Extract link data from the request body
    const { title, subTitle, backgroundColor, theme, userId } = req.body;

    // Read image file from request body (assuming the image is sent as base64 data)
    const imageData = Buffer.from(req.body.image, "base64");

    const image = new Image({
      data: imageData,
      contentType: "image/png",
    });

    // Save the image to the database
    const savedImage = await image.save();

    // Creating new Image instance
    const newImage = savedImage; // Reference the savedImage directly

    // Creating new Settings instance
    const newSettings = new Settings({
      title,
      subTitle,
      backgroundColor,
      logo: newImage, // Reference the newImage instance
      theme,
      userId,
    });

    // Saving the new Settings to the database
    await newSettings.save();

    // Return a success response
    res
      .status(201)
      .json({ code: "201", message: "Settings created successfully" });
  } catch (error) {
    // Return an error response
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      // Duplicate key error occurred
      const duplicateKey = Object.keys(error.keyValue)[0];
      const duplicateValue = error.keyValue[duplicateKey];

      res.status(400).json({
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
router.get("/", async (req, res) => {
  try {
    // Retrieving all links from the database
    const settings = await Settings.find().populate("logo");

    // Return the list of links
    res.status(200).json(settings);
    
  } catch (error) {
    // Return an error response
    res.status(500).json({ code: "500", error: "An error occurred" });
  }
});

module.exports = router;
