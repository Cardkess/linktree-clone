const express = require("express");
const router = express.Router();
const authenticateToken = require("../../middleware/auth/middleware");

// Importing models
const Image = require("../../models/Image");
const Settings = require("../../models/Settings");

// Define route to create /update settings
// Define route to create/update settings
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

    // Check if image exists
    let existingImage = await Image.findOne();

    if (existingImage) {
      // Image exists, update the existing record
      existingImage.set({
        data: imageData,
        contentType: "image/png",
      });

      await existingImage.save();
    } else {
      // Image does not exist, create a new record
      existingImage = await image.save();
    }

    // Check if settings exist
    const existingSettings = await Settings.findOne();

    if (existingSettings) {
      // Settings exist, update the existing record
      existingSettings.title = title;
      existingSettings.subTitle = subTitle;
      existingSettings.backgroundColor = backgroundColor;
      existingSettings.theme = theme;
      existingSettings.logo = existingImage._id; // Use the existingImage ID
      existingSettings.userId = userId;

      await existingSettings.save();
    } else {
      // Settings do not exist, create a new record
      const newSettings = new Settings({
        title,
        subTitle,
        backgroundColor,
        logo: existingImage._id, // Use the existingImage ID
        theme,
        userId,
      });

      await newSettings.save();
    }

    // Return a success response
    res
      .status(201)
      .json({ code: "201", message: "Settings created/updated successfully" });
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
    const settings = await Settings.findOne().populate("logo");

    // Return the list of links
    res.status(200).json(settings);
    
  } catch (error) {
    // Return an error response
    res.status(500).json({ code: "500", error: "An error occurred" });
  }
});

module.exports = router;
