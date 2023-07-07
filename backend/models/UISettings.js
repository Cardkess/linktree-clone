const mongoose = require("mongoose");

const uiSettingsSchema = new mongoose.Schema({
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
});

const UISettings = mongoose.model("UISettings", uiSettingsSchema);

module.exports = UISettings;
