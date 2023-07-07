const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  logo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    required: true,
  },
  theme: {
    type: String,
    enum: ["light", "dark"],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
